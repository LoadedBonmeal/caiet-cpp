/* ───── icons: drawn marks, not emoji ───── */
const ICON = {
  check: `<svg class="ic" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  cross: `<svg class="ic" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4.5 4.5l7 7M11.5 4.5l-7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

/* ───── strings ───── */
const UI = {
  ro: {
    scope: "Diferență · mate-info intensiv", home: "Acasă", exam: "Simulare examen",
    g9: "Clasa a IX-a", g10: "Clasa a X-a",
    lesson: "Lecție", quiz: "Test", probs: "Probleme",
    run: "Rulează", running: "Compilez și rulez…", stdin: "Intrare", output: "Ieșire", expected: "Așteptat", yours: "Programul tău", input: "Intrare",
    runTests: "Rulează testele", hint: "Indiciu", sol: "Soluția", hideSol: "Ascunde soluția", explain: "Explică-mi greșeala", reset: "Cod nou",
    allPass: "Toate testele trec", nPass: (a, b) => `${a} din ${b} teste trec`, compileErr: "Nu compilează", timeout: "Timp depășit: programul nu s-a oprit în 4 secunde (buclă infinită sau așteaptă date care nu vin).", crash: "Programul s-a oprit cu o eroare:",
    noOut: "(nimic afișat)", warn: "Avertismente de la compilator", fileOut: "date.out",
    ccIdle: "Compilator C++ · se încarcă la prima rulare", ccLoading: p => `Compilator C++ · se descarcă ${p}%`, ccReady: "Compilator C++ (clang 21) · gata", ccError: "Compilatorul nu a putut porni aici",
    ccFail: "Compilatorul nu poate rula în această pagină. Testează codul în CodeBlocks; tutorele AI îl poate verifica în locul compilatorului.",
    aiCheck: "Verifică cu tutorele AI",
    solvedB: "rezolvată", todo: "nerezolvată",
    score: "Scor", retry: "Reia testul",
    askT: "Întreabă tutorele", askPh: "De exemplu: de ce scriem d*d <= n?", ask: "Întreabă", thinking: "Mă gândesc…",
    err: { not_granted: "Tutorele nu are permisiunea de a rula. Restul aplicației merge normal.", rate_limited: "Prea multe cereri. Mai încearcă peste un minut.", invalid_json: "Răspuns într-un format greșit. Apasă din nou.", default: "Tutorele nu a putut răspunde acum. Încearcă din nou." },
    intensive: "La multe licee capitolul acesta se cere doar la informatică intensiv. Verifică tematica primită de la liceu.",
    menu: "Meniu", close: "Închide",
    starter: "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    \n    return 0;\n}\n",
  },
  en: {
    scope: "Diferență · math-CS intensive", home: "Home", exam: "Mock exam",
    g9: "Grade 9", g10: "Grade 10",
    lesson: "Lesson", quiz: "Quiz", probs: "Problems",
    run: "Run", running: "Compiling and running…", stdin: "Input", output: "Output", expected: "Expected", yours: "Your program", input: "Input",
    runTests: "Run the tests", hint: "Hint", sol: "Solution", hideSol: "Hide solution", explain: "Explain my mistake", reset: "Fresh code",
    allPass: "All tests pass", nPass: (a, b) => `${a} of ${b} tests pass`, compileErr: "Does not compile", timeout: "Time limit: the program didn't stop within 4 seconds (an infinite loop, or it is waiting for input that never comes).", crash: "The program stopped with an error:",
    noOut: "(nothing printed)", warn: "Compiler warnings", fileOut: "date.out",
    ccIdle: "C++ compiler · loads on the first run", ccLoading: p => `C++ compiler · downloading ${p}%`, ccReady: "C++ compiler (clang 21) · ready", ccError: "The compiler couldn't start here",
    ccFail: "The compiler can't run in this page. Test the code in CodeBlocks; the AI tutor can check it instead.",
    aiCheck: "Check with the AI tutor",
    solvedB: "solved", todo: "not solved",
    score: "Score", retry: "Retake quiz",
    askT: "Ask the tutor", askPh: "For example: why do we write d*d <= n?", ask: "Ask", thinking: "Thinking…",
    err: { not_granted: "The tutor isn't allowed to run. Everything else works.", rate_limited: "Too many requests. Try again in a minute.", invalid_json: "The answer came back in the wrong format. Press again.", default: "The tutor couldn't answer right now. Try again." },
    intensive: "Many schools only examine this chapter for intensive CS classes. Check the topic list from the school.",
    menu: "Menu", close: "Close",
    starter: "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    \n    return 0;\n}\n",
  },
};

const EXAM_DAY = new Date(2026, 10, 4); // first difference-exam day in the school's transfer timetable
const daysLeft = () => Math.max(0, Math.ceil((EXAM_DAY - new Date()) / 86400000));
// Four days to the exam: grade-9 basics first (they carry the most marks), grade 10 last, a mock exam on the eve.
const CRASH = [
  { date: "2026-10-31", short: { ro: "Sâm 31", en: "Sat 31" }, long: { ro: "sâmbătă, 31 octombrie", en: "Saturday, 31 October" }, ids: ["m0", "m1", "m2", "m3", "m4"] },
  { date: "2026-11-01", short: { ro: "Dum 1", en: "Sun 1" }, long: { ro: "duminică, 1 noiembrie", en: "Sunday, 1 November" }, ids: ["m5", "m6", "m7", "m14"] },
  { date: "2026-11-02", short: { ro: "Lun 2", en: "Mon 2" }, long: { ro: "luni, 2 noiembrie", en: "Monday, 2 November" }, ids: ["m8", "m9", "m10"] },
  { date: "2026-11-03", short: { ro: "Mar 3", en: "Tue 3" }, long: { ro: "marți, 3 noiembrie", en: "Tuesday, 3 November" }, ids: ["m11", "m12", "m13"], note: { ro: "Seara: Fișa de recapitulare și o simulare de examen.", en: "In the evening: the recap sheet and one mock exam." } },
  { date: "2026-11-04", short: { ro: "Mie 4", en: "Wed 4" }, long: { ro: "miercuri, 4 noiembrie", en: "Wednesday, 4 November" }, ids: [], exam: true, note: { ro: "Examenul. Dimineața recitește doar Fișa de recapitulare.", en: "Exam day. In the morning, only reread the recap sheet." } },
];
// The public build (site/, built by tools/build-site.js) sets window.CAIET_PUBLIC: no name, school or transfer details.
const PUBLIC = window.CAIET_PUBLIC === true;
const NAME = "";
const hi = ro => NAME ? (ro ? `Bună, ${NAME}!` : `Hi, ${NAME}!`) : (ro ? "Bună!" : "Hi!");
const isoToday = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };
function todayIdx() {
  const t = isoToday(), i = CRASH.findIndex(d => d.date >= t);
  return i === -1 ? CRASH.length - 1 : i;
}

/* ───── state (per viewer, browser storage) ───── */
const KEY = "caiet-cpp-v1";
let S = { lang: "ro", read: {}, quiz: {}, solved: {}, code: {}, incl: false };
try { Object.assign(S, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const L = x => (x && typeof x === "object" && !Array.isArray(x)) ? (x[S.lang] ?? x.ro) : x;
const U = k => UI[S.lang][k];
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const $ = (s, el = document) => el.querySelector(s);
const ALLP = MODULES.flatMap(m => m.probs.map(p => ({ ...p, mod: m })));
const fmtGrade = g => g == null ? "—" : (S.lang === "ro" ? g.toFixed(2).replace(".", ",") : g.toFixed(2));

/* ───── grades: the register ───── */
function chapterParts(m) {
  const q = S.quiz[m.id], solved = m.probs.filter(p => S.solved[p.id]).length;
  return { read: !!S.read[m.id], q, qn: m.quiz.length, solved, pn: m.probs.length };
}
// 1 (din oficiu) + 9 × (10% lesson, 40% best quiz, 50% problems solved). No activity → no grade.
function chapterGrade(m) {
  const c = chapterParts(m);
  if (!c.read && c.q == null && !c.solved) return null;
  return 1 + 9 * (0.1 * c.read + 0.4 * ((c.q ?? 0) / c.qn) + 0.5 * (c.solved / c.pn));
}
function inScope(m) { return true; } // intensive informatics: every chapter counts
function estimate() {
  const ms = MODULES.filter(inScope);
  const parts = ms.map(m => (chapterGrade(m) ?? 1) - 1);
  return 1 + parts.reduce((a, b) => a + b, 0) / ms.length;
}
function nextChapter() {
  return MODULES.filter(inScope).find(m => (chapterGrade(m) ?? 0) < 8.5) || null;
}

/* ───── C++ highlighter ───── */
const KW = /^(if|else|while|for|do|return|switch|case|break|continue|default|using|namespace|struct|true|false|const|NULL|include)$/;
const TY = /^(int|long|double|float|char|bool|void|unsigned|short|ifstream|ofstream|cin|cout|endl|fin|fout|std)$/;
function hl(code) {
  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(^[ \t]*#[^\n]*)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/gm;
  let out = "", last = 0, m;
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index));
    const t = m[0];
    out += m[1] ? `<span class="c">${esc(t)}</span>` : m[2] ? `<span class="s">${esc(t)}</span>` : m[3] ? `<span class="pp">${esc(t)}</span>` : m[4] ? `<span class="n">${t}</span>` : KW.test(t) ? `<span class="k">${t}</span>` : TY.test(t) ? `<span class="t">${t}</span>` : t;
    last = m.index + t.length;
  }
  return out + esc(code.slice(last));
}

/* ───── compiler errors in plain words ───── */
const TIPS = [
  [/expected ';'/, { ro: "Lipsește ; la sfârșitul unei instrucțiuni (uită-te la linia indicată sau la cea de deasupra).", en: "A ; is missing at the end of a statement (check the line shown or the one above)." }],
  [/use of undeclared identifier '(cout|cin|endl)'/, { ro: "cin/cout nu sunt recunoscute: lipsește #include <iostream> sau using namespace std;", en: "cin/cout aren't recognised: #include <iostream> or using namespace std; is missing." }],
  [/use of undeclared identifier '(\w+)'/, { ro: "Variabila „$1” nu este declarată (sau e scrisă diferit). Declar-o înainte de folosire, ex. int $1;", en: "The variable “$1” isn't declared (or is spelled differently). Declare it before use, e.g. int $1;" }],
  [/expected '}'/, { ro: "Lipsește o acoladă } — numără acoladele deschise și închise.", en: "A closing } is missing — count your opening and closing braces." }],
  [/expected '\)'/, { ro: "Lipsește o paranteză ) — verifică parantezele de la if/while/for.", en: "A ) is missing — check the brackets in if/while/for." }],
  [/expected expression/, { ro: "Expresie incompletă: probabil un operator sau o paranteză în plus.", en: "Incomplete expression: probably an extra operator or bracket." }],
  [/redefinition of '(\w+)'/, { ro: "„$1” este declarată de două ori.", en: "“$1” is declared twice." }],
  [/using the result of an assignment as a condition/, { ro: "Ai scris = în condiție. Pentru comparație folosește ==.", en: "You wrote = in a condition. Use == to compare." }],
  [/variable '(\w+)' is uninitialized/, { ro: "„$1” e folosită înainte să primească o valoare. Inițializeaz-o (ex. $1 = 0).", en: "“$1” is used before it gets a value. Initialise it (e.g. $1 = 0)." }],
];
function tipFor(log) {
  for (const [re, t] of TIPS) { const m = log.match(re); if (m) return L(t).replace(/\$1/g, m[1] || ""); }
  return "";
}
const clean = log => log.replace(/\n?\d+ (errors?|warnings?)( and \d+ warnings?)? generated\.\n?/g, "").trim();

/* ───── compile + run ───── */
const norm = s => String(s ?? "").trim().split(/\s+/).join(" ");
async function runProgram(code, cases, io) {
  const c = await CC.compile(code);
  if (!c.ok) return { compile: false, log: clean(c.log) };
  const results = [];
  for (const inp of cases) {
    const r = await CC.run(c.wasm, io === "file" ? "" : inp, io === "file" ? { "date.in": inp } : {}, 4000);
    results.push({ ...r, output: io === "file" ? (r.files?.["date.out"] ?? "") : r.out });
  }
  return { compile: true, log: clean(c.log), results };
}
function consoleHTML(res, expected) {
  if (!res.compile) {
    const tip = tipFor(res.log);
    return `<div class="console"><span class="lbl">${U("compileErr")}</span><span class="err">${esc(res.log)}</span>${tip ? `<span class="tip">${esc(tip)}</span>` : ""}</div>`;
  }
  const r = res.results[0];
  let h = `<div class="console"><span class="lbl">${U("output")}</span>`;
  if (r.timeout) h += `<span class="err">${esc(U("timeout"))}</span>`;
  else if (r.crash) h += `<span class="err">${esc(U("crash"))} ${esc(r.crash)}</span>`;
  else h += r.output ? esc(r.output) : `<span class="lbl">${U("noOut")}</span>`;
  if (r.err) h += `\n<span class="err">${esc(r.err)}</span>`;
  if (res.log) h += `\n<span class="lbl">${U("warn")}</span>${esc(res.log)}${tipFor(res.log) ? `<span class="tip">${esc(tipFor(res.log))}</span>` : ""}`;
  return h + "</div>";
}

/* ───── Claude tutor (optional) ───── */
let sample = null;
(async () => { try { sample = await window.claude?.use?.("sample") ?? null; } catch (e) { sample = null; } if (sample) render(); })();
const errText = e => (U("err")[e?.code] || U("err").default);
function md(t) {
  return t.split(/```(?:cpp|c\+\+)?\n?/).map((part, i) => i % 2 ? `<pre>${hl(part.replace(/\n$/, ""))}</pre>` : esc(part).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>")).join("");
}

/* ───── routing ───── */
let view = "acasa", tab = "lesson", menuOpen = false, nextTab = null;
function go() {
  const h = (location.hash || "#acasa").slice(1);
  view = (h === "examen" || h === "recap" || MODULES.some(m => m.id === h)) ? h : "acasa";
  menuOpen = false; render(); window.scrollTo(0, 0);
}
window.addEventListener("hashchange", () => { tab = nextTab || "lesson"; nextTab = null; go(); });
// Links that open a chapter on a given tab: <a href="#m3" data-open-tab="quiz">
document.addEventListener("click", e => { const a = e.target.closest("a[data-open-tab]"); if (a) nextTab = a.dataset.openTab; });

/* ───── sidebar ───── */
function ccLine() {
  const st = CC.state, p = Math.round(100 * CC.loaded / CC.total);
  const txt = st === "ready" ? U("ccReady") : st === "loading" ? U("ccLoading")(p) : st === "error" ? U("ccError") : U("ccIdle");
  return `<span class="cc-dot ${st}"></span><span style="flex:1">${esc(txt)}</span>`;
}
function renderSide() {
  // A grade shows only once the chapter has one: an untouched chapter is just its name.
  const navRow = (href, label, g, cur) => `<a href="${href}" ${cur ? 'aria-current="page"' : ""}><span>${esc(label)}</span>${g != null ? `<span class="g ${g < 5 ? "low" : ""}">${fmtGrade(g)}</span>` : ""}</a>`;
  let h = `<div class="brand"><svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9" fill="var(--accent)"/><path d="M8 10h16M8 16h16M8 22h10" stroke="#fff" stroke-opacity=".35" stroke-width="1.2"/><path d="M13 9.5c-2.4 0-2.9 1.1-2.9 2.9v1.1c0 .9-.6 1.6-1.5 1.6.9 0 1.5.7 1.5 1.6v1.1c0 1.8.5 2.9 2.9 2.9M19 9.5c2.4 0 2.9 1.1 2.9 2.9v1.1c0 .9.6 1.6 1.5 1.6-.9 0-1.5.7-1.5 1.6v1.1c0 1.8-.5 2.9-2.9 2.9" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round"/></svg><div><b>Caietul de C++</b><span>${esc(U("scope"))}</span></div>
    <button class="btn close" id="menu-close" style="margin-left:auto">${U("close")}</button></div>
  <nav class="nav">${navRow("#acasa", U("home"), undefined, view === "acasa")}${navRow("#recap", S.lang === "ro" ? "Fișa de recapitulare" : "Recap sheet", undefined, view === "recap")}${navRow("#examen", U("exam"), undefined, view === "examen")}`;
  let grp = "";
  MODULES.forEach(m => {
    const g = m.grade === "X" ? "g10" : "g9";
    if (g !== grp) { grp = g; h += `<div class="nav-g">${U(g)}</div>`; }
    h += navRow("#" + m.id, L(m.t), chapterGrade(m), view === m.id);
  });
  h += `</nav><div class="side-foot"><div class="cc-line" id="cc-line">${ccLine()}</div>
    <div class="row"><div class="seg" role="group" aria-label="Limba"><button data-lang="ro" aria-pressed="${S.lang === "ro"}">Română</button><button data-lang="en" aria-pressed="${S.lang === "en"}">English</button></div></div></div>`;
  const side = $("#side");
  side.innerHTML = h; side.classList.toggle("open", menuOpen);
  side.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => { S.lang = b.dataset.lang; save(); render(); });
  $("#menu-close").onclick = () => { menuOpen = false; renderSide(); };
  $("#menu-open").textContent = U("menu");
}
CC.subscribe(() => { const el = $("#cc-line"); if (el) el.innerHTML = ccLine(); });

function render() {
  document.documentElement.lang = S.lang;
  renderSide();
  const main = $("#main");
  main.innerHTML = view === "acasa" ? homeHTML() : view === "examen" ? examHTML() : view === "recap" ? recapHTML() : chapterHTML(MODULES.find(m => m.id === view));
  wire(main);
}
$("#menu-open").onclick = () => { menuOpen = true; renderSide(); };

/* ───── home: today's plan, the road to the exam, the register ───── */
// The screen's question: what do I study today to be ready on 4 November?
function dayState(d) {
  const ms = d.ids.map(id => MODULES.find(m => m.id === id));
  const done = ms.filter(m => (chapterGrade(m) ?? 0) >= 5).length;
  return { ms, done, total: ms.length };
}
function chapterNext(m) {
  const c = chapterParts(m);
  if (!c.read) return { tab: "lesson", label: { ro: "Citește lecția", en: "Read the lesson" } };
  if (c.q == null || c.q < Math.ceil(c.qn * 0.8)) return { tab: "quiz", label: { ro: "Fă testul", en: "Take the quiz" } };
  if (c.solved < c.pn) return { tab: "probs", label: { ro: "Rezolvă problemele", en: "Solve the problems" } };
  return { tab: "lesson", label: { ro: "Recapitulează", en: "Review" } };
}
function homeHTML() {
  const ro = S.lang === "ro", ti = todayIdx(), today = CRASH[ti], dl = daysLeft();
  const ts = dayState(today), allMs = MODULES;
  const chaptersDone = allMs.filter(m => (chapterGrade(m) ?? 0) >= 5).length;
  const solved = ALLP.filter(p => S.solved[p.id]).length;
  const started = allMs.some(m => chapterGrade(m) != null), est = estimate();
  const nextToday = ts.ms.find(m => (chapterGrade(m) ?? 0) < 5);

  // The greeting carries today's one fact, set from the data.
  const greet = today.exam
    ? (ro ? `Azi e examenul${NAME ? ", " + NAME : ""}. Ai lucrat pentru asta.` : `Today is the exam${NAME ? ", " + NAME : ""}. You've worked for this.`)
    : dl > 0 ? (ro ? `${hi(ro)} Mai sunt ${dl} ${dl === 1 ? "zi" : "zile"} până la examen.` : `${hi(ro)} ${dl} day${dl === 1 ? "" : "s"} to go until the exam.`)
    : (ro ? `${hi(ro)} Examenul a trecut.` : `${hi(ro)} The exam is over.`);
  const line = today.exam ? L(today.note)
    : `${ro ? "Azi" : "Today"}, ${L(today.long)}: ${ts.ms.map(m => L(m.t)).join(", ")}. ${ts.done ? (ro ? `${ts.done} din ${ts.total} capitole gata.` : `${ts.done} of ${ts.total} chapters done.`) : ""}`;

  const tile = (label, value, cap, cls = "") => `<div class="tile"><span class="t-l">${label}</span><span class="t-v ${cls}">${value}</span><span class="t-c">${cap}</span></div>`;
  const tiles = `<div class="tiles">
    ${tile(ro ? "Zile până la examen" : "Days to the exam", dl, ro ? "4–6 noiembrie, la liceu" : "4–6 November, at the school")}
    ${tile(ro ? "Capitole gata" : "Chapters done", `${chaptersDone}<small> / ${allMs.length}</small>`, ro ? "nota capitolului cel puțin 5" : "chapter grade 5 or more")}
    ${tile(ro ? "Probleme rezolvate" : "Problems solved", `${solved}<small> / ${ALLP.length}</small>`, ro ? "cu toate testele trecute" : "with every test passing")}
    ${tile(ro ? "Nota estimată" : "Estimated grade", started ? fmtGrade(est) : "—", started ? (ro ? "dacă examenul ar fi azi · 5 = promovat" : "if the exam were today · 5 = pass") : (ro ? "apare după primul capitol" : "shows after the first chapter"), started && est < 5 ? "low" : "")}
  </div>`;

  // Signature: the road to the exam, one column per day, one segment per chapter.
  const road = `<div class="road" role="list">${CRASH.map((d, i) => {
    const s = dayState(d), cur = i === ti;
    return `<div class="road-day ${cur ? "cur" : ""} ${d.exam ? "exam" : ""} ${d.date < isoToday() ? "past" : ""}" role="listitem">
      <span class="rd-l">${esc(L(d.short))}${cur ? ` · ${ro ? "azi" : "today"}` : ""}</span>
      ${d.exam ? `<span class="rd-x">${ro ? "Examen" : "Exam"}</span>` : `<span class="rd-segs">${s.ms.map(m => { const g = chapterGrade(m); return `<a href="#${m.id}" class="seg-c ${g == null ? "" : g >= 5 ? "full" : "half"}" title="${esc(L(m.t))}" aria-label="${esc(L(m.t))}"></a>`; }).join("")}</span>
      <span class="rd-n num">${s.done}/${s.total}</span>`}
    </div>`; }).join("")}</div>`;

  const card = m => {
    const c = chapterParts(m), g = chapterGrade(m), nx = chapterNext(m), done = (g ?? 0) >= 5;
    return `<div class="rowcard">
      <div class="rc-main"><a href="#${m.id}" class="rc-t">${esc(L(m.t))}</a>
        <span class="rc-s">${c.read ? ICON.check : ""}${U("lesson")} · ${U("quiz")} <span class="num">${c.q ?? "–"}/${c.qn}</span> · ${U("probs")} <span class="num">${c.solved}/${c.pn}</span></span></div>
      <span class="rc-g num ${g != null && g < 5 ? "low" : ""}">${g == null ? "" : fmtGrade(g)}</span>
      <a class="btn ${m === nextToday ? "pri" : ""}" href="#${m.id}" data-open-tab="${nx.tab}">${done ? ICON.check : ""}${esc(L(nx.label))}</a>
    </div>`;
  };
  const todayPanel = `<section class="panel span-9">
    <div class="panel-h"><h2>${ro ? "Drumul până la examen" : "The road to the exam"}</h2><span class="chip num">${ts.done}/${ts.total} ${ro ? "azi" : "today"}</span></div>
    ${road}
    <div class="rowcards">${today.exam ? `<p class="rc-note">${esc(L(today.note))}</p>` : ts.ms.map(card).join("")}${today.note && !today.exam ? `<p class="rc-note">${esc(L(today.note))} <a href="#examen">${U("exam")} →</a></p>` : ""}</div>
  </section>`;

  const examPanel = `<section class="panel span-3">
    <div class="panel-h"><h2>${ro ? "Examenele" : "The exams"}</h2><span class="chip">${ro ? "4–6 nov." : "4–6 Nov"}</span></div>
    
    <a class="simcard" href="#examen"><b>${U("exam")}</b><span>${ro ? "10 grile și 2 probleme, 50 de minute, cu notă" : "10 questions and 2 problems, 50 minutes, graded"}</span></a>
    ${PUBLIC ? `<p class="p-note">${ro ? "Materia: informatică, mate-info intensiv, clasele a IX-a și a X-a (programa OMECI 5099/2009). Lista exactă a probelor o dă liceul." : "Syllabus: informatics, math-CS intensive, grades 9 and 10 (OMECI 5099/2009). The school gives the exact list of exams."}</p>`
      : `<ul class="exlist">${EXAMS.map(x => `<li><details><summary><span>${esc(L(x.name))}</span><span class="pill ${x.cls || ""}">${esc(L(x.tag))}</span></summary><p>${L(x.why)}</p></details></li>`).join("")}</ul>`}
  </section>`;

  const reg = `<section class="panel span-6">
    <div class="panel-h"><h2>${ro ? "Catalogul" : "Grade book"}</h2><span class="chip">${ro ? "5 = promovat" : "5 = pass"}</span></div>
    <table class="reg"><tbody>${allMs.map(m => { const g = chapterGrade(m); return `<tr><td><a href="#${m.id}">${esc(L(m.t))}</a></td><td class="r g num ${g != null && g < 5 ? "low" : ""}">${g == null ? `<span class="dash">—</span>` : fmtGrade(g)}</td></tr>`; }).join("")}</tbody></table>
    <p class="p-note">${ro ? "Nota unui capitol: 1 din oficiu, plus lecția (10%), cel mai bun test (40%) și problemele rezolvate (50%). Progresul rămâne în acest browser." : "A chapter's grade: 1 by default, plus the lesson (10%), the best quiz (40%) and the problems solved (50%). Progress stays in this browser."}</p>
  </section>`;

  const res = (href, name, lang, why) => `<li><span><a href="${href}" target="_blank" rel="noopener">${name}</a> <span class="why">${why}</span></span><span class="pill">${lang}</span></li>`;
  const codeblocks = `<section class="panel"><div class="panel-h"><h2>${ro ? "Proba practică, în CodeBlocks" : "The practical, in CodeBlocks"}</h2></div>
      <ol class="steps">${ro ? `<li>Descarcă varianta Windows cu <b>mingw-setup</b> în nume de pe <a href="https://www.codeblocks.org/downloads/binaries/" target="_blank" rel="noopener">codeblocks.org</a>.</li><li>File → New → Project → Console application → C++.</li><li>Scrie în main.cpp și apasă F9. Pentru fișiere, pune date.in în folderul proiectului.</li>`
        : `<li>Download the Windows build with <b>mingw-setup</b> in its name from <a href="https://www.codeblocks.org/downloads/binaries/" target="_blank" rel="noopener">codeblocks.org</a>.</li><li>File → New → Project → Console application → C++.</li><li>Write in main.cpp and press F9. For files, put date.in in the project folder.</li>`}</ol>
      <p class="p-note">${ro ? "Butoanele Rulează de aici folosesc un compilator C++ adevărat, descărcat o singură dată (26 MB)." : "The Run buttons here use a real C++ compiler, downloaded once (26 MB)."}${CC.state === "idle" ? ` <button class="btn txt" id="cc-pre">${ro ? "Descarcă-l acum" : "Download it now"}</button>` : ""}</p>
    </section>`;
  const side6 = `<div class="span-6 stack">${codeblocks}
    <section class="panel"><div class="panel-h"><h2>${ro ? "De unde mai înveți" : "Where else to learn"}</h2></div>
      <ul class="links">
        ${res("https://www.pbinfo.ro", "pbinfo.ro", ro ? "română" : "Romanian", ro ? "Probleme în stilul examenului, cu evaluare automată." : "Exam-style problems, graded automatically.")}
        ${res("https://bacinfo.cnlr.ro/", "bacinfo.cnlr.ro", ro ? "română" : "Romanian", ro ? "Subiecte rezolvate, bune pentru „ce afișează”." : "Solved papers, good for “what does it print”.")}
        ${res("https://www.learncpp.com/", "learncpp.com", "English", ro ? "Cursul gratuit cel mai complet." : "The most complete free course.")}
        ${res("https://hackingcpp.com/cpp/beginners_guide.html", "hackingcpp.com", "English", ro ? "Explicații desenate și fișe." : "Drawn explanations and cheat sheets.")}
        ${res("https://www.studyplan.dev/cpp", "studyplan.dev", "English", ro ? "Lecții scurte, de la zero." : "Short lessons from zero.")}
      </ul>
      <p class="p-note">${ro ? "Site-urile în engleză folosesc C++ modern (string, vector). La examen scrii ca în lecțiile de aici: char s[], vectori de la 1, date.in." : "The English sites use modern C++ (string, vector). At the exam, write as in these lessons: char s[], arrays from 1, date.in."}</p>
    </section>
  </div>`;

  // First visit: how to learn here, in three steps; gone once she says she's got it.
  const intro = S.introSeen ? "" : `<section class="intro">
    <h2>${ro ? "Cum înveți aici" : "How to learn here"}</h2>
    <ol class="intro-steps">
      <li><b>${ro ? "Citește lecția" : "Read the lesson"}</b><span>${ro ? "Începe cu caseta verde „Pe înțelesul tău”, apoi apasă Rulează la fiecare exemplu și schimbă numerele." : "Start with the green “In plain words” box, then press Run on each example and change the numbers."}</span></li>
      <li><b>${ro ? "Fă testul" : "Take the quiz"}</b><span>${ro ? "O întrebare pe rând, cu explicație. Dacă greșești, reiei doar ce ai greșit." : "One question at a time, with an explanation. If you miss some, retry only those."}</span></li>
      <li><b>${ro ? "Rezolvă problemele" : "Solve the problems"}</b><span>${ro ? "Scrii codul, apeși Rulează testele. Dacă te blochezi, „Am nevoie de ajutor” îți dă indicii pas cu pas." : "Write the code and press Run the tests. If you're stuck, “I need help” gives hints step by step."}</span></li>
    </ol>
    <button class="btn" data-intro-ok>${ro ? "Am înțeles" : "Got it"}</button>
  </section>`;
  return `<div class="home">
    <header class="greet"><h1>${esc(greet)}</h1><p>${esc(line)}</p>
      ${nextToday ? `<a class="btn pri" href="#${nextToday.id}" data-open-tab="${chapterNext(nextToday).tab}">${ro ? "Continuă" : "Continue"}: ${esc(L(nextToday.t))}</a>` : ""}</header>
    ${intro}
    ${tiles}
    <div class="g12">${todayPanel}<div class="span-3 stack">${examPanel}</div>${reg}${side6}</div>
  </div>`;
}

/* ───── chapter ───── */
function exampleHTML(s, i) {
  return `<div class="runbox" data-ex="${i}"><pre class="code">${hl(s.code)}</pre>
    <div class="runbar"><label for="in-${view}-${i}">${s.io === "file" ? "date.in" : U("stdin")}</label><input class="stdin" id="in-${view}-${i}" value="${esc((s.inp || "").replace(/\n/g, " "))}" autocomplete="off" spellcheck="false">
    <button class="btn pri" data-runex>${U("run")}</button></div><div data-out></div></div>`;
}
function chapterHTML(m) {
  const c = chapterParts(m), g = chapterGrade(m), ro = S.lang === "ro";
  let h = `<div class="title-row"><div><h1>${esc(L(m.t))}</h1><p class="sub">${esc(L(m.sub))} · ${ro ? "clasa" : "grade"} ${m.grade}${g != null ? ` · ${ro ? "nota" : "grade"} <b class="num">${fmtGrade(g)}</b>` : ""}</p></div></div>
  ${m.intensive ? `<p class="notice" style="max-width:860px;margin:0 0 16px">${U("intensive")}</p>` : ""}
  ${stepsBar(m, c)}`;
  const idx = MODULES.indexOf(m), nextM = MODULES[idx + 1];
  if (tab === "lesson") {
    const easy = EASY[m.id] || [], mist = MISTAKES[m.id] || [], read = READ[m.id] || [];
    h += `<div class="lesson">${m.lesson.map((s, i) => `<section><span class="sec-n">${ro ? "Partea" : "Part"} ${i + 1} ${ro ? "din" : "of"} ${m.lesson.length}</span><h2>${esc(L(s.h))}</h2>${easy[i] ? `<div class="easy"><b>${ro ? "Pe înțelesul tău" : "In plain words"}</b>${L(easy[i])}</div>` : ""}${L(s.p)}${s.code ? exampleHTML(s, i) : ""}</section>`).join("")}
      ${mist.length ? `<section><h2>${ro ? "Greșeli frecvente la examen" : "Common exam mistakes"}</h2><ul class="mist">${mist.map(x => `<li>${L(x)}</li>`).join("")}</ul></section>` : ""}
      ${read.length ? `<section><h2>${ro ? "Mai citește" : "Read more"}</h2><ul class="read">${read.map(([site, title, url]) => `<li><a href="${url}" target="_blank" rel="noopener">${esc(title)}</a> <span class="muted">· ${site}</span></li>`).join("")}</ul><p class="muted">${ro ? "În engleză, cu C++ modern. Folosește-le ca explicație în plus; la examen scrii ca în lecția de mai sus." : "In English, using modern C++. Use them as extra explanation; at the exam write as in the lesson above."}</p></section>` : ""}
      <div class="next-step"><div><b>${ro ? "Ai terminat lecția?" : "Finished the lesson?"}</b><span>${ro ? "Urmează testul: verifici dacă ai înțeles, cu explicație la fiecare întrebare." : "Next is the quiz: check you understood, with an explanation for every question."}</span></div>
        <button class="btn pri" data-read-next>${ro ? "Am înțeles, la test" : "Got it, to the quiz"} →</button></div></div>`;
    if (sample) h += `<section class="panel ask"><div class="panel-h"><h2>${U("askT")}</h2></div><form data-ask><input id="ask-${m.id}" placeholder="${esc(U("askPh"))}" autocomplete="off"><button class="btn">${U("ask")}</button></form><div class="answer" data-ans></div></section>`;
  } else if (tab === "quiz") h += quizHTML(m.quiz, "q-" + m.id);
  else h += m.probs.map((p, i) => probHTML(p, false, m.probs[i + 1], nextM)).join("");
  return h;
}

// The chapter as three numbered steps, so it's always clear what comes next.
function stepsBar(m, c) {
  const ro = S.lang === "ro", qok = c.q != null && c.q >= Math.ceil(c.qn * 0.8);
  const step = (n, id, label, meta, done) => `<button role="tab" class="step ${done ? "done" : ""}" data-tab="${id}" aria-selected="${tab === id}">
    <span class="step-n">${done ? ICON.check : n}</span><span class="step-t">${label}<small>${meta}</small></span></button>`;
  return `<div class="steps-bar" role="tablist">
    ${step(1, "lesson", ro ? "Lecția" : "Lesson", c.read ? (ro ? "citită" : "read") : (ro ? "citește și rulează" : "read and run"), c.read)}
    ${step(2, "quiz", ro ? "Testul" : "Quiz", c.q == null ? (ro ? `${c.qn} întrebări` : `${c.qn} questions`) : `${c.q}/${c.qn}`, qok)}
    ${step(3, "probs", ro ? "Problemele" : "Problems", `${c.solved}/${c.pn} ${ro ? "rezolvate" : "solved"}`, c.solved === c.pn)}
  </div>`;
}

// In a chapter the quiz shows one question at a time ("one" mode); the mock exam shows the whole paper.
function quizHTML(qs, key, only) {
  const one = key !== "exam", list = only || qs.map((_, i) => i), ro = S.lang === "ro";
  return `<div class="quiz ${one ? "one" : ""}" data-quiz="${key}" data-list="${list.join(",")}">
    ${one ? `<div class="qprog"><span class="qprog-t">${ro ? "Întrebarea" : "Question"} <b class="qi">1</b> ${ro ? "din" : "of"} ${list.length}${only ? ` · ${ro ? "doar cele greșite" : "only the wrong ones"}` : ""}</span><span class="qbar"><i style="transform:scaleX(${1 / list.length})"></i></span></div>` : ""}
    ${list.map((i, k) => { const q = qs[i]; return `<div class="q" data-qi="${i}" ${one && k > 0 ? "hidden" : ""}><p class="qt">${one ? "" : `<span class="num">${k + 1}.</span> `}${L(q.q)}</p>${q.code ? `<pre class="code">${hl(q.code)}</pre>` : ""}
    <div class="opts">${q.o.map((o, j) => `<button class="opt" data-o="${j}">${esc(L(o))}</button>`).join("")}</div><div class="expl" hidden></div>
    ${one ? `<div class="row q-next" hidden><button class="btn pri" data-qnext>${k < list.length - 1 ? (ro ? "Următoarea întrebare" : "Next question") : (ro ? "Vezi rezultatul" : "See the result")} →</button></div>` : ""}</div>`; }).join("")}
    <div class="score-bar" hidden><span>${U("score")}</span><b class="sc"></b><span class="sc-msg"></span>
      <div class="row">${one ? `<button class="btn" data-retry-wrong hidden>${ro ? "Reia doar greșelile" : "Retry only the wrong ones"}</button>` : ""}<button class="btn" data-retry>${U("retry")}</button>${one ? `<button class="btn pri" data-tab="probs">${ro ? "La probleme" : "To the problems"} →</button>` : ""}</div></div></div>`;
}

// Default starter: the three steps of almost every exam program, as comments to fill in.
const STARTER = {
  ro: "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    // 1. Declară variabilele și citește datele\n    \n    // 2. Calculează\n    \n    // 3. Afișează rezultatul\n    \n    return 0;\n}\n",
  en: "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    // 1. Declare the variables and read the data\n    \n    // 2. Compute\n    \n    // 3. Print the result\n    \n    return 0;\n}\n",
};
const starterFor = p => p.starter ?? STARTER[S.lang];
// The beginning of the solution: the reading part, before the main idea.
const solStart = p => { const ls = p.sol.split("\n"), cut = Math.max(6, Math.ceil(ls.length * 0.45)); return ls.slice(0, cut).join("\n") + (S.lang === "ro" ? "\n    // ... continuă tu de aici" : "\n    // ... carry on from here"); };

function probHTML(p, inExam, nextP, nextM) {
  const done = !!S.solved[p.id], code = S.code[p.id] ?? starterFor(p), file = p.io === "file", ro = S.lang === "ro";
  const nextLink = nextP ? `<button class="btn pri" data-goto-prob="${nextP.id}">${ro ? "Problema următoare" : "Next problem"} →</button>`
    : nextM ? `<a class="btn pri" href="#${nextM.id}">${ro ? "Capitolul următor" : "Next chapter"}: ${esc(L(nextM.t))} →</a>` : `<a class="btn pri" href="#examen">${U("exam")} →</a>`;
  return `<article class="prob" data-p="${p.id}" id="prob-${p.id}">
    <div class="prob-h"><h3>${esc(L(p.t))}</h3>${inExam ? "" : `<span class="pill ${done ? "pos" : ""}">${done ? ICON.check + U("solvedB") : U("todo")}</span>`}</div>
    <p class="stmt">${esc(L(p.s))}</p>
    <div class="tw"><table class="io"><thead><tr><th>${file ? "date.in" : U("input")}</th><th>${file ? "date.out" : U("expected")}</th></tr></thead><tbody>${p.tests.map(t => `<tr><td>${esc(t[0])}</td><td>${esc(t[1])}</td></tr>`).join("")}</tbody></table></div>
    <textarea class="ed" spellcheck="false" autocapitalize="off" autocomplete="off" id="ed-${p.id}" aria-label="C++">${esc(code)}</textarea>
    <div class="row"><button class="btn pri" data-test>${U("runTests")}</button><button class="btn" data-hint>${ro ? "Am nevoie de ajutor" : "I need help"}</button><button class="btn txt" data-reset>${U("reset")}</button></div>
    <div class="ladder" data-ladder hidden>
      <div class="feedback" data-rung="1"><b>${ro ? "Indiciul 1 · ideea" : "Hint 1 · the idea"}</b><br>${esc(L(p.hint))}</div>
      ${inExam ? "" : `<div class="feedback" data-rung="2" hidden><b>${ro ? "Indiciul 2 · începutul soluției" : "Hint 2 · the start of the solution"}</b><pre class="code">${hl(solStart(p))}</pre></div>
      <div class="feedback" data-rung="3" hidden><b>${ro ? "Soluția completă" : "The full solution"}</b> <span class="muted">${ro ? "Citește-o, apoi închide-o și scrie-o singură." : "Read it, then close it and write it yourself."}</span><pre class="code">${hl(p.sol)}</pre></div>`}
    </div>
    <div data-res></div>
    ${inExam ? "" : `<div class="solved-next" data-solved-next ${done ? "" : "hidden"}><span>${ICON.check}<b>${ro ? "Bravo! Problema e rezolvată." : "Well done! Problem solved."}</b></span>${nextLink}</div>`}
  </article>`;
}

/* ───── recap sheet: everything to know, in one place ───── */
// The screen's question: "what must I know by heart, and do I know it yet?"
// Two columns split where the running code length reaches half, so they end level and keep their order.
function recapColumns() {
  const w = TEMPLATES.map(t => t.code.split("\n").length + 7), half = w.reduce((x, y) => x + y, 0) / 2;
  let acc = 0, cut = TEMPLATES.length;
  for (let i = 0; i < w.length; i++) { if (acc + w[i] / 2 > half) { cut = i; break; } acc += w[i]; }
  const idx = TEMPLATES.map((_, i) => i);
  return [idx.slice(0, cut), idx.slice(cut)];
}
function recapHTML() {
  const ro = S.lang === "ro", known = S.known || {};
  const nk = TEMPLATES.filter(t => known[t.id]).length;
  const card = (t, i) => {
    const m = MODULES.find(x => x.id === t.ch);
    return `<article class="tpl ${known[t.id] ? "is-known" : ""}" data-tpl="${i}">
      <div class="tpl-h"><h3>${esc(L(t.t))}</h3><a href="#${t.ch}" class="tpl-ch">${esc(L(m.t))}</a></div>
      <p class="tpl-why">${esc(L(t.why))}</p>
      <div class="runbox"><pre class="code">${hl(t.code)}</pre>
        <div class="runbar"><label for="tin-${i}">${t.io === "file" ? "date.in" : U("stdin")}</label><input class="stdin" id="tin-${i}" value="${esc(t.inp.replace(/\n/g, " "))}" autocomplete="off" spellcheck="false">
          <button class="btn" data-tplrun>${U("run")}</button><button class="btn txt" data-tplfull>${ro ? "Programul întreg" : "Whole program"}</button></div>
        <div data-full hidden><pre class="code" style="border:0;border-top:1px solid var(--border);border-radius:0;margin:0">${hl(templateProgram(t))}</pre></div>
        <div data-out></div></div>
      <label class="know"><input type="checkbox" data-know="${t.id}" ${known[t.id] ? "checked" : ""}> ${ro ? "O știu pe de rost (o pot scrie fără să mă uit)" : "I know it by heart (I can write it without looking)"}</label>
    </article>`;
  };
  return `<div class="title-row"><div><h1>${ro ? "Fișa de recapitulare" : "Recap sheet"}</h1><p class="sub">${ro ? "Tot ce trebuie să știi pentru examen, pe o singură pagină: rețetele de cod pe care le scrii pe de rost, răspunsurile de teorie și cuvintele de bază." : "Everything you need for the exam on one page: the code recipes to write from memory, the theory answers and the key words."}</p></div>
    <span class="chip num">${nk} / ${TEMPLATES.length} ${ro ? "rețete știute" : "recipes known"}</span></div>
  <h2 class="part-h">${ro ? "Rețetele de bază" : "The core recipes"}</h2>
  <p class="part-note">${ro ? "La proba practică aproape orice problemă se construiește din câteva dintre ele. Scrie-le pe hârtie din memorie, apoi bifează." : "Almost every practical problem is built from a few of these. Write them on paper from memory, then tick them."}</p>
  <div class="tpls">${recapColumns().map(col => `<div class="tcol">${col.map(i => card(TEMPLATES[i], i)).join("")}</div>`).join("")}</div>
  <div class="g12" style="margin-top:24px">
    <section class="panel span-12"><div class="panel-h"><h2>${ro ? "Întrebări de teorie pentru proba scrisă" : "Theory questions for the written test"}</h2><span class="chip">${THEORY.length}</span></div>
      <ul class="exlist theory">${THEORY.map(x => `<li><details><summary><span>${esc(L(x.q))}</span></summary><p>${esc(L(x.a))}</p></details></li>`).join("")}</ul>
    </section>
    <section class="panel span-12"><div class="panel-h"><h2>${ro ? "Dicționar română – engleză" : "Romanian – English dictionary"}</h2><span class="chip">${WORDS.length}</span></div>
      <dl class="words">${WORDS.map(([r, e]) => `<div><dt>${esc(r)}</dt><dd>${esc(e)}</dd></div>`).join("")}</dl>
    </section>
  </div>`;
}

/* ───── mock exam ───── */
let EX = null;
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function newExam() {
  const ms = MODULES.filter(inScope);
  EX = { qs: shuffle(ms.flatMap(m => m.quiz)).slice(0, 10), ps: shuffle(ms.flatMap(m => m.probs.map(p => ({ ...p, mod: m })))).slice(0, 2), end: Date.now() + 50 * 60000, qok: {}, pass: {} };
}
function examGrade() {
  const q = Object.values(EX.qok).filter(Boolean).length / EX.qs.length;
  const t = EX.ps.reduce((a, p) => a + (EX.pass[p.id] || 0) / p.tests.length, 0) / EX.ps.length;
  return 1 + 4.5 * q + 4.5 * t;
}
function examHTML() {
  const ro = S.lang === "ro", hist = S.exams || [];
  if (!EX) {
    const tile = (l, v, c) => `<div class="tile"><span class="t-l">${l}</span><span class="t-v">${v}</span><span class="t-c">${c}</span></div>`;
    const tips = ro
      ? ["La „ce afișează”, fă tabelul cu variabilele pas cu pas, ca în lecții.", "Citește problema de două ori și rezolvă întâi pe hârtie exemplul din enunț.", "În CodeBlocks compilează des (F9): repari câte o greșeală.", "Verifică ce se cere la afișare: spații, linii noi, fișierul date.out.", "Recitește „Greșeli frecvente” din fiecare capitol cu o seară înainte.", "Dacă te blochezi la o problemă, scrie măcar citirea și afișarea: testele simple aduc puncte.", "Nu lăsa nicio grilă necompletată: un răspuns ghicit poate fi corect."]
      : ["For “what does it print”, trace the variables step by step, as in the lessons.", "Read the problem twice and work the example from the statement on paper first.", "Compile often in CodeBlocks (F9): fix one mistake at a time.", "Check the output format: spaces, new lines, the date.out file.", "Reread each chapter's “Common exam mistakes” the evening before.", "If you get stuck on a problem, at least write the reading and printing: the simple tests earn points.", "Don't leave any question blank: a guess can be right."];
    return `<div class="title-row"><div><h1>${U("exam")}</h1><p class="sub">${ro ? "Ca la examenul de diferență: o probă scrisă și una practică. Lucrează fără să te uiți în lecții." : "Like the real exam: a written part and a practical part. Work without looking at the lessons."}</p></div>
      <button class="btn pri" data-exstart>${ro ? "Începe simularea" : "Start the mock exam"}</button></div>
    <div class="tiles" style="margin-top:8px">
      ${tile(ro ? "Subiectul I" : "Part I", ro ? "10 grile" : "10 questions", ro ? "4,5 puncte · „ce afișează”, teorie" : "4.5 points · “what does it print”, theory")}
      ${tile(ro ? "Subiectul II" : "Part II", ro ? "2 probleme" : "2 problems", ro ? "4,5 puncte · după testele trecute" : "4.5 points · by tests passed")}
      ${tile(ro ? "Din oficiu" : "By default", ro ? "1 punct" : "1 point", ro ? "nota 5 = promovat" : "5 = pass")}
      ${tile(ro ? "Timp" : "Time", "50 min", ro ? "cronometrul pornește la start" : "the timer starts when you begin")}
    </div>
    <div class="g12">
      <section class="panel span-6"><div class="panel-h"><h2>${ro ? "Încercările tale" : "Your attempts"}</h2>${hist.length ? `<span class="chip">${hist.length}</span>` : ""}</div>
        ${hist.length ? `<table class="reg"><tbody>${hist.slice().reverse().slice(0, 8).map(x => `<tr><td>${esc(x.when)}</td><td class="r g ${x.grade < 5 ? "low" : ""}">${fmtGrade(x.grade)}</td></tr>`).join("")}</tbody></table>`
          : `<p class="p-note" style="margin:0 0 12px">${ro ? "Nicio simulare încă. După fiecare, nota apare aici, ca să vezi cum crești până pe 4 noiembrie." : "No mock exam yet. After each one the grade appears here, so you can see yourself improve before 4 November."}</p>
            <table class="reg"><tbody>
              <tr><td>${ro ? "O grilă corectă" : "One correct question"}</td><td class="r g">0,45</td></tr>
              <tr><td>${ro ? "O problemă cu toate testele trecute" : "One problem with every test passing"}</td><td class="r g">2,25</td></tr>
              <tr><td>${ro ? "Din oficiu" : "By default"}</td><td class="r g">1,00</td></tr>
              <tr><td>${ro ? "Nota de trecere" : "Pass mark"}</td><td class="r g">5,00</td></tr>
            </tbody></table>`}
      </section>
      <section class="panel span-6"><div class="panel-h"><h2>${ro ? "Sfaturi pentru ziua examenului" : "Tips for exam day"}</h2></div>
        <ol class="steps">${tips.map(t => `<li>${esc(t)}</li>`).join("")}</ol>
      </section>
    </div>`;
  }
  return `<div class="title-row"><div><h1>${U("exam")}</h1><p class="sub">${ro ? "Nota până acum" : "Grade so far"}: <b class="num" id="ex-grade">${fmtGrade(examGrade())}</b></p></div><div class="row"><span class="timer" id="timer"></span><button class="btn pri" data-exfinish>${ro ? "Termină și notează" : "Finish and grade"}</button><button class="btn" data-exnew>${ro ? "Renunță" : "Give up"}</button></div></div>
    <h2 class="part-h">${ro ? "Subiectul I · grilă" : "Part I · multiple choice"}</h2>${quizHTML(EX.qs, "exam")}
    <h2 class="part-h">${ro ? "Subiectul II · probleme" : "Part II · problems"}</h2>${EX.ps.map(p => probHTML(p, true)).join("")}`;
}
let timerId = null;
function tick() {
  const t = $("#timer"); if (!t || !EX) return;
  const left = Math.max(0, EX.end - Date.now());
  t.textContent = `${Math.floor(left / 60000)}:${String(Math.floor(left / 1000) % 60).padStart(2, "0")}`;
  t.classList.toggle("low", left < 5 * 60000);
}

/* ───── wiring ───── */
function wire(root) {
  clearInterval(timerId);
  if (view === "examen" && EX) { tick(); timerId = setInterval(tick, 1000); }
  root.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => { tab = b.dataset.tab; render(); });
  const rd = root.querySelector("[data-read]"); if (rd) rd.onclick = () => { S.read[view] = true; save(); render(); };
  const inc = root.querySelector("#incl"); if (inc) inc.onchange = () => { S.incl = inc.checked; save(); render(); };
  const pre = root.querySelector("#cc-pre"); if (pre) pre.onclick = () => { CC.load().catch(() => {}); pre.remove(); };

  // runnable lesson examples
  root.querySelectorAll("[data-ex]").forEach(box => {
    const m = MODULES.find(x => x.id === view), s = m.lesson[+box.dataset.ex];
    const btn = box.querySelector("[data-runex]"), out = box.querySelector("[data-out]");
    btn.onclick = async () => {
      btn.disabled = true; out.innerHTML = `<div class="console"><span class="lbl">${U("running")}</span></div>`;
      try {
        const inp = box.querySelector("input").value;
        const res = await runProgram(s.code, [inp], s.io);
        out.innerHTML = consoleHTML(res);
      } catch (e) { out.innerHTML = `<div class="console"><span class="err">${esc(U("ccFail"))}</span></div>`; }
      btn.disabled = false;
    };
  });

  // recap templates
  root.querySelectorAll("[data-tpl]").forEach(box => {
    const t = TEMPLATES[+box.dataset.tpl], out = box.querySelector("[data-out]"), btn = box.querySelector("[data-tplrun]");
    box.querySelector("[data-tplfull]").onclick = () => { const f = box.querySelector("[data-full]"); f.hidden = !f.hidden; };
    box.querySelector("[data-know]").onchange = e => { S.known = { ...(S.known || {}), [t.id]: e.target.checked }; save(); box.classList.toggle("is-known", e.target.checked); const chip = root.querySelector(".title-row .chip"); if (chip) chip.textContent = `${TEMPLATES.filter(x => S.known[x.id]).length} / ${TEMPLATES.length} ${S.lang === "ro" ? "rețete știute" : "recipes known"}`; };
    btn.onclick = async () => {
      btn.disabled = true; out.innerHTML = `<div class="console"><span class="lbl">${U("running")}</span></div>`;
      try { out.innerHTML = consoleHTML(await runProgram(templateProgram(t), [box.querySelector("input").value], t.io)); }
      catch (e) { out.innerHTML = `<div class="console"><span class="err">${esc(U("ccFail"))}</span></div>`; }
      btn.disabled = false;
    };
  });

  // quizzes
  root.querySelectorAll("[data-quiz]").forEach(qz => {
    const key = qz.dataset.quiz, qs = key === "exam" ? EX.qs : MODULES.find(m => "q-" + m.id === key).quiz;
    const list = qz.dataset.list.split(",").map(Number), full = list.length === qs.length, one = qz.classList.contains("one"), ro = S.lang === "ro";
    const answered = new Map(), cards = [...qz.querySelectorAll(".q")];
    const finish = () => {
      const sc = [...answered.values()].filter(Boolean).length, wrong = [...answered].filter(([, ok]) => !ok).map(([i]) => i), bar = qz.querySelector(".score-bar");
      bar.hidden = false; bar.querySelector(".sc").textContent = `${sc}/${list.length}`;
      const msg = bar.querySelector(".sc-msg");
      if (msg) msg.textContent = sc === list.length ? (ro ? "Perfect! Poți trece la probleme." : "Perfect! On to the problems.") : sc >= Math.ceil(list.length * 0.8) ? (ro ? "Foarte bine. Recitește explicațiile la ce ai greșit." : "Very good. Reread the explanations for the ones you missed.") : (ro ? "Mai încearcă: recitește partea din lecție și reia greșelile." : "Try again: reread that part of the lesson and retry the wrong ones.");
      const rw = bar.querySelector("[data-retry-wrong]");
      if (rw) { rw.hidden = !wrong.length; rw.onclick = () => { qz.outerHTML = quizHTML(qs, key, wrong); wire($("#main")); }; }
      if (key !== "exam" && full) { const id = key.slice(2); S.quiz[id] = Math.max(S.quiz[id] ?? 0, sc); save(); renderSide(); }
      if (one) bar.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    cards.forEach((qe, k) => {
      const i = +qe.dataset.qi, q = qs[i];
      qe.querySelectorAll(".opt").forEach(ob => ob.onclick = () => {
        const ok = +ob.dataset.o === q.a;
        qe.querySelectorAll(".opt").forEach(x => { x.disabled = true; if (+x.dataset.o === q.a) x.classList.add("right"); });
        if (!ok) ob.classList.add("wrong");
        const ex = qe.querySelector(".expl"); ex.hidden = false; ex.innerHTML = `<b class="${ok ? "pass" : "fail"}">${ok ? (ro ? "Corect." : "Correct.") : (ro ? "Greșit." : "Wrong.")}</b> ${esc(L(q.e))}`;
        answered.set(i, ok);
        if (key === "exam") { EX.qok[i] = ok; const g = $("#ex-grade"); if (g) g.textContent = fmtGrade(examGrade()); }
        if (one) { const nx = qe.querySelector(".q-next"); nx.hidden = false; nx.querySelector("button").focus({ preventScroll: true }); }
        else if (answered.size === list.length) finish();
      });
      const nb = qe.querySelector("[data-qnext]");
      if (nb) nb.onclick = () => {
        if (k === cards.length - 1) { qe.hidden = true; qz.querySelector(".qprog").hidden = true; finish(); return; }
        qe.hidden = true; cards[k + 1].hidden = false;
        qz.querySelector(".qi").textContent = k + 2;
        qz.querySelector(".qbar i").style.transform = `scaleX(${(k + 2) / cards.length})`;
      };
    });
    const rb = qz.querySelector("[data-retry]"); if (rb) rb.onclick = () => { if (key === "exam") newExam(); render(); };
  });

  const io = root.querySelector("[data-intro-ok]");
  if (io) io.onclick = () => { S.introSeen = true; save(); io.closest(".intro").remove(); };

  // lesson → quiz in one step
  const rn = root.querySelector("[data-read-next]");
  if (rn) rn.onclick = () => { S.read[view] = true; save(); tab = "quiz"; render(); window.scrollTo(0, 0); };
  // "next problem" after solving one
  root.querySelectorAll("[data-goto-prob]").forEach(b => b.onclick = () => { const el = document.getElementById("prob-" + b.dataset.gotoProb); if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); el.querySelector("textarea").focus({ preventScroll: true }); } });

  // problems
  root.querySelectorAll(".prob").forEach(pe => {
    const p = ALLP.find(x => x.id === pe.dataset.p), ed = pe.querySelector("textarea"), res = pe.querySelector("[data-res]");
    ed.addEventListener("keydown", e => {
      if (e.key === "Tab") { e.preventDefault(); ed.setRangeText("    ", ed.selectionStart, ed.selectionEnd, "end"); }
      else if (e.key === "Enter") { const s = ed.selectionStart, line = ed.value.slice(0, s).split("\n").pop(); e.preventDefault(); ed.setRangeText("\n" + line.match(/^\s*/)[0] + (/\{\s*$/.test(line) ? "    " : ""), s, ed.selectionEnd, "end"); }
    });
    ed.addEventListener("input", () => { S.code[p.id] = ed.value; save(); });
    // Help comes in rungs: the idea, then the start of the solution, then the whole solution.
    const hb = pe.querySelector("[data-hint]"), ladder = pe.querySelector("[data-ladder]"), rungs = [...ladder.querySelectorAll("[data-rung]")];
    let level = 0;
    hb.onclick = () => {
      const ro = S.lang === "ro";
      level = level >= rungs.length ? 0 : level + 1;
      ladder.hidden = level === 0;
      rungs.forEach((r, k) => { r.hidden = k >= level; });
      hb.textContent = level === 0 ? (ro ? "Am nevoie de ajutor" : "I need help")
        : level === rungs.length ? (ro ? "Ascunde ajutorul" : "Hide the help")
        : level === rungs.length - 1 ? (ro ? "Arată soluția" : "Show the solution")
        : (ro ? "Încă un indiciu" : "Another hint");
    };
    pe.querySelector("[data-reset]").onclick = () => { ed.value = starterFor(p); delete S.code[p.id]; save(); };
    const tb = pe.querySelector("[data-test]");
    tb.onclick = async () => {
      tb.disabled = true; res.innerHTML = `<div class="console" style="border:1px solid var(--border);border-radius:6px"><span class="lbl">${U("running")}</span></div>`;
      let r;
      try { r = await runProgram(ed.value, p.tests.map(t => t[0]), p.io); }
      catch (e) { res.innerHTML = `<p class="notice">${esc(U("ccFail"))}</p>` + (sample ? `<button class="btn" data-ai>${U("aiCheck")}</button><div data-aiout></div>` : ""); wireAI(pe, p, ed); tb.disabled = false; return; }
      if (!r.compile) { res.innerHTML = `<div style="border:1px solid var(--border);border-radius:6px;overflow:hidden">${consoleHTML(r)}</div>` + aiBtn(); wireAI(pe, p, ed, r); tb.disabled = false; return; }
      const rows = p.tests.map((t, i) => { const x = r.results[i]; const got = x.timeout ? (S.lang === "ro" ? "timp depășit" : "time limit") : x.crash ? x.crash : x.output; return { t, got, ok: !x.timeout && !x.crash && norm(x.output) === norm(t[1]), x }; });
      const n = rows.filter(x => x.ok).length, all = n === rows.length;
      if (view === "examen") { EX.pass[p.id] = Math.max(EX.pass[p.id] || 0, n); const g = $("#ex-grade"); if (g) g.textContent = fmtGrade(examGrade()); }
      else if (all) { S.solved[p.id] = true; save(); renderSide(); const pl = pe.querySelector(".prob-h .pill"); if (pl) { pl.className = "pill pos"; pl.innerHTML = ICON.check + U("solvedB"); } const sn = pe.querySelector("[data-solved-next]"); if (sn) sn.hidden = false; }
      res.innerHTML = `<p class="verdict ${all ? "ok" : "bad"}">${all ? U("allPass") : U("nPass")(n, rows.length)}</p>
        <div class="tw"><table class="io"><thead><tr><th>${p.io === "file" ? "date.in" : U("input")}</th><th>${U("expected")}</th><th>${U("yours")}</th><th></th></tr></thead><tbody>
        ${rows.map(x => `<tr><td>${esc(x.t[0])}</td><td>${esc(x.t[1])}</td><td>${esc(x.got)}</td><td class="r ${x.ok ? "pass" : "fail"}">${x.ok ? ICON.check : ICON.cross}</td></tr>`).join("")}</tbody></table></div>
        ${rows.some(x => x.x.timeout) ? `<p class="muted">${esc(U("timeout"))}</p>` : ""}
        ${r.log ? `<div class="console" style="border:1px solid var(--border);border-radius:6px"><span class="lbl">${U("warn")}</span>${esc(r.log)}</div>` : ""}
        ${all ? "" : aiBtn()}`;
      wireAI(pe, p, ed, r, rows);
      tb.disabled = false;
    };
  });

  // ask the tutor
  const af = root.querySelector("[data-ask]");
  if (af) af.onsubmit = async e => {
    e.preventDefault();
    const m = MODULES.find(x => x.id === view), q = af.querySelector("input").value.trim(), out = af.parentElement.querySelector("[data-ans]"), b = af.querySelector("button");
    if (!q || !sample) return;
    b.disabled = true; out.textContent = U("thinking");
    const prompt = `You are a patient C++ tutor for ${NAME || "a student"}, a Romanian 10th-grade student who moved from a vocational school into a math-informatics class and is preparing for the "examen de diferență". Current chapter: "${m.t.ro}" (${m.sub.ro}). Use Romanian school style: #include <iostream>, using namespace std, arrays indexed from 1, no STL containers unless asked. Answer in ${S.lang === "ro" ? "Romanian" : "English"}, at most 150 words, simply and concretely, with a tiny code example only if it helps. Use \`\`\`cpp fences for code.\n\nStudent's question: ${q}`;
    try { await sample(prompt, { cache: false, onText: ({ text }) => { out.innerHTML = md(text); } }); }
    catch (err) { if (err?.code !== "cancelled") out.innerHTML = (err?.text ? md(err.text) + "<br>" : "") + `<span style="color:var(--negative)">${esc(errText(err))}</span>`; }
    b.disabled = false;
  };

  // exam
  const st = root.querySelector("[data-exstart]"); if (st) st.onclick = () => { newExam(); render(); };
  const nw = root.querySelector("[data-exnew]"); if (nw) nw.onclick = () => { EX = null; render(); };
  const fin = root.querySelector("[data-exfinish]");
  if (fin) fin.onclick = () => {
    const d = new Date(), loc = S.lang === "ro" ? "ro-RO" : "en-GB";
    const when = d.toLocaleDateString(loc, { day: "numeric", month: "long" }) + ", " + d.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit" });
    S.exams = [...(S.exams || []), { when, grade: examGrade() }]; save(); EX = null; render();
  };
}

function aiBtn() { return sample ? `<div class="row" style="margin-top:8px"><button class="btn" data-ai>${U("explain")}</button></div><div data-aiout></div>` : ""; }
function wireAI(pe, p, ed, r, rows) {
  const b = pe.querySelector("[data-ai]"); if (!b) return;
  b.onclick = async () => {
    const out = pe.querySelector("[data-aiout]"); b.disabled = true; out.innerHTML = `<div class="feedback">${U("thinking")}</div>`;
    const facts = !r ? "The compiler could not run in this page; check the program by reasoning."
      : !r.compile ? `It does not compile. Compiler output:\n${r.log}`
      : rows.map((x, i) => `Test ${i + 1}: input ${JSON.stringify(x.t[0])}, expected ${JSON.stringify(x.t[1])}, the program printed ${JSON.stringify(x.got)} → ${x.ok ? "pass" : "FAIL"}`).join("\n");
    const prompt = `A Romanian 10th-grade student preparing for an "examen de diferență" (math-informatics) wrote this C++ program. ${r ? "It was compiled with clang++ and run on the tests; the results below are real." : ""}

PROBLEM: ${p.s.ro}${p.io === "file" ? " (input in date.in, output in date.out)" : ""}

RESULTS:
${facts}

PROGRAM:
\`\`\`cpp
${ed.value}
\`\`\`

In ${S.lang === "ro" ? "Romanian" : "English"}, at most 110 words: explain the mistake that causes these results and the idea of the fix, kindly and concretely. Point to the line. Do NOT write the corrected full program.`;
    try { await sample(prompt, { cache: false, onText: ({ text }) => { out.innerHTML = `<div class="feedback">${md(text)}</div>`; } }); }
    catch (e) { if (e?.code !== "cancelled") out.innerHTML = `<div class="feedback">${esc(errText(e))}</div>`; }
    b.disabled = false;
  };
}

go();
