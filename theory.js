// Chapter "Teorie pentru proba scrisă": the grade-9 intensive items the other chapters don't cover
// (informatics as a science, problem-solving stages, flowcharts, efficiency, interdisciplinary applications).
// Inserted right after "Algoritmi și pseudocod".
(function () {
  const R = String.raw;
  const FLOW = `<svg viewBox="0 0 360 330" width="100%" style="max-width:360px;display:block;margin:10px 0" role="img" aria-label="Schemă logică: maximul a două numere">
  <g font-family="Instrument Sans, system-ui, sans-serif" font-size="13" fill="#1f201d" text-anchor="middle">
    <rect x="130" y="6" width="100" height="30" rx="15" fill="#e4f0ee" stroke="#1b6e66"/><text x="180" y="26">START</text>
    <path d="M180 36v14" stroke="#5a5f66"/>
    <path d="M118 50h140l-16 34h-140z" fill="#ffffff" stroke="#5a5f66"/><text x="180" y="72">citește a, b</text>
    <path d="M180 84v14" stroke="#5a5f66"/>
    <path d="M180 98l58 30-58 30-58-30z" fill="#fffbeb" stroke="#92400e"/><text x="180" y="132">a &gt; b ?</text>
    <path d="M122 128h-46v30M238 128h46v30" stroke="#5a5f66" fill="none"/>
    <text x="100" y="122" font-size="12">DA</text><text x="262" y="122" font-size="12">NU</text>
    <rect x="30" y="158" width="92" height="30" fill="#ffffff" stroke="#5a5f66"/><text x="76" y="178">max ← a</text>
    <rect x="238" y="158" width="92" height="30" fill="#ffffff" stroke="#5a5f66"/><text x="284" y="178">max ← b</text>
    <path d="M76 188v22h208v-22M180 210v14" stroke="#5a5f66" fill="none"/>
    <path d="M124 224h128l-16 34h-128z" fill="#ffffff" stroke="#5a5f66"/><text x="180" y="246">scrie max</text>
    <path d="M180 258v18" stroke="#5a5f66"/>
    <rect x="130" y="276" width="100" height="30" rx="15" fill="#e4f0ee" stroke="#1b6e66"/><text x="180" y="296">STOP</text>
  </g></svg>`;

  const mod = {
    id: "m14", grade: "IX",
    t: { ro: "Teorie pentru proba scrisă", en: "Theory for the written test" },
    sub: { ro: "Informatica, etapele rezolvării, scheme logice, eficiență, aplicații", en: "Informatics, problem-solving stages, flowcharts, efficiency, applications" },
    lesson: [
      { h: { ro: "Informatica și etapele rezolvării unei probleme", en: "Informatics and the stages of solving a problem" },
        p: { ro: `<p><b>Informatica</b> este știința care studiază prelucrarea automată a informației cu ajutorul calculatorului. Rolul ei în societate: comunicare, medicină, transporturi, bănci, educație — aproape orice domeniu folosește programe.</p>
<p><b>Etapele rezolvării unei probleme cu calculatorul</b> (se cer des la scris):</p>
<ol><li><b>Analiza problemei</b>: ce date primesc, ce trebuie să obțin, ce restricții am.</li><li><b>Elaborarea algoritmului</b>: pașii, scriși în pseudocod sau ca schemă logică.</li><li><b>Implementarea</b> (codificarea) într-un limbaj de programare, la noi C++.</li><li><b>Testarea și depanarea</b>: rulez pe exemple, inclusiv cazuri-limită (0, 1, numere mari), și corectez greșelile.</li></ol>
<p>Proprietățile unui algoritm: <b>claritate</b>, <b>generalitate</b>, <b>finitudine</b>, la care se adaugă <b>corectitudinea</b> și <b>eficiența</b>.</p>`,
          en: `<p><b>Informatics</b> is the science of processing information automatically with computers. Its role in society: communication, medicine, transport, banking, education — almost every field runs on programs.</p>
<p><b>Stages of solving a problem with a computer</b> (often asked on the written test):</p>
<ol><li><b>Analysis</b>: what data I get, what I must obtain, which limits apply.</li><li><b>Designing the algorithm</b>: the steps, in pseudocode or as a flowchart.</li><li><b>Implementation</b> (coding) in a programming language, here C++.</li><li><b>Testing and debugging</b>: run on examples, including edge cases (0, 1, huge numbers), and fix mistakes.</li></ol>
<p>Properties of an algorithm: <b>clarity</b>, <b>generality</b>, <b>finiteness</b>, plus <b>correctness</b> and <b>efficiency</b>.</p>` } },
      { h: { ro: "Schema logică", en: "Flowcharts" },
        p: { ro: `<p>O schemă logică desenează algoritmul cu blocuri legate prin săgeți. Fiecare formă are un singur rol:</p>
<table><tr><th>Forma</th><th>Rol</th><th>Exemplu</th></tr>
<tr><td>oval</td><td>început / sfârșit</td><td>START, STOP</td></tr>
<tr><td>paralelogram</td><td>citire / scriere</td><td>citește a, b</td></tr>
<tr><td>dreptunghi</td><td>calcul, atribuire</td><td>max ← a</td></tr>
<tr><td>romb</td><td>decizie (întrebare cu DA/NU)</td><td>a &gt; b ?</td></tr></table>
${FLOW}<p>O buclă apare în schemă ca o săgeată care se întoarce la un romb.</p>`,
          en: `<p>A flowchart draws the algorithm as blocks joined by arrows. Each shape has one job:</p>
<table><tr><th>Shape</th><th>Job</th><th>Example</th></tr>
<tr><td>oval</td><td>start / end</td><td>START, STOP</td></tr>
<tr><td>parallelogram</td><td>input / output</td><td>citește a, b</td></tr>
<tr><td>rectangle</td><td>calculation, assignment</td><td>max ← a</td></tr>
<tr><td>diamond</td><td>decision (yes/no question)</td><td>a &gt; b ?</td></tr></table>
${FLOW}<p>A loop shows up as an arrow that goes back to a diamond.</p>` } },
      { h: { ro: "Eficiența algoritmilor", en: "Algorithm efficiency" },
        p: { ro: `<p>Doi algoritmi corecți pot fi foarte diferiți ca viteză. Măsurăm <b>câți pași</b> face algoritmul în funcție de mărimea datelor (n):</p>
<table class="eff"><tr><th>Algoritm</th><th>Pași, aproximativ</th><th>Pentru n = 1 000 000</th></tr>
<tr><td>suma 1 + … + n cu formula n(n+1)/2</td><td>1</td><td>1</td></tr>
<tr><td>căutare binară într-un vector sortat</td><td>log₂ n</td><td>20</td></tr>
<tr><td>test de primalitate cu d·d ≤ n</td><td>√n</td><td>1 000</td></tr>
<tr><td>suma 1 + … + n cu buclă, căutare secvențială</td><td>n</td><td>1 000 000</td></tr>
<tr><td>sortarea prin metoda bulelor</td><td>n²</td><td>1 000 000 000 000</td></tr></table>
<p>Programul de mai jos numără pașii celor două variante de test de primalitate. Schimbă n și rulează.</p>`,
          en: `<p>Two correct algorithms can differ hugely in speed. We measure <b>how many steps</b> an algorithm takes depending on the size of the data (n):</p>
<table class="eff"><tr><th>Algorithm</th><th>Steps, roughly</th><th>For n = 1,000,000</th></tr>
<tr><td>sum 1 + … + n with the formula n(n+1)/2</td><td>1</td><td>1</td></tr>
<tr><td>binary search in a sorted array</td><td>log₂ n</td><td>20</td></tr>
<tr><td>primality test with d·d ≤ n</td><td>√n</td><td>1,000</td></tr>
<tr><td>sum 1 + … + n with a loop, linear search</td><td>n</td><td>1,000,000</td></tr>
<tr><td>bubble sort</td><td>n²</td><td>1,000,000,000,000</td></tr></table>
<p>The program below counts the steps of the two primality tests. Change n and run it.</p>` },
        code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;               // un numar prim mare, ex. 999983
    long long pasiLung = 0, pasiScurt = 0;
    for (int d = 2; d < n; d++) pasiLung++;          // toti divizorii posibili
    for (int d = 2; d * d <= n; d++) pasiScurt++;    // doar pana la radical
    cout << pasiLung << " pasi, fata de " << pasiScurt << " pasi";
    return 0;
}`, inp: "999983", out: "999981 pasi, fata de 998 pasi" },
      { h: { ro: "Aplicații: ecuația de gradul al II-lea și fracții", en: "Applications: quadratic equations and fractions" },
        p: { ro: `<p>Programa de intensiv cere și probleme „din alte materii”. Cele mai frecvente: ecuația de gradul al II-lea (cu Δ = b² − 4ac și <code>sqrt</code> din <code>&lt;cmath&gt;</code>) și simplificarea unei fracții cu CMMDC.</p>`,
          en: `<p>The intensive syllabus also asks for problems “from other subjects”. The most common: the quadratic equation (with Δ = b² − 4ac and <code>sqrt</code> from <code>&lt;cmath&gt;</code>) and simplifying a fraction with the GCD.</p>` },
        code: R`#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main()
{
    double a, b, c;
    cin >> a >> b >> c;              // a > 0
    double delta = b * b - 4 * a * c;
    cout << fixed << setprecision(2);
    if (delta < 0) cout << "NU";
    else if (delta == 0) cout << -b / (2 * a);
    else cout << (-b - sqrt(delta)) / (2 * a) << " " << (-b + sqrt(delta)) / (2 * a);
    return 0;
}`, inp: "1 -3 2", out: "1.00 2.00" },
    ],
    quiz: [
      { q: { ro: "Care proprietate a algoritmului cere ca el să se termine după un număr finit de pași?", en: "Which property requires an algorithm to end after a finite number of steps?" }, o: [{ ro: "claritatea", en: "clarity" }, { ro: "generalitatea", en: "generality" }, { ro: "finitudinea", en: "finiteness" }, { ro: "eficiența", en: "efficiency" }], a: 2, e: { ro: "Finitudine = se termină.", en: "Finiteness = it ends." } },
      { q: { ro: "Care e ordinea corectă a etapelor?", en: "What is the correct order of the stages?" }, o: [{ ro: "analiză, algoritm, implementare, testare", en: "analysis, algorithm, implementation, testing" }, { ro: "implementare, analiză, testare, algoritm", en: "implementation, analysis, testing, algorithm" }, { ro: "algoritm, testare, analiză, implementare", en: "algorithm, testing, analysis, implementation" }, { ro: "testare, implementare, algoritm, analiză", en: "testing, implementation, algorithm, analysis" }], a: 0, e: { ro: "Întâi înțelegi problema, apoi gândești pașii, apoi scrii codul, apoi îl verifici.", en: "First understand the problem, then plan the steps, then write the code, then check it." } },
      { q: { ro: "În schema logică, rombul reprezintă:", en: "In a flowchart, the diamond stands for:" }, o: [{ ro: "o citire", en: "input" }, { ro: "o decizie", en: "a decision" }, { ro: "un calcul", en: "a calculation" }, { ro: "sfârșitul", en: "the end" }], a: 1, e: { ro: "Rombul pune o întrebare cu răspuns DA/NU.", en: "The diamond asks a yes/no question." } },
      { q: { ro: "Ce se afișează pentru n = 5?", en: "What is printed for n = 5?" }, code: `citește n
p ← 1
pentru i ← 1, n execută
   dacă i % 2 = 0 atunci p ← p * i
■
scrie p`, o: ["120", "8", "15", "2"], a: 1, e: { ro: "Se înmulțesc doar valorile pare ale lui i: 2 · 4 = 8.", en: "Only the even values of i are multiplied: 2 · 4 = 8." } },
      { q: { ro: "Ce se afișează pentru n = 230?", en: "What is printed for n = 230?" }, code: `citește n
x ← 0
cât timp n ≠ 0 execută
   x ← x * 10 + n % 10
   n ← [n / 10]
■
scrie x`, o: ["032", "32", "230", "23"], a: 1, e: { ro: "Oglinditul lui 230: x devine 0, apoi 3, apoi 32. Zeroul din față nu se scrie.", en: "The reverse of 230: x becomes 0, then 3, then 32. A leading zero isn't written." } },
      { q: { ro: "Ce se afișează pentru n = 7?", en: "What is printed for n = 7?" }, code: `citește n
c ← 0
repetă
   n ← n - 2
   c ← c + 1
până când n ≤ 0
scrie c, ' ', n`, o: ["3 1", "4 -1", "4 1", "3 -1"], a: 1, e: { ro: "n: 5, 3, 1, −1. Bucla se oprește când n ≤ 0, după 4 pași.", en: "n: 5, 3, 1, −1. The loop stops when n ≤ 0, after 4 steps." } },
      { q: { ro: "Câți pași face aproximativ testul de primalitate cu d·d ≤ n pentru n = 1 000 000?", en: "About how many steps does the d·d ≤ n primality test take for n = 1,000,000?" }, o: ["1 000 000", "1 000", "20", "500 000"], a: 1, e: { ro: "√1 000 000 = 1 000.", en: "√1,000,000 = 1,000." } },
      { q: { ro: "Care algoritm e cel mai rapid pe un vector sortat cu 1 000 000 de elemente?", en: "Which algorithm is fastest on a sorted array of 1,000,000 elements?" }, o: [{ ro: "căutarea secvențială", en: "linear search" }, { ro: "căutarea binară", en: "binary search" }, { ro: "sortarea prin metoda bulelor", en: "bubble sort" }, { ro: "toate sunt la fel", en: "they're all the same" }], a: 1, e: { ro: "Căutarea binară face cam 20 de pași.", en: "Binary search takes about 20 steps." } },
    ],
    probs: [
      { id: "p14a", t: { ro: "Ecuația de gradul al II-lea", en: "Quadratic equation" },
        s: { ro: "Se citesc a, b, c reale (a > 0). Afișați soluțiile reale ale ecuației a·x² + b·x + c = 0 cu două zecimale: două soluții în ordine crescătoare, separate prin spațiu, una singură dacă Δ = 0, sau NU dacă nu există soluții reale.", en: "Read real a, b, c (a > 0). Print the real solutions of a·x² + b·x + c = 0 with two decimals: two solutions in increasing order separated by a space, one if Δ = 0, or NU if there are no real solutions." },
        tests: [["1 -3 2", "1.00 2.00"], ["1 2 1", "-1.00"], ["1 0 1", "NU"], ["2 -2 -4", "-1.00 2.00"]],
        hint: { ro: "Δ = b·b − 4·a·c. Cu a > 0, (−b − √Δ)/(2a) e soluția mai mică. Pentru zecimale: fixed << setprecision(2).", en: "Δ = b·b − 4·a·c. With a > 0, (−b − √Δ)/(2a) is the smaller root. For decimals: fixed << setprecision(2)." },
        sol: R`#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main()
{
    double a, b, c;
    cin >> a >> b >> c;
    double d = b * b - 4 * a * c;
    cout << fixed << setprecision(2);
    if (d < 0) cout << "NU";
    else if (d == 0) cout << -b / (2 * a);
    else cout << (-b - sqrt(d)) / (2 * a) << " " << (-b + sqrt(d)) / (2 * a);
    return 0;
}` },
      { id: "p14b", t: { ro: "Simplificarea unei fracții", en: "Simplifying a fraction" },
        s: { ro: "Se citesc doi întregi a ≥ 0 și b > 0, numărătorul și numitorul unei fracții. Afișați fracția ireductibilă, sub forma p/q.", en: "Read two integers a ≥ 0 and b > 0, a fraction's numerator and denominator. Print the reduced fraction as p/q." },
        tests: [["12 18", "2/3"], ["5 10", "1/2"], ["7 3", "7/3"], ["0 5", "0/1"]],
        hint: { ro: "Împarte și numărătorul și numitorul la cmmdc(a, b). cmmdc(0, b) = b.", en: "Divide both by gcd(a, b). gcd(0, b) = b." },
        sol: R`#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    int x = a, y = b;
    while (y != 0)
    {
        int r = x % y;
        x = y;
        y = r;
    }
    cout << a / x << "/" << b / x;
    return 0;
}` },
    ],
  };
  const at = MODULES.findIndex(m => m.id === "m1");
  MODULES.splice(at + 1, 0, mod);

  EASY.m14 = [
    { ro: "Gândește-te la o problemă de mate: întâi citești enunțul și scrii „Se dă / Se cere” (analiza), apoi îți faci planul (algoritmul), apoi o scrii pe curat (programul) și la final verifici rezultatul (testarea). La informatică e exact la fel.", en: "Think of a maths problem: first you read it and write “Given / Find” (analysis), then you make a plan (the algorithm), then write it out neatly (the program), and finally check the answer (testing). Informatics works exactly the same way." },
    { ro: "Schema logică e ca o hartă de metrou a algoritmului: fiecare formă e un tip de stație (start, citire, calcul, întrebare), iar săgețile arată drumul. La romb drumul se desparte în DA și NU.", en: "A flowchart is like a metro map of the algorithm: each shape is a kind of station (start, input, calculation, question) and the arrows show the route. At a diamond the route splits into YES and NO." },
    { ro: "Ca să găsești un cuvânt în dicționar nu citești fiecare pagină de la început (n pași): deschizi la mijloc și înjumătățești (log n pași). Eficiența înseamnă să alegi drumul scurt. La examen se cere des să spui care variantă e mai rapidă și de ce.", en: "To find a word in a dictionary you don't read every page from the start (n steps): you open in the middle and halve (log n steps). Efficiency means picking the short route. The exam often asks which version is faster and why." },
    { ro: "Programul face ce ai face pe hârtie la mate: calculezi Δ, apoi după semnul lui decizi câte soluții are ecuația. La fracție, împarți sus și jos la cel mai mare divizor comun, ca la 12/18 = 2/3.", en: "The program does what you'd do on paper in maths: compute Δ, then decide from its sign how many solutions there are. For a fraction, divide top and bottom by the greatest common divisor, as in 12/18 = 2/3." },
  ];
  MISTAKES.m14 = [
    { ro: "La scheme logice confuzi paralelogramul (citire/scriere) cu dreptunghiul (calcul).", en: "Mixing up the parallelogram (input/output) and the rectangle (calculation) in flowcharts." },
    { ro: "La „ce afișează” cu „repetă … până când”, uiți că corpul rulează cel puțin o dată și că bucla se oprește când condiția devine adevărată.", en: "In “what does it print” with “repetă … până când”, forgetting that the body runs at least once and the loop stops when the condition becomes true." },
    { ro: "La ecuația de gradul al II-lea folosești int pentru a, b, c și împarți întreg: folosește double.", en: "Using int for a, b, c in the quadratic equation and dividing as integers: use double." },
    { ro: "Uiți #include <cmath> pentru sqrt.", en: "Forgetting #include <cmath> for sqrt." },
  ];
  READ.m14 = [["learncpp", "Common semantic errors", "https://www.learncpp.com/cpp-tutorial/common-semantic-errors-in-c/"], ["learncpp", "Relational operators", "https://www.learncpp.com/cpp-tutorial/relational-operators-and-floating-point-comparisons/"]];
})();
