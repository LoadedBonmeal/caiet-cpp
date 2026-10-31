// Real C++ in the browser: clang++ 21 (YoWASP, WebAssembly) compiles in a worker,
// a second worker runs the program under WASI with stdin and a virtual folder for files.
// The compiler's files are published next to the page (cc/), gzip-compressed and split
// into chunks; they are downloaded once and kept in IndexedDB.
(function () {
  const CLANG = "https://cdn.jsdelivr.net/npm/@yowasp/clang@21.1.4-3/gen/bundle.js";
  const SHIM = "https://cdn.jsdelivr.net/npm/@bjorn3/browser_wasi_shim@0.4.2/dist/index.js";
  const VERSION = "clang-21.1.4-3";
  const PARTS = {
    "llvm.core.wasm": { gz: ["cc/core.0.gz.wasm", "cc/core.1.gz.wasm"], type: "application/wasm", size: 21914596 },
    "llvm-resources.tar": { gz: ["cc/usr.gz.wasm"], type: "application/x-tar", size: 4264188 },
    "llvm.core2.wasm": { raw: "cc/llvm.core2.wasm", type: "application/wasm", size: 37626 },
    "llvm.core3.wasm": { raw: "cc/llvm.core3.wasm", type: "application/wasm", size: 5458 },
    "llvm.core4.wasm": { raw: "cc/llvm.core4.wasm", type: "application/wasm", size: 787 },
  };
  // Many Romanian students write #include <bits/stdc++.h>; libc++ has no such header.
  const STDCPP = ["iostream", "fstream", "sstream", "iomanip", "cstdio", "cstdlib", "cstring", "cmath", "cctype", "climits", "cfloat", "ctime",
    "string", "vector", "algorithm", "utility", "map", "set", "queue", "stack", "deque", "list", "numeric", "bitset", "functional", "iterator", "limits", "unordered_map", "unordered_set"]
    .map(h => `#include <${h}>`).join("\n");

  const compilerSrc = `
    const PARTS = ${JSON.stringify(PARTS)};
    const TOTAL = Object.values(PARTS).reduce((a, p) => a + p.size, 0);
    const STDCPP = ${JSON.stringify(STDCPP)};
    let base, clangP, loaded = 0;
    const realFetch = self.fetch.bind(self);
    const prog = () => postMessage({ type: "progress", loaded, total: TOTAL });
    function idb() {
      return new Promise((res, rej) => { const r = indexedDB.open("caiet-cc", 1); r.onupgradeneeded = () => r.result.createObjectStore("f"); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
    }
    // Cached as ArrayBuffers: a Blob kept in IndexedDB can come back unreadable ("Failed to read from a ReadableStream").
    async function cacheGet(k) { try { const db = await idb(); return await new Promise(res => { const q = db.transaction("f").objectStore("f").get(k); q.onsuccess = () => res(q.result instanceof ArrayBuffer ? q.result : null); q.onerror = () => res(null); }); } catch (e) { return null; } }
    async function cachePut(k, blob) { try { const buf = await blob.arrayBuffer(); const db = await idb(); db.transaction("f", "readwrite").objectStore("f").put(buf, k); } catch (e) {} }
    async function cacheClear() { try { const db = await idb(); db.transaction("f", "readwrite").objectStore("f").clear(); } catch (e) {} }
    async function download(path) {
      const r = await realFetch(new URL(path, base));
      if (!r.ok) throw new Error("HTTP " + r.status + " " + path);
      const reader = r.body.getReader(), chunks = [];
      for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); loaded += value.length; prog(); }
      return new Blob(chunks);
    }
    self.fetch = async (url, opts) => {
      const name = String(url).split("/").pop().split("?")[0];
      const p = PARTS[name];
      if (!p) return realFetch(url, opts);
      const key = "${VERSION}/" + name;
      const hit = await cacheGet(key);
      let blob = hit && new Blob([hit]);
      if (blob) { loaded += blob.size; prog(); }
      else {
        const parts = [];
        for (const part of (p.gz || [p.raw])) parts.push(await download(part));
        blob = new Blob(parts);
        cachePut(key, blob);
      }
      let body = blob.stream();
      if (p.gz) body = body.pipeThrough(new DecompressionStream("gzip"));
      return new Response(body, { headers: { "content-type": p.type } });
    };
    function clang() {
      if (!clangP) clangP = (async () => {
        const m = await import("${CLANG}");
        const sink = () => {};
        // A real compile, so a broken download or cache fails here and not on her first program.
        await m.runClang(["clang++", "-x", "c++", "-c", "t.cpp", "-o", "t.o"], { "t.cpp": "int main(){return 0;}" }, { stdout: sink, stderr: sink });
        return m;
      })().catch(async e => { clangP = null; loaded = 0; await cacheClear(); throw e; });
      return clangP;
    }
    onmessage = async ({ data }) => {
      if (data.type === "init") {
        base = data.base;
        try { await clang(); postMessage({ type: "ready" }); }
        catch (e) { clangP = null; postMessage({ type: "error", message: String(e && e.message || e) }); }
      } else if (data.type === "compile") {
        let log = "";
        const dec = new TextDecoder();
        const collect = b => { if (b) log += dec.decode(b, { stream: true }); };
        try {
          const m = await clang();
          const out = await m.runClang(
            ["clang++", "-std=c++17", "-O2", "-I.", "-Wall", "-Wno-unused-variable", "-Wno-unused-but-set-variable", "-Wno-sign-compare", "-fno-exceptions", "main.cpp", "-o", "main.wasm"],
            { "main.cpp": data.code, "bits": { "stdc++.h": STDCPP } },
            { stdout: collect, stderr: collect, decodeASCII: false });
          const wasm = out["main.wasm"];
          postMessage({ type: "compiled", id: data.id, ok: true, wasm, log }, [wasm.buffer]);
        } catch (e) {
          postMessage({ type: "compiled", id: data.id, ok: false, log: log || String(e && e.message || e) });
        }
      }
    };`;

  const runnerSrc = `
    const LIMIT = 200000;
    onmessage = async ({ data }) => {
      let shim;
      try { shim = await import("${SHIM}"); }
      catch (e) { postMessage({ out: "", err: "", code: 0, crash: "SHIM: " + String(e && e.message || e), files: {} }); return; }
      const { WASI, File, OpenFile, ConsoleStdout, PreopenDirectory } = shim;
      const enc = new TextEncoder(), dec = new TextDecoder();
      let out = "", err = "", code = 0, crash = "";
      const write = s => { out += s; if (out.length > LIMIT) throw new Error("OUTPUT_LIMIT"); };
      const dir = new PreopenDirectory(".", new Map(Object.entries(data.files || {}).map(([k, v]) => [k, new File(enc.encode(v))])));
      const fds = [
        new OpenFile(new File(enc.encode(data.stdin || ""))),
        new ConsoleStdout(b => write(dec.decode(b, { stream: true }))),
        new ConsoleStdout(b => { err += dec.decode(b, { stream: true }); }),
        dir,
      ];
      try {
        const wasi = new WASI(["main"], [], fds);
        const mod = await WebAssembly.compile(data.wasm);
        const inst = await WebAssembly.instantiate(mod, { wasi_snapshot_preview1: wasi.wasiImport });
        code = wasi.start(inst);
      } catch (e) { crash = String(e && e.message || e); }
      const files = {};
      for (const [k, v] of dir.dir.contents) if (v && v.data) files[k] = dec.decode(v.data);
      postMessage({ out, err, code, crash, files });
    };`;

  const blobURL = src => URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
  const compilerURL = blobURL(compilerSrc), runnerURL = blobURL(runnerSrc);
  let worker = null, readyP = null, seq = 0;
  const pending = new Map(), subs = new Set();
  const CC = { state: "idle", loaded: 0, total: Object.values(PARTS).reduce((a, p) => a + p.size, 0), error: "" };
  const emit = () => subs.forEach(f => { try { f(CC); } catch (e) {} });

  CC.subscribe = f => { subs.add(f); return () => subs.delete(f); };
  CC.load = function () {
    if (readyP) return readyP;
    CC.state = "loading"; CC.loaded = 0; emit();
    worker = new Worker(compilerURL, { type: "module" });
    readyP = new Promise((resolve, reject) => {
      worker.onmessage = ({ data }) => {
        if (data.type === "progress") { CC.loaded = data.loaded; emit(); }
        else if (data.type === "ready") { CC.state = "ready"; emit(); resolve(); }
        else if (data.type === "error") { CC.state = "error"; CC.error = data.message; emit(); readyP = null; worker.terminate(); reject(new Error(data.message)); }
        else if (data.type === "compiled") { const p = pending.get(data.id); pending.delete(data.id); p && p(data); }
      };
      worker.onerror = e => { CC.state = "error"; CC.error = e.message || "worker"; emit(); readyP = null; reject(new Error(CC.error)); };
    });
    worker.postMessage({ type: "init", base: location.href });
    return readyP;
  };
  CC.compile = async function (code) {
    await CC.load();
    const id = ++seq;
    return new Promise(res => { pending.set(id, res); worker.postMessage({ type: "compile", id, code }); });
  };
  // Runs one compiled program. The worker is killed after `ms` (infinite loops, waiting for input that never comes).
  CC.run = function (wasm, stdin, files, ms = 4000) {
    return new Promise(res => {
      const w = new Worker(runnerURL, { type: "module" });
      const t = setTimeout(() => { w.terminate(); res({ timeout: true, out: "", err: "", files: {} }); }, ms);
      w.onmessage = ({ data }) => { clearTimeout(t); w.terminate(); res(data); };
      w.onerror = e => { clearTimeout(t); w.terminate(); res({ crash: "WORKER: " + (e.message || e.type || "error") + (e.filename ? " @ " + e.filename : ""), out: "", err: "", files: {} }); };
      w.postMessage({ wasm, stdin, files });
    });
  };
  window.CC = CC;
})();
