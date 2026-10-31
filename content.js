// Course content. Text fields are {ro, en}; code is shared.
const R = String.raw;

const MODULES = [
/* ───────────────────────── 1 ───────────────────────── */
{
  id: "m1", grade: "IX",
  t: { ro: "Algoritmi și pseudocod", en: "Algorithms and pseudocode" },
  sub: { ro: "Noțiunea de algoritm, date, operatori, structuri de bază", en: "What an algorithm is, data, operators, basic structures" },
  lesson: [
    { h: { ro: "Ce este un algoritm", en: "What an algorithm is" },
      p: { ro: `<p>Un <b>algoritm</b> este o succesiune finită de pași, clari și ordonați, care rezolvă o problemă. Primește <b>date de intrare</b> și produce <b>date de ieșire</b>.</p>
<p>Proprietăți cerute la examen:</p>
<ul><li><b>Claritate</b> – fiecare pas are un singur înțeles.</li><li><b>Generalitate</b> – rezolvă o clasă de probleme, nu un singur caz.</li><li><b>Finitudine</b> – se termină după un număr finit de pași.</li><li><b>Eficiență</b> – folosește cât mai puțin timp și memorie.</li></ul>
<p>Etapele rezolvării unei probleme: înțelegerea problemei → alegerea algoritmului → scrierea lui (pseudocod / C++) → testarea.</p>`,
          en: `<p>An <b>algorithm</b> is a finite sequence of clear, ordered steps that solves a problem. It takes <b>input data</b> and produces <b>output data</b>.</p>
<p>Properties asked on the exam:</p>
<ul><li><b>Clarity</b> (claritate) – each step has only one meaning.</li><li><b>Generality</b> (generalitate) – it solves a whole class of problems.</li><li><b>Finiteness</b> (finitudine) – it ends after a finite number of steps.</li><li><b>Efficiency</b> (eficiență) – it uses little time and memory.</li></ul>
<p>Problem-solving stages: understand the problem → choose the algorithm → write it (pseudocode / C++) → test it.</p>` } },
    { h: { ro: "Date și operatori", en: "Data and operators" },
      p: { ro: `<p><b>Constantele</b> au valoare fixă (ex. <code>5</code>, <code>'a'</code>). <b>Variabilele</b> au un nume și o valoare care se poate schimba. O <b>expresie</b> combină operanzi și operatori.</p>
<table><tr><th>Tip</th><th>Pseudocod</th><th>C++</th><th>Exemplu</th></tr>
<tr><td>Aritmetici</td><td>+ − * / %</td><td>+ - * / %</td><td>17 % 5 = 2</td></tr>
<tr><td>Parte întreagă</td><td>[x]</td><td>împărțire între int</td><td>[17/5] = 3</td></tr>
<tr><td>Relaționali</td><td>&lt; ≤ &gt; ≥ = ≠</td><td>&lt; &lt;= &gt; &gt;= == !=</td><td>3 ≠ 4 → adevărat</td></tr>
<tr><td>Logici</td><td>și, sau, not</td><td>&amp;&amp;, ||, !</td><td>(x≥3) și (x≤7)</td></tr></table>
<p class="note">Atenție: <code>%</code> (restul) funcționează doar cu numere întregi.</p>`,
          en: `<p><b>Constants</b> have a fixed value (e.g. <code>5</code>, <code>'a'</code>). <b>Variables</b> have a name and a value that can change. An <b>expression</b> combines operands and operators.</p>
<table><tr><th>Kind</th><th>Pseudocode</th><th>C++</th><th>Example</th></tr>
<tr><td>Arithmetic</td><td>+ − * / %</td><td>+ - * / %</td><td>17 % 5 = 2</td></tr>
<tr><td>Integer part</td><td>[x]</td><td>int division</td><td>[17/5] = 3</td></tr>
<tr><td>Relational</td><td>&lt; ≤ &gt; ≥ = ≠</td><td>&lt; &lt;= &gt; &gt;= == !=</td><td>3 ≠ 4 → true</td></tr>
<tr><td>Logical</td><td>și (and), sau (or), not</td><td>&amp;&amp;, ||, !</td><td>(x≥3) și (x≤7)</td></tr></table>
<p class="note">Careful: <code>%</code> (remainder) only works with integers.</p>` } },
    { h: { ro: "Pseudocodul de la examen", en: "Exam pseudocode" },
      p: { ro: `<p>La examen (și la BAC) algoritmii se scriu în pseudocod. Fiecare instrucțiune are corespondent în C++:</p>
<table><tr><th>Pseudocod</th><th>C++</th></tr>
<tr><td>citește n</td><td><code>cin &gt;&gt; n;</code></td></tr>
<tr><td>scrie s</td><td><code>cout &lt;&lt; s;</code></td></tr>
<tr><td>s ← 0</td><td><code>s = 0;</code></td></tr>
<tr><td>dacă c atunci … altfel … ■</td><td><code>if (c) { … } else { … }</code></td></tr>
<tr><td>cât timp c execută … ■</td><td><code>while (c) { … }</code></td></tr>
<tr><td>pentru i ← 1, n execută … ■</td><td><code>for (i = 1; i &lt;= n; i++) { … }</code></td></tr>
<tr><td>execută … cât timp c</td><td><code>do { … } while (c);</code></td></tr>
<tr><td>repetă … până când c</td><td><code>do { … } while (!c);</code></td></tr></table>
<p class="note">„repetă … până când c” se oprește când c devine <b>adevărat</b>, deci în C++ condiția se neagă.</p>`,
          en: `<p>On the exam (and at the BAC) algorithms are written in Romanian pseudocode. Every instruction has a C++ equivalent:</p>
<table><tr><th>Pseudocode</th><th>C++</th></tr>
<tr><td>citește n (read)</td><td><code>cin &gt;&gt; n;</code></td></tr>
<tr><td>scrie s (write)</td><td><code>cout &lt;&lt; s;</code></td></tr>
<tr><td>s ← 0</td><td><code>s = 0;</code></td></tr>
<tr><td>dacă c atunci … altfel … ■ (if/else)</td><td><code>if (c) { … } else { … }</code></td></tr>
<tr><td>cât timp c execută … ■ (while)</td><td><code>while (c) { … }</code></td></tr>
<tr><td>pentru i ← 1, n execută … ■ (for)</td><td><code>for (i = 1; i &lt;= n; i++) { … }</code></td></tr>
<tr><td>execută … cât timp c</td><td><code>do { … } while (c);</code></td></tr>
<tr><td>repetă … până când c (repeat-until)</td><td><code>do { … } while (!c);</code></td></tr></table>
<p class="note">“repetă … până când c” stops when c becomes <b>true</b>, so in C++ you negate the condition.</p>` } },
    { h: { ro: "Exemplu: din pseudocod în C++", en: "Example: pseudocode to C++" },
      p: { ro: `<pre class="pseudo">citește n   (număr natural)
s ← 0
cât timp n &gt; 0 execută
│  s ← s + n % 10
│  n ← [n / 10]
■
scrie s</pre><p>Algoritmul calculează <b>suma cifrelor</b> lui n. Pentru n = 1234 afișează 10.</p>`,
          en: `<pre class="pseudo">citește n   (natural number)
s ← 0
cât timp n &gt; 0 execută
│  s ← s + n % 10
│  n ← [n / 10]
■
scrie s</pre><p>The algorithm computes the <b>sum of the digits</b> of n. For n = 1234 it prints 10.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n, s = 0;
    cin >> n;
    while (n > 0)
    {
        s = s + n % 10;
        n = n / 10;
    }
    cout << s;
    return 0;
}`, out: "10", inp: "1234" },
  ],
  quiz: [
    { q: { ro: "Ce valoare are expresia <code>17 % 5 + [17 / 5]</code>?", en: "What is the value of <code>17 % 5 + [17 / 5]</code>?" },
      o: ["5", "6", "3", "2"], a: 0, e: { ro: "17 % 5 = 2 și [17/5] = 3, deci 2 + 3 = 5.", en: "17 % 5 = 2 and [17/5] = 3, so 2 + 3 = 5." } },
    { q: { ro: "Ce se afișează pentru n = 1234?", en: "What is printed for n = 1234?" },
      code: `citește n
s ← 0
cât timp n > 0 execută
   s ← s + n % 10
   n ← [n / 10]
■
scrie s`, o: ["1234", "10", "4", "24"], a: 1, e: { ro: "Se adună cifrele: 4+3+2+1 = 10.", en: "It adds the digits: 4+3+2+1 = 10." } },
    { q: { ro: "Ce se afișează?", en: "What is printed?" },
      code: `a ← 7; b ← 3
a ← a + b
b ← a - b
a ← a - b
scrie a, ' ', b`, o: ["7 3", "3 7", "10 7", "10 3"], a: 1, e: { ro: "a=10, b=10−3=7, a=10−7=3. Valorile s-au interschimbat fără variabilă auxiliară.", en: "a=10, b=10−3=7, a=10−7=3. The values were swapped without a helper variable." } },
    { q: { ro: "O structură „repetă … până când c” execută corpul:", en: "A “repetă … până când c” (repeat-until) loop runs its body:" },
      o: [{ ro: "de cel puțin o dată", en: "at least once" }, { ro: "de niciodată, dacă c e adevărat la început", en: "never, if c is true at the start" }, { ro: "exact o dată", en: "exactly once" }, { ro: "de un număr fix de ori", en: "a fixed number of times" }], a: 0,
      e: { ro: "Condiția se testează după corp, deci corpul rulează măcar o dată.", en: "The condition is tested after the body, so the body runs at least once." } },
    { q: { ro: "Care expresie e adevărată exact când x este în intervalul [3, 7]?", en: "Which expression is true exactly when x is in the interval [3, 7]?" },
      o: ["(x ≥ 3) sau (x ≤ 7)", "(x ≥ 3) și (x ≤ 7)", "(x > 3) și (x < 7)", "not (x ≥ 3)"], a: 1,
      e: { ro: "Trebuie îndeplinite ambele condiții, deci „și”. Cu „sau” orice număr ar fi bun.", en: "Both conditions must hold, so “și” (and). With “sau” (or) every number would pass." } },
    { q: { ro: "Ce se afișează?", en: "What is printed?" },
      code: `x ← 0
pentru i ← 1, 5 execută
   x ← x + i
■
scrie x`, o: ["5", "10", "15", "6"], a: 2, e: { ro: "1+2+3+4+5 = 15.", en: "1+2+3+4+5 = 15." } },
  ],
  probs: [
    { id: "p1a", t: { ro: "Media a două numere", en: "Average of two numbers" },
      s: { ro: "Se citesc două numere naturale a și b. Afișați partea întreagă a mediei lor aritmetice.", en: "Read two natural numbers a and b. Print the integer part of their arithmetic mean." },
      tests: [["7 4", "5"], ["10 20", "15"], ["0 1", "0"]],
      hint: { ro: "Dacă a și b sunt int, (a+b)/2 e deja împărțire întreagă.", en: "If a and b are int, (a+b)/2 is already integer division." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << (a + b) / 2;
    return 0;
}` },
  ],
},
/* ───────────────────────── 2 ───────────────────────── */
{
  id: "m2", grade: "IX",
  t: { ro: "Primii pași în C++", en: "First steps in C++" },
  sub: { ro: "Structura programului, tipuri de date, citire și afișare", en: "Program structure, data types, input and output" },
  lesson: [
    { h: { ro: "Structura unui program", en: "Program structure" },
      p: { ro: `<p>Orice program C++ de la examen arată așa. <code>#include &lt;iostream&gt;</code> aduce <code>cin</code> și <code>cout</code>; execuția începe în <code>main</code>.</p>`,
          en: `<p>Every exam C++ program looks like this. <code>#include &lt;iostream&gt;</code> brings in <code>cin</code> and <code>cout</code>; execution starts in <code>main</code>.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;          // citire / input
    cout << a + b << endl;  // afișare / output
    return 0;
}`, inp: "3 4", out: "7" },
    { h: { ro: "Tipuri simple de date", en: "Simple data types" },
      p: { ro: `<table><tr><th>Tip</th><th>Ce reține</th><th>Limite</th></tr>
<tr><td><code>int</code></td><td>numere întregi</td><td>aprox. ±2 147 000 000 (2·10<sup>9</sup>)</td></tr>
<tr><td><code>long long</code></td><td>întregi mari</td><td>aprox. ±9·10<sup>18</sup></td></tr>
<tr><td><code>double</code></td><td>numere reale</td><td>ex. 3.75</td></tr>
<tr><td><code>char</code></td><td>un caracter</td><td><code>'a'</code> (cod ASCII 97)</td></tr>
<tr><td><code>bool</code></td><td>adevărat / fals</td><td><code>true</code>=1, <code>false</code>=0</td></tr></table>
<p class="note">Dacă rezultatul poate trece de 2 miliarde (produse, factoriale, sume mari), folosește <code>long long</code>.</p>`,
          en: `<table><tr><th>Type</th><th>Holds</th><th>Range</th></tr>
<tr><td><code>int</code></td><td>whole numbers</td><td>about ±2 147 000 000 (2·10<sup>9</sup>)</td></tr>
<tr><td><code>long long</code></td><td>big whole numbers</td><td>about ±9·10<sup>18</sup></td></tr>
<tr><td><code>double</code></td><td>real numbers</td><td>e.g. 3.75</td></tr>
<tr><td><code>char</code></td><td>one character</td><td><code>'a'</code> (ASCII code 97)</td></tr>
<tr><td><code>bool</code></td><td>true / false</td><td><code>true</code>=1, <code>false</code>=0</td></tr></table>
<p class="note">If the result can go over 2 billion (products, factorials, big sums), use <code>long long</code>.</p>` } },
    { h: { ro: "Operatori și capcane", en: "Operators and traps" },
      p: { ro: `<ul><li><code>7 / 2</code> dă <b>3</b> (ambele int → împărțire întreagă); <code>7.0 / 2</code> dă <b>3.5</b>.</li>
<li><code>7 % 2</code> dă <b>1</b> (restul).</li>
<li><code>x++</code> crește x cu 1; <code>s += x</code> înseamnă <code>s = s + x</code>.</li>
<li><code>=</code> atribuie, <code>==</code> compară. <code>if (x = 5)</code> e o greșeală clasică!</li>
<li>Prioritate: <code>* / %</code> înainte de <code>+ -</code>, apoi comparațiile, apoi <code>&amp;&amp;</code>, apoi <code>||</code>.</li></ul>`,
          en: `<ul><li><code>7 / 2</code> gives <b>3</b> (both int → integer division); <code>7.0 / 2</code> gives <b>3.5</b>.</li>
<li><code>7 % 2</code> gives <b>1</b> (the remainder).</li>
<li><code>x++</code> adds 1 to x; <code>s += x</code> means <code>s = s + x</code>.</li>
<li><code>=</code> assigns, <code>==</code> compares. <code>if (x = 5)</code> is a classic mistake!</li>
<li>Precedence: <code>* / %</code> before <code>+ -</code>, then comparisons, then <code>&amp;&amp;</code>, then <code>||</code>.</li></ul>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    cout << 7 / 2 << " " << 7 % 2 << " " << 7.0 / 2 << endl;
    int x = 10;
    x += 5;   // x = 15
    x++;      // x = 16
    cout << x << " " << x / 3 * 3 + x % 3;
    return 0;
}`, out: "3 1 3.5\n16 16" },
  ],
  quiz: [
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `cout << 7 / 2 << " " << 7 % 2 << " " << 7.0 / 2;`,
      o: ["3.5 1 3.5", "3 1 3.5", "3 1 3", "4 1 3.5"], a: 1, e: { ro: "7/2 între int = 3; 7%2 = 1; 7.0/2 = 3.5.", en: "7/2 with ints = 3; 7%2 = 1; 7.0/2 = 3.5." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int a = 10, b = 3;
cout << a / b * b + a % b;`, o: ["10", "9", "13", "1"], a: 0, e: { ro: "10/3=3, 3*3=9, 10%3=1, 9+1=10. Mereu a/b*b + a%b = a.", en: "10/3=3, 3*3=9, 10%3=1, 9+1=10. Always a/b*b + a%b = a." } },
    { q: { ro: "Ce tip folosești pentru a reține 10<sup>12</sup>?", en: "Which type stores 10<sup>12</sup>?" }, o: ["int", "char", "long long", "bool"], a: 2,
      e: { ro: "int merge doar până la aprox. 2·10⁹.", en: "int only goes up to about 2·10⁹." } },
    { q: { ro: "Ce valoare are x?", en: "What is x?" }, code: `int x = 7;
x = x % 3 + x / 3;`, o: ["3", "2", "4", "1"], a: 0, e: { ro: "7%3 = 1, 7/3 = 2, deci 3.", en: "7%3 = 1, 7/3 = 2, so 3." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `cout << (3 < 5) + (2 == 2);`, o: ["true", "11", "2", "1"], a: 2,
      e: { ro: "Fiecare comparație adevărată valorează 1, deci 1+1 = 2.", en: "Each true comparison is worth 1, so 1+1 = 2." } },
    { q: { ro: "Ce e greșit în <code>if (x = 5) cout &lt;&lt; \"cinci\";</code>?", en: "What is wrong with <code>if (x = 5) cout &lt;&lt; \"cinci\";</code>?" },
      o: [{ ro: "Lipsește else", en: "There is no else" }, { ro: "= atribuie 5 lui x, deci condiția e mereu adevărată", en: "= assigns 5 to x, so the condition is always true" }, { ro: "Nu se poate afișa text", en: "Text cannot be printed" }, { ro: "Nimic", en: "Nothing" }], a: 1,
      e: { ro: "Pentru comparație se folosește ==.", en: "Comparison uses ==." } },
  ],
  probs: [
    { id: "p2a", t: { ro: "Ultimele două cifre", en: "Last two digits" },
      s: { ro: "Se citește un număr natural n (n ≥ 10). Afișați suma ultimelor două cifre ale lui n.", en: "Read a natural number n (n ≥ 10). Print the sum of its last two digits." },
      tests: [["1234", "7"], ["50", "5"], ["99", "18"]],
      hint: { ro: "Ultima cifră: n % 10. Penultima: n / 10 % 10.", en: "Last digit: n % 10. Second to last: n / 10 % 10." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    cout << n % 10 + n / 10 % 10;
    return 0;
}` },
    { id: "p2b", t: { ro: "Ore, minute, secunde", en: "Hours, minutes, seconds" },
      s: { ro: "Se citește un număr natural s de secunde. Afișați câte ore, minute și secunde reprezintă, separate prin spațiu.", en: "Read a natural number s of seconds. Print how many hours, minutes and seconds that is, separated by spaces." },
      tests: [["3725", "1 2 5"], ["59", "0 0 59"], ["7200", "2 0 0"]],
      hint: { ro: "Ore = s / 3600. Ce rămâne: s % 3600, din care minute = … / 60.", en: "Hours = s / 3600. What is left: s % 3600, from which minutes = … / 60." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int s;
    cin >> s;
    cout << s / 3600 << " " << s % 3600 / 60 << " " << s % 60;
    return 0;
}` },
  ],
},
/* ───────────────────────── 3 ───────────────────────── */
{
  id: "m3", grade: "IX",
  t: { ro: "Structura alternativă", en: "Decisions (if / switch)" },
  sub: { ro: "if, else, operatori logici, switch", en: "if, else, logical operators, switch" },
  lesson: [
    { h: { ro: "if / else", en: "if / else" },
      p: { ro: `<p>Instrucțiunea <code>if</code> execută un bloc doar dacă o condiție e adevărată. Orice valoare nenulă înseamnă „adevărat”, 0 înseamnă „fals”.</p>
<p>Combini condiții cu <code>&amp;&amp;</code> (și), <code>||</code> (sau), <code>!</code> (negare). De reținut: <code>!(a &gt; b)</code> este același lucru cu <code>a &lt;= b</code>.</p>`,
          en: `<p>The <code>if</code> statement runs a block only when a condition is true. Any non-zero value counts as “true”, 0 counts as “false”.</p>
<p>Combine conditions with <code>&amp;&amp;</code> (and), <code>||</code> (or), <code>!</code> (not). Remember: <code>!(a &gt; b)</code> is the same as <code>a &lt;= b</code>.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    cin >> a >> b >> c;
    int mx = a;
    if (b > mx) mx = b;
    if (c > mx) mx = c;
    cout << "max = " << mx << endl;

    if (mx % 2 == 0) cout << "par";
    else cout << "impar";
    return 0;
}`, inp: "3 9 2", out: "max = 9\nimpar" },
    { h: { ro: "An bisect: condiții compuse", en: "Leap year: compound conditions" },
      p: { ro: `<p>Un an e bisect dacă se divide cu 4 dar nu cu 100, <b>sau</b> dacă se divide cu 400. Parantezele contează!</p>`,
          en: `<p>A year is a leap year if it divides by 4 but not by 100, <b>or</b> if it divides by 400. The brackets matter!</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int an;
    cin >> an;
    if ((an % 4 == 0 && an % 100 != 0) || an % 400 == 0)
        cout << "DA";
    else
        cout << "NU";
    return 0;
}`, inp: "2024", out: "DA" },
    { h: { ro: "switch", en: "switch" },
      p: { ro: `<p><code>switch</code> alege după valoarea exactă a unei variabile întregi. <b>Fără <code>break</code></b> execuția „cade” în cazurile următoare.</p>`,
          en: `<p><code>switch</code> picks a branch by the exact value of an integer variable. <b>Without <code>break</code></b> execution “falls through” into the next cases.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int zi;
    cin >> zi;
    switch (zi)
    {
        case 6:
        case 7: cout << "weekend"; break;
        default: cout << "zi de scoala";
    }
    return 0;
}`, inp: "6", out: "weekend" },
  ],
  quiz: [
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int a = 5, b = 8;
if (a > b) cout << a;
else if (b % a == 3) cout << b - a;
else cout << 0;`, o: ["5", "3", "0", "8"], a: 1, e: { ro: "a>b e fals; 8%5 = 3, deci se afișează 8−5 = 3.", en: "a>b is false; 8%5 = 3, so it prints 8−5 = 3." } },
    { q: { ro: "Care condiție verifică un an bisect?", en: "Which condition checks a leap year?" },
      o: ["a % 4 == 0", "(a % 4 == 0 && a % 100 != 0) || a % 400 == 0", "a % 4 == 0 || a % 100 == 0", "a % 400 == 0 && a % 4 == 0"], a: 1,
      e: { ro: "1900 se divide cu 4 dar nu e bisect; 2000 e bisect.", en: "1900 divides by 4 but is not a leap year; 2000 is." } },
    { q: { ro: "<code>!(a &gt; b)</code> este echivalent cu:", en: "<code>!(a &gt; b)</code> is the same as:" }, o: ["a < b", "a <= b", "a >= b", "a != b"], a: 1,
      e: { ro: "Opusul lui „mai mare” este „mai mic sau egal”.", en: "The opposite of “greater than” is “less than or equal”." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int x = 0;
if (x) cout << "A";
else cout << "B";`, o: ["A", "B", "AB", { ro: "nimic", en: "nothing" }], a: 1, e: { ro: "0 înseamnă fals.", en: "0 means false." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int k = 2;
switch (k) {
  case 1: cout << 1;
  case 2: cout << 2;
  case 3: cout << 3; break;
  default: cout << 0;
}`, o: ["2", "23", "230", "123"], a: 1, e: { ro: "Intră la case 2, afișează 2, nu are break, continuă cu 3, apoi break.", en: "It enters at case 2, prints 2, there is no break so it continues to 3, then break." } },
  ],
  probs: [
    { id: "p3a", t: { ro: "Maximul a trei numere", en: "Maximum of three numbers" },
      s: { ro: "Se citesc trei numere întregi. Afișați cel mai mare dintre ele.", en: "Read three integers. Print the largest one." },
      tests: [["3 9 2", "9"], ["-1 -5 -3", "-1"], ["4 4 4", "4"]],
      hint: { ro: "Pornește cu mx = a și compară pe rând cu b și c.", en: "Start with mx = a and compare with b, then c." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int a, b, c;
    cin >> a >> b >> c;
    int mx = a;
    if (b > mx) mx = b;
    if (c > mx) mx = c;
    cout << mx;
    return 0;
}` },
    { id: "p3b", t: { ro: "Ecuația de gradul I", en: "First-degree equation" },
      s: { ro: "Se citesc a și b întregi. Rezolvați ecuația a·x + b = 0: afișați x cu două zecimale dacă există o soluție, „INFINIT” dacă orice x e soluție, sau „IMPOSIBIL” dacă nu există soluție.", en: "Read integers a and b. Solve a·x + b = 0: print x with two decimals if there is one solution, “INFINIT” if every x works, or “IMPOSIBIL” if there is none." },
      tests: [["2 -5", "2.50"], ["0 0", "INFINIT"], ["0 3", "IMPOSIBIL"], ["4 2", "-0.50"]],
      hint: { ro: "Cazul a == 0 se tratează separat. Pentru 2 zecimale: #include <iomanip> și cout << fixed << setprecision(2).", en: "Handle a == 0 separately. For 2 decimals: #include <iomanip> and cout << fixed << setprecision(2)." },
      sol: R`#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    if (a == 0)
    {
        if (b == 0) cout << "INFINIT";
        else cout << "IMPOSIBIL";
    }
    else
        cout << fixed << setprecision(2) << (double)(-b) / a;
    return 0;
}` },
  ],
},
/* ───────────────────────── 4 ───────────────────────── */
{
  id: "m4", grade: "IX",
  t: { ro: "Structuri repetitive", en: "Loops" },
  sub: { ro: "while, do-while, for", en: "while, do-while, for" },
  lesson: [
    { h: { ro: "Cele trei bucle", en: "The three loops" },
      p: { ro: `<ul><li><code>while (c) { … }</code> – testează înainte; poate să nu ruleze deloc.</li>
<li><code>do { … } while (c);</code> – testează după; rulează măcar o dată.</li>
<li><code>for (init; c; pas) { … }</code> – când știi de câte ori repeți.</li></ul>
<p>Orice <code>for</code> se poate scrie ca <code>while</code>:</p>`,
          en: `<ul><li><code>while (c) { … }</code> – tests first; may not run at all.</li>
<li><code>do { … } while (c);</code> – tests after; runs at least once.</li>
<li><code>for (init; c; step) { … }</code> – when you know how many times to repeat.</li></ul>
<p>Every <code>for</code> can be written as a <code>while</code>:</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    // suma 1 + 2 + ... + n cu for
    long long s = 0;
    for (int i = 1; i <= n; i++)
        s += i;
    cout << s << endl;

    // același lucru cu while
    s = 0;
    int i = 1;
    while (i <= n)
    {
        s += i;
        i++;
    }
    cout << s;
    return 0;
}`, inp: "100", out: "5050\n5050" },
    { h: { ro: "Contor, sumă, produs", en: "Counter, sum, product" },
      p: { ro: `<p>Trei tipare apar în aproape orice problemă:</p><ul><li><b>contor</b>: <code>c = 0;</code> apoi <code>c++</code> când găsești ceva;</li><li><b>sumă</b>: <code>s = 0;</code> apoi <code>s += x</code>;</li><li><b>produs</b>: <code>p = 1;</code> apoi <code>p *= x</code> (pornește de la 1, nu de la 0!).</li></ul>
<p><code>break</code> iese imediat din buclă; <code>continue</code> sare la pasul următor.</p>`,
          en: `<p>Three patterns show up in almost every problem:</p><ul><li><b>counter</b>: <code>c = 0;</code> then <code>c++</code> when you find something;</li><li><b>sum</b>: <code>s = 0;</code> then <code>s += x</code>;</li><li><b>product</b>: <code>p = 1;</code> then <code>p *= x</code> (start from 1, not 0!).</li></ul>
<p><code>break</code> leaves the loop at once; <code>continue</code> jumps to the next step.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    long long p = 1;
    for (int i = 1; i <= n; i++)
        p *= i;
    cout << n << "! = " << p;
    return 0;
}`, inp: "5", out: "5! = 120" },
  ],
  quiz: [
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `for (int i = 1; i <= 10; i += 3)
    cout << i << ' ';`, o: ["1 4 7 10", "1 4 7", "1 3 6 9", "3 6 9"], a: 0, e: { ro: "i ia valorile 1, 4, 7, 10 (10 ≤ 10 e adevărat).", en: "i takes 1, 4, 7, 10 (10 ≤ 10 is true)." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int i = 10;
while (i > 0) i -= 3;
cout << i;`, o: ["0", "1", "-2", "-1"], a: 2, e: { ro: "10 → 7 → 4 → 1 → −2, apoi condiția e falsă.", en: "10 → 7 → 4 → 1 → −2, then the condition is false." } },
    { q: { ro: "De câte ori rulează corpul lui <code>do { … } while (false);</code>?", en: "How many times does <code>do { … } while (false);</code> run its body?" }, o: ["0", "1", "2", { ro: "la infinit", en: "forever" }], a: 1,
      e: { ro: "do-while testează după corp.", en: "do-while tests after the body." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int s = 0;
for (int i = 1; i <= 5; i++)
    if (i % 2) s += i;
cout << s;`, o: ["15", "6", "9", "5"], a: 2, e: { ro: "Se adună doar impare: 1+3+5 = 9.", en: "Only odd values are added: 1+3+5 = 9." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int c = 0;
for (int i = 1; i <= 3; i++)
    for (int j = 1; j <= i; j++)
        c++;
cout << c;`, o: ["3", "6", "9", "4"], a: 1, e: { ro: "1 + 2 + 3 = 6 pași.", en: "1 + 2 + 3 = 6 steps." } },
    { q: { ro: "De ce pornim produsul cu p = 1?", en: "Why does a product start with p = 1?" },
      o: [{ ro: "Din obișnuință", en: "Just habit" }, { ro: "Cu p = 0 rezultatul ar fi mereu 0", en: "With p = 0 the result would always be 0" }, { ro: "Ca să fie long long", en: "So it becomes long long" }, { ro: "Nu contează", en: "It doesn't matter" }], a: 1,
      e: { ro: "Orice număr înmulțit cu 0 dă 0.", en: "Anything times 0 is 0." } },
  ],
  probs: [
    { id: "p4a", t: { ro: "Suma primelor n numere", en: "Sum of the first n numbers" },
      s: { ro: "Se citește n (1 ≤ n ≤ 100 000). Afișați 1 + 2 + … + n.", en: "Read n (1 ≤ n ≤ 100 000). Print 1 + 2 + … + n." },
      tests: [["5", "15"], ["100", "5050"], ["100000", "5000050000"]],
      hint: { ro: "Pentru n = 100 000 suma depășește int → long long.", en: "For n = 100 000 the sum overflows int → long long." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    long long s = 0;
    for (int i = 1; i <= n; i++)
        s += i;
    cout << s;
    return 0;
}` },
    { id: "p4b", t: { ro: "Puterile lui 2", en: "Powers of 2" },
      s: { ro: "Se citește n. Afișați, separate prin spațiu, toate puterile lui 2 mai mici sau egale cu n.", en: "Read n. Print, separated by spaces, all powers of 2 less than or equal to n." },
      tests: [["20", "1 2 4 8 16"], ["1", "1"], ["64", "1 2 4 8 16 32 64"]],
      hint: { ro: "p = 1; cât timp p ≤ n: afișează p și p = p * 2.", en: "p = 1; while p ≤ n: print p and set p = p * 2." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    for (long long p = 1; p <= n; p *= 2)
        cout << p << " ";
    return 0;
}` },
    { id: "p4c", t: { ro: "Factorial", en: "Factorial" },
      s: { ro: "Se citește n (0 ≤ n ≤ 20). Afișați n! = 1·2·…·n (prin convenție 0! = 1).", en: "Read n (0 ≤ n ≤ 20). Print n! = 1·2·…·n (by convention 0! = 1)." },
      tests: [["5", "120"], ["0", "1"], ["20", "2432902008176640000"]],
      hint: { ro: "Produsul pornește de la 1 și trebuie să fie long long.", en: "The product starts at 1 and must be long long." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    long long p = 1;
    for (int i = 2; i <= n; i++)
        p *= i;
    cout << p;
    return 0;
}` },
  ],
},
/* ───────────────────────── 5 ───────────────────────── */
{
  id: "m5", grade: "IX",
  t: { ro: "Cifrele unui număr", en: "Digits of a number" },
  sub: { ro: "Sumă, număr de cifre, oglindit, palindrom", en: "Digit sum, digit count, reverse, palindrome" },
  lesson: [
    { h: { ro: "Tiparul de bază", en: "The basic pattern" },
      p: { ro: `<p>Ultima cifră a lui n este <code>n % 10</code>. O „tai” cu <code>n = n / 10</code>. Repetând până când n devine 0, treci prin toate cifrele, <b>de la dreapta la stânga</b>.</p>
<p class="note">Bucla îl distruge pe n. Dacă îți mai trebuie valoarea inițială, lucrează pe o copie: <code>int x = n;</code></p>`,
          en: `<p>The last digit of n is <code>n % 10</code>. You “cut” it off with <code>n = n / 10</code>. Repeating until n becomes 0 walks through all digits <b>from right to left</b>.</p>
<p class="note">The loop destroys n. If you still need the original value, work on a copy: <code>int x = n;</code></p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int s = 0, nr = 0, cmax = 0;
    int x = n;
    do
    {
        int c = x % 10;
        s += c;            // suma cifrelor
        nr++;              // numarul de cifre
        if (c > cmax) cmax = c;
        x /= 10;
    } while (x != 0);
    cout << s << " " << nr << " " << cmax;
    return 0;
}`, inp: "4825", out: "19 4 8" },
    { h: { ro: "Oglinditul și palindromul", en: "Reverse and palindrome" },
      p: { ro: `<p>Oglinditul se construiește cifră cu cifră: <code>og = og * 10 + n % 10</code>. Un număr e <b>palindrom</b> dacă este egal cu oglinditul lui (ex. 12321).</p>`,
          en: `<p>The reverse (oglindit) is built digit by digit: <code>og = og * 10 + n % 10</code>. A number is a <b>palindrome</b> if it equals its reverse (e.g. 12321).</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    int x = n, og = 0;
    while (x > 0)
    {
        og = og * 10 + x % 10;
        x /= 10;
    }
    cout << og << endl;
    if (og == n) cout << "palindrom";
    else cout << "nu e palindrom";
    return 0;
}`, inp: "12321", out: "12321\npalindrom" },
    { h: { ro: "Construirea unui număr din anumite cifre", en: "Building a number from some digits" },
      p: { ro: `<p>Ca să păstrezi ordinea cifrelor când construiești un număr nou, folosești o putere a lui 10: <code>rez = c * p + rez; p *= 10;</code></p>`,
          en: `<p>To keep the digit order when you build a new number, use a power of 10: <code>rez = c * p + rez; p *= 10;</code></p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;               // ex. 12345
    int rez = 0, p = 1;
    while (n > 0)
    {
        int c = n % 10;
        if (c % 2 == 1)     // pastram doar cifrele impare
        {
            rez = c * p + rez;
            p *= 10;
        }
        n /= 10;
    }
    cout << rez;            // 135
    return 0;
}`, inp: "12345", out: "135" },
  ],
  quiz: [
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int n = 3052, c = 0;
while (n) {
    if (n % 10 % 2 == 0) c++;
    n /= 10;
}
cout << c;`, o: ["1", "2", "3", "4"], a: 1, e: { ro: "Cifre pare: 2 și 0.", en: "Even digits: 2 and 0." } },
    { q: { ro: "Care este oglinditul lui 1200 calculat cu <code>og = og*10 + n%10</code>?", en: "What is the reverse of 1200 using <code>og = og*10 + n%10</code>?" }, o: ["0021", "21", "1200", "201"], a: 1,
      e: { ro: "Zerourile din față dispar: 0, 0, 2, 21.", en: "Leading zeros vanish: 0, 0, 2, 21." } },
    { q: { ro: "De ce numărăm cifrele cu do-while și nu cu while?", en: "Why count digits with do-while instead of while?" },
      o: [{ ro: "E mai rapid", en: "It is faster" }, { ro: "Ca n = 0 să aibă 1 cifră, nu 0", en: "So that n = 0 has 1 digit, not 0" }, { ro: "while nu merge cu %", en: "while doesn't work with %" }, { ro: "Nu există diferență", en: "No difference" }], a: 1,
      e: { ro: "Cu while, pentru n = 0 bucla nu rulează deloc.", en: "With while, for n = 0 the loop never runs." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int n = 4825, m = 0;
while (n) {
    if (n % 10 > m) m = n % 10;
    n /= 10;
}
cout << m;`, o: ["5", "4", "8", "2"], a: 2, e: { ro: "Calculează cifra maximă: 8.", en: "It finds the largest digit: 8." } },
    { q: { ro: "Ce afișează pentru n = 12345?", en: "What does it print for n = 12345?" }, code: `int x = 0, p = 1;
while (n) {
    if (n % 2 == 1) { x = n % 10 * p + x; p *= 10; }
    n /= 10;
}
cout << x;`, o: ["531", "135", "24", "12345"], a: 1,
      e: { ro: "Atenție: n%2 testează paritatea ultimei cifre (aceeași cu a lui n). Se păstrează cifrele impare, în ordine: 135.", en: "Note: n%2 tests the parity of the last digit (same as n's). Odd digits are kept, in order: 135." } },
  ],
  probs: [
    { id: "p5a", t: { ro: "Suma cifrelor", en: "Digit sum" },
      s: { ro: "Se citește un număr natural n (n ≤ 10⁹). Afișați suma cifrelor lui.", en: "Read a natural number n (n ≤ 10⁹). Print the sum of its digits." },
      tests: [["1234", "10"], ["0", "0"], ["999999999", "81"]],
      hint: { ro: "Tiparul: s += n % 10; n /= 10;", en: "The pattern: s += n % 10; n /= 10;" },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n, s = 0;
    cin >> n;
    while (n > 0)
    {
        s += n % 10;
        n /= 10;
    }
    cout << s;
    return 0;
}` },
    { id: "p5b", t: { ro: "Palindrom", en: "Palindrome" },
      s: { ro: "Se citește un număr natural n. Afișați DA dacă este palindrom, altfel NU.", en: "Read a natural number n. Print DA if it is a palindrome, otherwise NU." },
      tests: [["12321", "DA"], ["1221", "DA"], ["123", "NU"], ["7", "DA"]],
      hint: { ro: "Calculează oglinditul pe o copie a lui n, apoi compară.", en: "Compute the reverse on a copy of n, then compare." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n, x, og = 0;
    cin >> n;
    x = n;
    while (x > 0)
    {
        og = og * 10 + x % 10;
        x /= 10;
    }
    if (og == n) cout << "DA";
    else cout << "NU";
    return 0;
}` },
    { id: "p5c", t: { ro: "Cifra maximă și aparițiile ei", en: "Largest digit and its count" },
      s: { ro: "Se citește n. Afișați cifra maximă a lui n și de câte ori apare.", en: "Read n. Print the largest digit of n and how many times it appears." },
      tests: [["48288", "8 3"], ["0", "0 1"], ["1234", "4 1"]],
      hint: { ro: "Când găsești o cifră mai mare, resetezi contorul la 1; când e egală, îl crești.", en: "When you find a bigger digit, reset the counter to 1; when it is equal, increase it." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n, cmax = -1, nr = 0;
    cin >> n;
    do
    {
        int c = n % 10;
        if (c > cmax) { cmax = c; nr = 1; }
        else if (c == cmax) nr++;
        n /= 10;
    } while (n > 0);
    cout << cmax << " " << nr;
    return 0;
}` },
  ],
},
/* ───────────────────────── 6 ───────────────────────── */
{
  id: "m6", grade: "IX",
  t: { ro: "Divizibilitate", en: "Divisibility" },
  sub: { ro: "Divizori, numere prime, CMMDC, CMMMC, factori primi", en: "Divisors, primes, GCD, LCM, prime factors" },
  lesson: [
    { h: { ro: "Divizori și numere prime", en: "Divisors and primes" },
      p: { ro: `<p>d este divizor al lui n dacă <code>n % d == 0</code>. Un număr este <b>prim</b> dacă are exact doi divizori: 1 și el însuși (0 și 1 <b>nu</b> sunt prime).</p>
<p>Divizorii vin în perechi (d, n/d), deci e suficient să cauți până la √n: condiția <code>d * d &lt;= n</code>.</p>`,
          en: `<p>d divides n if <code>n % d == 0</code>. A number is <b>prime</b> if it has exactly two divisors: 1 and itself (0 and 1 are <b>not</b> prime).</p>
<p>Divisors come in pairs (d, n/d), so it is enough to search up to √n: the condition <code>d * d &lt;= n</code>.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    bool prim = (n >= 2);
    for (int d = 2; d * d <= n; d++)
        if (n % d == 0)
        {
            prim = false;
            break;
        }
    if (prim) cout << n << " este prim";
    else cout << n << " nu este prim";
    return 0;
}`, inp: "97", out: "97 este prim" },
    { h: { ro: "CMMDC – algoritmul lui Euclid", en: "GCD – Euclid's algorithm" },
      p: { ro: `<p>Cât timp b ≠ 0: r = a % b, a = b, b = r. La final cmmdc = a. Apoi <b>cmmmc = a·b / cmmdc</b>.</p>
<p class="note">a·b poate depăși int. Folosește <code>long long</code> sau calculează <code>a / cmmdc * b</code>.</p>`,
          en: `<p>While b ≠ 0: r = a % b, a = b, b = r. At the end gcd = a (cmmdc in Romanian). Then <b>lcm = a·b / gcd</b> (cmmmc).</p>
<p class="note">a·b can overflow int. Use <code>long long</code> or compute <code>a / gcd * b</code>.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    long long a, b;
    cin >> a >> b;
    long long x = a, y = b;
    while (y != 0)
    {
        long long r = x % y;
        x = y;
        y = r;
    }
    cout << "cmmdc = " << x << endl;
    cout << "cmmmc = " << a / x * b;
    return 0;
}`, inp: "12 18", out: "cmmdc = 6\ncmmmc = 36" },
    { h: { ro: "Descompunerea în factori primi", en: "Prime factorization" },
      p: { ro: `<p>Împarți la d = 2, 3, 4, … cât timp se poate și numeri de câte ori. Divizorii compuși nu mai apar, pentru că factorii lor au fost deja eliminați.</p>`,
          en: `<p>Divide by d = 2, 3, 4, … as long as you can and count how many times. Composite divisors never show up, because their factors were already removed.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;               // ex. 360 = 2^3 * 3^2 * 5
    int d = 2;
    while (n > 1)
    {
        int e = 0;
        while (n % d == 0)
        {
            n /= d;
            e++;
        }
        if (e > 0) cout << d << "^" << e << " ";
        d++;
        if (d * d > n && n > 1) // ce a ramas e prim
        {
            cout << n << "^1";
            n = 1;
        }
    }
    return 0;
}`, inp: "360", out: "2^3 3^2 5^1" },
  ],
  quiz: [
    { q: { ro: "Cât este cmmdc(48, 18) și cmmmc(48, 18)?", en: "What are gcd(48, 18) and lcm(48, 18)?" }, o: ["6 și 144", "6 și 864", "3 și 288", "2 și 432"], a: 0,
      e: { ro: "48%18=12, 18%12=6, 12%6=0 → 6. cmmmc = 48·18/6 = 144.", en: "48%18=12, 18%12=6, 12%6=0 → 6. lcm = 48·18/6 = 144." } },
    { q: { ro: "Câți divizori are 36?", en: "How many divisors does 36 have?" }, o: ["8", "9", "6", "10"], a: 1,
      e: { ro: "1, 2, 3, 4, 6, 9, 12, 18, 36. Pătratele perfecte au număr impar de divizori.", en: "1, 2, 3, 4, 6, 9, 12, 18, 36. Perfect squares have an odd number of divisors." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int n = 12, s = 0;
for (int d = 1; d <= n; d++)
    if (n % d == 0) s += d;
cout << s;`, o: ["16", "28", "12", "27"], a: 1, e: { ro: "1+2+3+4+6+12 = 28.", en: "1+2+3+4+6+12 = 28." } },
    { q: { ro: "De ce e suficient <code>d * d &lt;= n</code> la testul de primalitate?", en: "Why is <code>d * d &lt;= n</code> enough in the primality test?" },
      o: [{ ro: "Divizorii vin în perechi d și n/d; unul e mereu ≤ √n", en: "Divisors pair up as d and n/d; one is always ≤ √n" }, { ro: "Numerele prime sunt mici", en: "Primes are small" }, { ro: "Ca să nu depășim int", en: "To avoid int overflow" }, { ro: "Nu e suficient", en: "It is not enough" }], a: 0,
      e: { ro: "Dacă n are un divizor mai mare decât √n, perechea lui e mai mică decât √n și a fost deja găsită.", en: "If n has a divisor above √n, its pair is below √n and was already found." } },
    { q: { ro: "Este 1 număr prim?", en: "Is 1 a prime number?" }, o: [{ ro: "Da", en: "Yes" }, { ro: "Nu", en: "No" }], a: 1, e: { ro: "Are un singur divizor.", en: "It has only one divisor." } },
  ],
  probs: [
    { id: "p6a", t: { ro: "Număr prim", en: "Prime number" },
      s: { ro: "Se citește n (n ≤ 2·10⁹). Afișați DA dacă n este prim, altfel NU.", en: "Read n (n ≤ 2·10⁹). Print DA if n is prime, otherwise NU." },
      tests: [["2", "DA"], ["1", "NU"], ["97", "DA"], ["91", "NU"], ["1000000007", "DA"]],
      hint: { ro: "Caută divizori de la 2 cât timp d*d ≤ n. Grijă la n < 2.", en: "Search divisors from 2 while d*d ≤ n. Watch out for n < 2." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    long long n;
    cin >> n;
    bool prim = (n >= 2);
    for (long long d = 2; d * d <= n && prim; d++)
        if (n % d == 0) prim = false;
    cout << (prim ? "DA" : "NU");
    return 0;
}` },
    { id: "p6b", t: { ro: "CMMDC și CMMMC", en: "GCD and LCM" },
      s: { ro: "Se citesc a și b naturale nenule (≤ 10⁶). Afișați cmmdc și cmmmc, separate prin spațiu.", en: "Read non-zero natural a and b (≤ 10⁶). Print their gcd and lcm, separated by a space." },
      tests: [["12 18", "6 36"], ["7 13", "1 91"], ["1000000 999999", "1 999999000000"]],
      hint: { ro: "Euclid pe copii ale lui a și b. Ultimul test depășește int!", en: "Euclid on copies of a and b. The last test overflows int!" },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    long long a, b;
    cin >> a >> b;
    long long x = a, y = b;
    while (y)
    {
        long long r = x % y;
        x = y;
        y = r;
    }
    cout << x << " " << a / x * b;
    return 0;
}` },
    { id: "p6c", t: { ro: "Numere perfecte", en: "Perfect numbers" },
      s: { ro: "Un număr e perfect dacă e egal cu suma divizorilor lui mai mici decât el (6 = 1+2+3). Se citește n (n ≤ 10 000). Afișați toate numerele perfecte ≤ n.", en: "A number is perfect if it equals the sum of its divisors smaller than itself (6 = 1+2+3). Read n (n ≤ 10 000). Print all perfect numbers ≤ n." },
      tests: [["500", "6 28 496"], ["10", "6"], ["10000", "6 28 496 8128"]],
      hint: { ro: "Pentru fiecare x de la 2 la n, calculează suma divizorilor proprii.", en: "For each x from 2 to n, compute the sum of its proper divisors." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    for (int x = 2; x <= n; x++)
    {
        int s = 1;
        for (int d = 2; d * d <= x; d++)
            if (x % d == 0)
            {
                s += d;
                if (d != x / d) s += x / d;
            }
        if (s == x) cout << x << " ";
    }
    return 0;
}` },
  ],
},
/* ───────────────────────── 7 ───────────────────────── */
{
  id: "m7", grade: "IX",
  t: { ro: "Secvențe de valori", en: "Sequences of values" },
  sub: { ro: "Minim/maxim, numărări, verificări, Fibonacci", en: "Min/max, counting, checks, Fibonacci" },
  lesson: [
    { h: { ro: "Citirea a n valori, fără vector", en: "Reading n values without an array" },
      p: { ro: `<p>Multe probleme de clasa a IX-a citesc n numere unul câte unul și le prelucrează pe loc. Pentru minim/maxim, inițializezi cu <b>prima valoare</b> (nu cu 0, care strică la numere negative).</p>`,
          en: `<p>Many 9th-grade problems read n numbers one by one and process them on the spot. For min/max, initialize with the <b>first value</b> (not 0, which breaks with negative numbers).</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n, x;
    cin >> n >> x;
    int mn = x, mx = x, pare = (x % 2 == 0);
    for (int i = 2; i <= n; i++)
    {
        cin >> x;
        if (x < mn) mn = x;
        if (x > mx) mx = x;
        if (x % 2 == 0) pare++;
    }
    cout << mn << " " << mx << " " << pare;
    return 0;
}`, inp: "5\n3 -2 8 0 7", out: "-2 8 3" },
    { h: { ro: "Verificarea unei proprietăți", en: "Checking a property" },
      p: { ro: `<p>„Toate elementele au proprietatea P?” → pornești cu <code>ok = true</code> și îl faci <code>false</code> la primul contraexemplu.<br>„Există măcar unul?” → pornești cu <code>gasit = false</code> și îl faci <code>true</code> când îl găsești.</p>`,
          en: `<p>“Do all elements have property P?” → start with <code>ok = true</code> and set it to <code>false</code> at the first counter-example.<br>“Is there at least one?” → start with <code>found = false</code> and set it to <code>true</code> when you find one.</p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n, x;
    bool toatePare = true, existaNegativ = false;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        cin >> x;
        if (x % 2 != 0) toatePare = false;
        if (x < 0) existaNegativ = true;
    }
    cout << toatePare << " " << existaNegativ;
    return 0;
}`, inp: "4\n2 8 -4 6", out: "1 1" },
    { h: { ro: "Valori consecutive și Fibonacci", en: "Consecutive values and Fibonacci" },
      p: { ro: `<p>Când compari un element cu cel de dinainte, ții minte valoarea anterioară într-o variabilă <code>ant</code>. Șirul Fibonacci (1, 1, 2, 3, 5, 8…) se generează cu trei variabile: <code>c = a + b; a = b; b = c;</code></p>`,
          en: `<p>When you compare an element with the previous one, keep the previous value in a variable <code>ant</code> (anterior). The Fibonacci sequence (1, 1, 2, 3, 5, 8…) uses three variables: <code>c = a + b; a = b; b = c;</code></p>` },
      code: R`#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    long long a = 1, b = 1;
    cout << a << " ";
    if (n >= 2) cout << b << " ";
    for (int i = 3; i <= n; i++)
    {
        long long c = a + b;
        cout << c << " ";
        a = b;
        b = c;
    }
    return 0;
}`, inp: "7", out: "1 1 2 3 5 8 13" },
  ],
  quiz: [
    { q: { ro: "De ce inițializăm maximul cu prima valoare citită, nu cu 0?", en: "Why initialize the max with the first value read, not 0?" },
      o: [{ ro: "Ca să meargă și când toate numerele sunt negative", en: "So it works when all numbers are negative" }, { ro: "E mai rapid", en: "It is faster" }, { ro: "0 nu e număr", en: "0 is not a number" }, { ro: "Așa cere C++", en: "C++ requires it" }], a: 0,
      e: { ro: "Pentru −5 −2 −9 maximul e −2, dar pornind cu 0 ai afișa 0.", en: "For −5 −2 −9 the max is −2, but starting from 0 you would print 0." } },
    { q: { ro: "Valorile citite sunt 3 8 2 8 1. De câte ori apare maximul?", en: "The values read are 3 8 2 8 1. How many times does the max appear?" }, o: ["1", "2", "3", "8"], a: 1, e: { ro: "8 apare de 2 ori.", en: "8 appears twice." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `long long a = 1, b = 1, c;
for (int i = 3; i <= 7; i++) { c = a + b; a = b; b = c; }
cout << b;`, o: ["8", "13", "21", "5"], a: 1, e: { ro: "Al 7-lea termen Fibonacci: 1 1 2 3 5 8 13.", en: "The 7th Fibonacci term: 1 1 2 3 5 8 13." } },
    { q: { ro: "Pentru șirul 1 1 2 2 2 3, câte perechi de elemente consecutive egale există?", en: "In the sequence 1 1 2 2 2 3, how many pairs of equal consecutive elements are there?" }, o: ["2", "3", "4", "5"], a: 1,
      e: { ro: "(1,1), (2,2), (2,2) → 3.", en: "(1,1), (2,2), (2,2) → 3." } },
    { q: { ro: "Codul <code>ok=1; … if (x % 2) ok = 0;</code> verifică dacă:", en: "The code <code>ok=1; … if (x % 2) ok = 0;</code> checks whether:" },
      o: [{ ro: "toate numerele sunt pare", en: "all numbers are even" }, { ro: "există un număr par", en: "there is an even number" }, { ro: "toate sunt impare", en: "all are odd" }, { ro: "există un impar", en: "there is an odd number" }], a: 0,
      e: { ro: "ok devine 0 la primul număr impar.", en: "ok becomes 0 at the first odd number." } },
  ],
  probs: [
    { id: "p7a", t: { ro: "Minim și maxim", en: "Min and max" },
      s: { ro: "Se citește n, apoi n numere întregi. Afișați minimul și maximul.", en: "Read n, then n integers. Print the minimum and the maximum." },
      tests: [["5\n3 -2 8 0 8", "-2 8"], ["1\n7", "7 7"], ["3\n-5 -2 -9", "-9 -2"]],
      hint: { ro: "Inițializează cu primul număr.", en: "Initialize with the first number." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n, x, mn, mx;
    cin >> n >> x;
    mn = mx = x;
    for (int i = 2; i <= n; i++)
    {
        cin >> x;
        if (x < mn) mn = x;
        if (x > mx) mx = x;
    }
    cout << mn << " " << mx;
    return 0;
}` },
    { id: "p7b", t: { ro: "Toate prime?", en: "All prime?" },
      s: { ro: "Se citește n, apoi n numere naturale. Afișați DA dacă toate sunt prime, altfel NU.", en: "Read n, then n natural numbers. Print DA if all are prime, otherwise NU." },
      tests: [["4\n2 3 5 7", "DA"], ["3\n2 4 5", "NU"], ["2\n1 3", "NU"]],
      hint: { ro: "ok = true și testul de primalitate pentru fiecare număr.", en: "ok = true and the primality test for each number." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n, x;
    bool ok = true;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        cin >> x;
        bool prim = (x >= 2);
        for (int d = 2; d * d <= x; d++)
            if (x % d == 0) prim = false;
        if (!prim) ok = false;
    }
    cout << (ok ? "DA" : "NU");
    return 0;
}` },
    { id: "p7c", t: { ro: "Perechi consecutive", en: "Consecutive pairs" },
      s: { ro: "Se citește n, apoi n numere. Afișați câte perechi de numere aflate pe poziții consecutive au aceeași paritate.", en: "Read n, then n numbers. Print how many pairs of numbers on consecutive positions have the same parity." },
      tests: [["5\n1 3 4 6 7", "2"], ["4\n1 2 3 4", "0"], ["3\n2 2 2", "2"]],
      hint: { ro: "Ține minte numărul anterior în ant.", en: "Keep the previous number in ant." },
      sol: R`#include <iostream>
using namespace std;

int main()
{
    int n, x, ant, c = 0;
    cin >> n >> ant;
    for (int i = 2; i <= n; i++)
    {
        cin >> x;
        if (x % 2 == ant % 2) c++;
        ant = x;
    }
    cout << c;
    return 0;
}` },
  ],
},
/* ───────────────────────── 8 ───────────────────────── */
{
  id: "m8", grade: "IX–X",
  t: { ro: "Vectori (tablouri unidimensionale)", en: "Arrays (one-dimensional)" },
  sub: { ro: "Parcurgere, căutare, sortare, frecvență, inserare, interclasare", en: "Traversal, search, sorting, frequency, insertion, merging" },
  lesson: [
    { h: { ro: "Declarare și parcurgere", en: "Declaring and traversing" },
      p: { ro: `<p>Un vector reține mai multe valori de același tip, accesate prin indice: <code>v[1]</code>, <code>v[2]</code>, … În școală se folosesc de obicei indicii de la <b>1 la n</b>, deci declari puțin mai mult decât maximul (ex. <code>int v[1001];</code>).</p>
<p class="note">Un vector declarat <b>global</b> (în afara lui main) are toate elementele 0 la început.</p>`,
          en: `<p>An array holds many values of the same type, accessed by index: <code>v[1]</code>, <code>v[2]</code>, … Romanian schools usually use indexes <b>1 to n</b>, so declare a bit more than the maximum (e.g. <code>int v[1001];</code>).</p>
<p class="note">An array declared <b>globally</b> (outside main) starts with all elements equal to 0.</p>` },
      code: R`#include <iostream>
using namespace std;

int v[1001], n;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++)
        cin >> v[i];
    // afisare in ordine inversa
    for (int i = n; i >= 1; i--)
        cout << v[i] << " ";
    return 0;
}`, inp: "5\n1 2 3 4 5", out: "5 4 3 2 1" },
    { h: { ro: "Sortare", en: "Sorting" },
      p: { ro: `<p><b>Metoda bulelor</b>: compari vecinii și îi interschimbi dacă nu sunt în ordine; repeți până nu mai ai interschimbări.<br><b>Sortarea prin selecție/interschimbare</b>: pentru fiecare i, compari v[i] cu toate v[j], j &gt; i.</p>`,
          en: `<p><b>Bubble sort</b> (metoda bulelor): compare neighbours and swap them if they are out of order; repeat until no swaps happen.<br><b>Selection / exchange sort</b>: for each i, compare v[i] with every v[j], j &gt; i.</p>` },
      code: R`#include <iostream>
using namespace std;

int v[1001], n;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> v[i];

    bool sortat;
    do
    {
        sortat = true;
        for (int i = 1; i < n; i++)
            if (v[i] > v[i + 1])
            {
                int aux = v[i];
                v[i] = v[i + 1];
                v[i + 1] = aux;
                sortat = false;
            }
    } while (!sortat);

    for (int i = 1; i <= n; i++) cout << v[i] << " ";
    return 0;
}`, inp: "6\n5 3 9 1 3 0", out: "0 1 3 3 5 9" },
    { h: { ro: "Inserare și ștergere", en: "Insert and delete" },
      p: { ro: `<p><b>Ștergere</b> de pe poziția k: muți la stânga tot ce e după k, apoi <code>n--</code>.<br><b>Inserare</b> pe poziția k: muți la dreapta de la final spre k, pui valoarea, apoi <code>n++</code>.</p>`,
          en: `<p><b>Delete</b> at position k: shift everything after k one place left, then <code>n--</code>.<br><b>Insert</b> at position k: shift right from the end down to k, place the value, then <code>n++</code>.</p>` },
      code: R`#include <iostream>
using namespace std;

int v[1001], n;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> v[i];

    // stergem elementul de pe pozitia 2
    int k = 2;
    for (int i = k; i < n; i++) v[i] = v[i + 1];
    n--;

    // inseram 99 pe pozitia 1
    for (int i = n; i >= 1; i--) v[i + 1] = v[i];
    v[1] = 99;
    n++;

    for (int i = 1; i <= n; i++) cout << v[i] << " ";
    return 0;
}`, inp: "4\n10 20 30 40", out: "99 10 30 40" },
    { h: { ro: "Vector de frecvență și căutare binară", en: "Frequency array and binary search" },
      p: { ro: `<p><b>Frecvență</b>: <code>f[x]++</code> numără de câte ori apare fiecare valoare x (merge când valorile sunt mici, ex. ≤ 1000). Parcurgând f în ordine obții valorile sortate și distincte.</p>
<p><b>Căutare binară</b> (doar pe vector <b>sortat</b>): te uiți la mijloc și înjumătățești zona. Pentru 1000 de elemente sunt cam 10 pași.</p>`,
          en: `<p><b>Frequency</b>: <code>f[x]++</code> counts how many times each value x appears (works when values are small, e.g. ≤ 1000). Walking f in order gives sorted, distinct values.</p>
<p><b>Binary search</b> (only on a <b>sorted</b> array): look at the middle and halve the range. For 1000 elements that is about 10 steps.</p>` },
      code: R`#include <iostream>
using namespace std;

int v[1001], n;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> v[i];   // sortat crescator
    int x;
    cin >> x;
    int st = 1, dr = n, poz = 0;
    while (st <= dr && poz == 0)
    {
        int m = (st + dr) / 2;
        if (v[m] == x) poz = m;
        else if (v[m] < x) st = m + 1;
        else dr = m - 1;
    }
    cout << poz;   // 0 = nu exista
    return 0;
}`, inp: "6\n1 4 7 9 12 20\n9", out: "4" },
    { h: { ro: "Interclasare", en: "Merging" },
      p: { ro: `<p>Doi vectori sortați se unesc într-unul sortat în timp liniar: compari primele elemente rămase și îl iei pe cel mai mic.</p>`,
          en: `<p>Two sorted arrays merge into one sorted array in linear time: compare the first remaining elements and take the smaller one.</p>` },
      code: R`#include <iostream>
using namespace std;

int a[1001], b[1001], c[2002], n, m;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> a[i];
    cin >> m;
    for (int j = 1; j <= m; j++) cin >> b[j];
    int i = 1, j = 1, k = 0;
    while (i <= n && j <= m)
        if (a[i] < b[j]) c[++k] = a[i++];
        else c[++k] = b[j++];
    while (i <= n) c[++k] = a[i++];
    while (j <= m) c[++k] = b[j++];
    for (int p = 1; p <= k; p++) cout << c[p] << " ";
    return 0;
}`, inp: "3\n1 4 7\n4\n2 3 8 9", out: "1 2 3 4 7 8 9" },
  ],
  quiz: [
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int v[] = {4, 7, 1, 9, 3};
cout << v[1] + v[3];`, o: ["5", "16", "11", "13"], a: 1, e: { ro: "Indicii încep de la 0: v[1] = 7, v[3] = 9.", en: "Indexes start at 0: v[1] = 7, v[3] = 9." } },
    { q: { ro: "Vectorul 5 2 8 1 după O SINGURĂ trecere a metodei bulelor (crescător):", en: "The array 5 2 8 1 after ONE pass of bubble sort (ascending):" }, o: ["1 2 5 8", "2 5 1 8", "2 5 8 1", "2 1 5 8"], a: 1,
      e: { ro: "5↔2 → 2 5 8 1; 5,8 rămân; 8↔1 → 2 5 1 8.", en: "5↔2 → 2 5 8 1; 5,8 stay; 8↔1 → 2 5 1 8." } },
    { q: { ro: "Căutarea binară funcționează doar dacă vectorul:", en: "Binary search only works if the array is:" }, o: [{ ro: "e sortat", en: "sorted" }, { ro: "are elemente distincte", en: "made of distinct elements" }, { ro: "are lungime pară", en: "of even length" }, { ro: "e global", en: "global" }], a: 0,
      e: { ro: "Altfel nu știi în ce jumătate să cauți.", en: "Otherwise you don't know which half to search." } },
    { q: { ro: "Pentru cifrele lui 1223 construim f[c]++. Cât este f[2]?", en: "For the digits of 1223 we do f[c]++. What is f[2]?" }, o: ["1", "2", "3", "0"], a: 1, e: { ro: "Cifra 2 apare de două ori.", en: "The digit 2 appears twice." } },
    { q: { ro: "Câte comparații face aproximativ căutarea binară pe 1000 de elemente?", en: "About how many comparisons does binary search make on 1000 elements?" }, o: ["1000", "500", "10", "100"], a: 2,
      e: { ro: "2¹⁰ = 1024, deci cam 10 înjumătățiri.", en: "2¹⁰ = 1024, so about 10 halvings." } },
    { q: { ro: "Ce face codul?", en: "What does the code do?" }, code: `for (i = k; i < n; i++) v[i] = v[i + 1];
n--;`, o: [{ ro: "Șterge elementul de pe poziția k", en: "Deletes the element at position k" }, { ro: "Inserează pe poziția k", en: "Inserts at position k" }, { ro: "Inversează vectorul", en: "Reverses the array" }, { ro: "Sortează", en: "Sorts" }], a: 0,
      e: { ro: "Elementele după k se mută cu o poziție la stânga.", en: "Elements after k shift one place left." } },
  ],
  probs: [
    { id: "p8a", t: { ro: "Sortare crescătoare", en: "Ascending sort" },
      s: { ro: "Se citește n (n ≤ 1000), apoi n numere întregi. Afișați-le în ordine crescătoare.", en: "Read n (n ≤ 1000), then n integers. Print them in ascending order." },
      tests: [["6\n5 3 9 1 3 0", "0 1 3 3 5 9"], ["1\n42", "42"], ["4\n-1 -5 10 2", "-5 -1 2 10"]],
      hint: { ro: "Metoda bulelor sau selecție. Nu folosi sort() – la examen ți se cere de obicei algoritmul.", en: "Bubble or selection sort. Avoid sort() – the exam usually asks for the algorithm." },
      sol: R`#include <iostream>
using namespace std;

int v[1001], n;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> v[i];
    for (int i = 1; i < n; i++)
        for (int j = i + 1; j <= n; j++)
            if (v[i] > v[j])
            {
                int aux = v[i];
                v[i] = v[j];
                v[j] = aux;
            }
    for (int i = 1; i <= n; i++) cout << v[i] << " ";
    return 0;
}` },
    { id: "p8b", t: { ro: "Valori distincte", en: "Distinct values" },
      s: { ro: "Se citesc n și n numere naturale ≤ 1000. Afișați în ordine crescătoare valorile distincte care apar.", en: "Read n and n natural numbers ≤ 1000. Print, in ascending order, the distinct values that appear." },
      tests: [["7\n4 1 4 2 1 9 4", "1 2 4 9"], ["3\n5 5 5", "5"], ["4\n1000 0 1000 3", "0 3 1000"]],
      hint: { ro: "Vector de frecvență f[1001].", en: "Frequency array f[1001]." },
      sol: R`#include <iostream>
using namespace std;

int f[1001];

int main()
{
    int n, x;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        cin >> x;
        f[x]++;
    }
    for (int v = 0; v <= 1000; v++)
        if (f[v] > 0) cout << v << " ";
    return 0;
}` },
    { id: "p8c", t: { ro: "Dublarea elementelor pare", en: "Doubling even elements" },
      s: { ro: "Se citește un vector cu n elemente. Inserați după fiecare element par dublul lui și afișați vectorul obținut.", en: "Read an array with n elements. After each even element insert its double and print the resulting array." },
      tests: [["4\n1 2 3 4", "1 2 4 3 4 8"], ["3\n1 3 5", "1 3 5"], ["2\n0 6", "0 0 6 12"]],
      hint: { ro: "Parcurge de la final spre început ca să nu prelucrezi elementele inserate. Sau construiește un al doilea vector.", en: "Walk from the end to the start so you don't process inserted elements. Or build a second array." },
      sol: R`#include <iostream>
using namespace std;

int v[2002], n;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> v[i];
    for (int i = n; i >= 1; i--)
        if (v[i] % 2 == 0)
        {
            for (int j = n; j > i; j--) v[j + 1] = v[j];
            v[i + 1] = 2 * v[i];
            n++;
        }
    for (int i = 1; i <= n; i++) cout << v[i] << " ";
    return 0;
}` },
    { id: "p8d", t: { ro: "Interclasare", en: "Merge" },
      s: { ro: "Se citesc doi vectori sortați crescător (n, apoi n valori; m, apoi m valori). Afișați toate valorile în ordine crescătoare.", en: "Read two arrays sorted ascending (n, then n values; m, then m values). Print all values in ascending order." },
      tests: [["3\n1 4 7\n4\n2 3 8 9", "1 2 3 4 7 8 9"], ["1\n5\n1\n5", "5 5"], ["2\n1 2\n3\n3 4 5", "1 2 3 4 5"]],
      hint: { ro: "Trei bucle while: cât timp ai în ambii, apoi restul din a, apoi restul din b.", en: "Three while loops: while both have elements, then the rest of a, then the rest of b." },
      sol: R`#include <iostream>
using namespace std;

int a[1001], b[1001], n, m;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> a[i];
    cin >> m;
    for (int j = 1; j <= m; j++) cin >> b[j];
    int i = 1, j = 1;
    while (i <= n && j <= m)
        if (a[i] <= b[j]) cout << a[i++] << " ";
        else cout << b[j++] << " ";
    while (i <= n) cout << a[i++] << " ";
    while (j <= m) cout << b[j++] << " ";
    return 0;
}` },
  ],
},
/* ───────────────────────── 9 ───────────────────────── */
{
  id: "m9", grade: "X",
  t: { ro: "Matrici (tablouri bidimensionale)", en: "Matrices (2D arrays)" },
  sub: { ro: "Linii, coloane, diagonale, zone", en: "Rows, columns, diagonals, zones" },
  lesson: [
    { h: { ro: "Declarare și parcurgere", en: "Declaring and traversing" },
      p: { ro: `<p><code>int a[101][101];</code> reține o matrice cu cel mult 100 de linii și 100 de coloane (indici 1…100). <code>a[i][j]</code> = elementul de pe linia i, coloana j. Parcurgerea folosește două bucle for imbricate.</p>`,
          en: `<p><code>int a[101][101];</code> holds a matrix with at most 100 rows and 100 columns (indexes 1…100). <code>a[i][j]</code> = the element on row i, column j. You walk it with two nested for loops.</p>` },
      code: R`#include <iostream>
using namespace std;

int a[101][101], n, m;

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            cin >> a[i][j];
    // suma pe fiecare linie
    for (int i = 1; i <= n; i++)
    {
        int s = 0;
        for (int j = 1; j <= m; j++) s += a[i][j];
        cout << "linia " << i << ": " << s << endl;
    }
    return 0;
}`, inp: "2 3\n1 2 3\n4 5 6", out: "linia 1: 6\nlinia 2: 15" },
    { h: { ro: "Matrice pătratică: diagonale și zone", en: "Square matrix: diagonals and zones" },
      p: { ro: `<p>Pentru o matrice n×n cu indici de la 1:</p>
<table><tr><th>Zona</th><th>Condiția</th></tr>
<tr><td>diagonala principală</td><td><code>i == j</code></td></tr>
<tr><td>deasupra diagonalei principale</td><td><code>i &lt; j</code></td></tr>
<tr><td>sub diagonala principală</td><td><code>i &gt; j</code></td></tr>
<tr><td>diagonala secundară</td><td><code>i + j == n + 1</code></td></tr>
<tr><td>deasupra diagonalei secundare</td><td><code>i + j &lt; n + 1</code></td></tr>
<tr><td>sub diagonala secundară</td><td><code>i + j &gt; n + 1</code></td></tr></table>
<p class="note">Dacă indicii pornesc de la 0, diagonala secundară devine <code>i + j == n - 1</code>.</p>`,
          en: `<p>For an n×n matrix with indexes from 1:</p>
<table><tr><th>Zone</th><th>Condition</th></tr>
<tr><td>main diagonal (principală)</td><td><code>i == j</code></td></tr>
<tr><td>above the main diagonal</td><td><code>i &lt; j</code></td></tr>
<tr><td>below the main diagonal</td><td><code>i &gt; j</code></td></tr>
<tr><td>secondary diagonal (secundară)</td><td><code>i + j == n + 1</code></td></tr>
<tr><td>above the secondary diagonal</td><td><code>i + j &lt; n + 1</code></td></tr>
<tr><td>below the secondary diagonal</td><td><code>i + j &gt; n + 1</code></td></tr></table>
<p class="note">With indexes starting at 0, the secondary diagonal becomes <code>i + j == n - 1</code>.</p>` },
      code: R`#include <iostream>
using namespace std;

int a[101][101], n;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
            cin >> a[i][j];
    int sp = 0, ss = 0;
    for (int i = 1; i <= n; i++)
    {
        sp += a[i][i];
        ss += a[i][n + 1 - i];
    }
    cout << sp << " " << ss;
    return 0;
}`, inp: "3\n1 2 3\n4 5 6\n7 8 9", out: "15 15" },
    { h: { ro: "Transpusa și parcurgerea pe coloane", en: "Transpose and column traversal" },
      p: { ro: `<p>Pentru a lucra pe coloane, inversezi ordinea buclelor: exteriorul merge pe j, interiorul pe i. Transpusa are liniile matricei inițiale drept coloane.</p>`,
          en: `<p>To work by columns, swap the loop order: the outer loop goes over j, the inner one over i. The transpose turns the original rows into columns.</p>` },
      code: R`#include <iostream>
using namespace std;

int a[101][101], n, m;

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            cin >> a[i][j];
    for (int j = 1; j <= m; j++)
    {
        for (int i = 1; i <= n; i++)
            cout << a[i][j] << " ";
        cout << endl;
    }
    return 0;
}`, inp: "2 3\n1 2 3\n4 5 6", out: "1 4\n2 5\n3 6" },
  ],
  quiz: [
    { q: { ro: "În matricea n×n (indici de la 1), elementul a[i][j] este pe diagonala secundară dacă:", en: "In an n×n matrix (indexes from 1), a[i][j] is on the secondary diagonal if:" }, o: ["i == j", "i + j == n", "i + j == n + 1", "i == n - j"], a: 2,
      e: { ro: "Ex. n = 4: (1,4), (2,3), (3,2), (4,1).", en: "E.g. n = 4: (1,4), (2,3), (3,2), (4,1)." } },
    { q: { ro: "Elementele strict deasupra diagonalei principale respectă:", en: "Elements strictly above the main diagonal satisfy:" }, o: ["i > j", "i < j", "i == j", "i + j < n"], a: 1, e: { ro: "Linia e mai mică decât coloana.", en: "The row is smaller than the column." } },
    { q: { ro: "a[i][j] = i * j pentru i, j de la 1 la 3. Cât e suma diagonalei principale?", en: "a[i][j] = i * j for i, j from 1 to 3. What is the main diagonal sum?" }, o: ["6", "14", "9", "36"], a: 1, e: { ro: "1 + 4 + 9 = 14.", en: "1 + 4 + 9 = 14." } },
    { q: { ro: "Ce afișează a doua linie?", en: "What does the second row print?" }, code: `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++)
        cout << (i == j ? 1 : 0);
    cout << endl;
}`, o: ["100", "010", "001", "111"], a: 1, e: { ro: "Este matricea unitate.", en: "It is the identity matrix." } },
    { q: { ro: "Câte elemente are o matrice cu 3 linii și 4 coloane?", en: "How many elements does a 3-row, 4-column matrix have?" }, o: ["7", "12", "16", "9"], a: 1, e: { ro: "3 · 4 = 12.", en: "3 · 4 = 12." } },
  ],
  probs: [
    { id: "p9a", t: { ro: "Suma pe linii", en: "Row sums" },
      s: { ro: "Se citesc n, m și o matrice n×m. Afișați pe câte o linie suma fiecărei linii a matricei.", en: "Read n, m and an n×m matrix. Print the sum of each row on its own line." },
      tests: [["2 3\n1 2 3\n4 5 6", "6\n15"], ["1 1\n-7", "-7"], ["3 2\n1 1\n2 2\n3 3", "2\n4\n6"]],
      hint: { ro: "Resetează suma la 0 la începutul fiecărei linii.", en: "Reset the sum to 0 at the start of each row." },
      sol: R`#include <iostream>
using namespace std;

int a[101][101], n, m;

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            cin >> a[i][j];
    for (int i = 1; i <= n; i++)
    {
        int s = 0;
        for (int j = 1; j <= m; j++) s += a[i][j];
        cout << s << endl;
    }
    return 0;
}` },
    { id: "p9b", t: { ro: "Coloana cu suma maximă", en: "Column with the largest sum" },
      s: { ro: "Se citesc n, m și o matrice n×m. Afișați indicele coloanei cu suma maximă (cea mai din stânga, la egalitate).", en: "Read n, m and an n×m matrix. Print the index of the column with the largest sum (the leftmost one on a tie)." },
      tests: [["3 3\n1 9 3\n4 0 6\n7 8 2", "2"], ["2 2\n1 1\n1 1", "1"], ["1 3\n-1 -2 -3", "1"]],
      hint: { ro: "Bucla exterioară pe coloane. Inițializează maximul cu suma primei coloane.", en: "Outer loop over columns. Start the max with the first column's sum." },
      sol: R`#include <iostream>
using namespace std;

int a[101][101], n, m;

int main()
{
    cin >> n >> m;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= m; j++)
            cin >> a[i][j];
    int best = 1, smax = 0;
    for (int j = 1; j <= m; j++)
    {
        int s = 0;
        for (int i = 1; i <= n; i++) s += a[i][j];
        if (j == 1 || s > smax) { smax = s; best = j; }
    }
    cout << best;
    return 0;
}` },
    { id: "p9c", t: { ro: "Sub diagonala principală", en: "Below the main diagonal" },
      s: { ro: "Se citește o matrice pătratică n×n. Afișați suma elementelor aflate strict sub diagonala principală.", en: "Read a square n×n matrix. Print the sum of the elements strictly below the main diagonal." },
      tests: [["3\n1 2 3\n4 5 6\n7 8 9", "19"], ["1\n5", "0"], ["2\n1 2\n3 4", "3"]],
      hint: { ro: "Condiția i > j.", en: "The condition i > j." },
      sol: R`#include <iostream>
using namespace std;

int a[101][101], n;

int main()
{
    cin >> n;
    int s = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 1; j <= n; j++)
        {
            cin >> a[i][j];
            if (i > j) s += a[i][j];
        }
    cout << s;
    return 0;
}` },
  ],
},
/* ───────────────────────── 10 ───────────────────────── */
{
  id: "m10", grade: "X",
  t: { ro: "Fișiere text", en: "Text files" },
  sub: { ro: "ifstream, ofstream, citire până la sfârșitul fișierului", en: "ifstream, ofstream, reading to end of file" },
  lesson: [
    { h: { ro: "Citire și scriere în fișiere", en: "Reading and writing files" },
      p: { ro: `<p>La examen datele vin adesea din fișiere (ex. <code>date.in</code>) și rezultatul merge în <code>date.out</code>. Se folosesc exact ca <code>cin</code> și <code>cout</code>:</p>`,
          en: `<p>On the exam, data often comes from files (e.g. <code>date.in</code>) and the result goes to <code>date.out</code>. You use them exactly like <code>cin</code> and <code>cout</code>:</p>` },
      code: R`#include <fstream>
using namespace std;

ifstream fin("date.in");
ofstream fout("date.out");

int main()
{
    int a, b;
    fin >> a >> b;
    fout << a + b;
    fin.close();
    fout.close();
    return 0;
}`, io: "file", inp: "3 4", out: "7" },
    { h: { ro: "Câte numere sunt în fișier? Citire până la final", en: "How many numbers? Read to the end" },
      p: { ro: `<p>Când nu știi câte valori sunt, citești cât timp citirea reușește: <code>while (fin &gt;&gt; x)</code>. Bucla se oprește singură la sfârșitul fișierului.</p>
<p class="note">În CodeBlocks, pune fișierul <code>date.in</code> în <b>același folder cu proiectul</b> (unde e fișierul .cbp). Altfel programul nu îl găsește și citește valori aiurea.</p>`,
          en: `<p>When you don't know how many values there are, read while reading succeeds: <code>while (fin &gt;&gt; x)</code>. The loop stops by itself at the end of the file.</p>
<p class="note">In CodeBlocks, put <code>date.in</code> in <b>the project folder</b> (where the .cbp file is). Otherwise the program can't find it and reads garbage.</p>` },
      code: R`#include <fstream>
using namespace std;

ifstream fin("date.in");
ofstream fout("date.out");

int main()
{
    int x, cnt = 0, mx = -2000000000;
    while (fin >> x)
    {
        cnt++;
        if (x > mx) mx = x;
    }
    fout << cnt << " " << mx;
    return 0;
}`, io: "file", inp: "4 7 1 8", out: "4 8" },
  ],
  quiz: [
    { q: { ro: "Ce bibliotecă incluzi pentru fișiere?", en: "Which header do you include for files?" }, o: ["<iostream>", "<fstream>", "<cstring>", "<cmath>"], a: 1, e: { ro: "f = file.", en: "f = file." } },
    { q: { ro: "Cum citești toate numerele dintr-un fișier, fără să știi câte sunt?", en: "How do you read every number in a file without knowing how many?" }, o: ["for (i = 1; i <= n; i++) fin >> x;", "while (fin >> x) { … }", "while (x != 0) fin >> x;", "fin >> all;"], a: 1,
      e: { ro: "Expresia fin >> x devine falsă când nu mai are ce citi.", en: "fin >> x becomes false when there is nothing left to read." } },
    { q: { ro: "Unde pui date.in când lucrezi în CodeBlocks?", en: "Where do you put date.in in CodeBlocks?" }, o: [{ ro: "Pe Desktop", en: "On the Desktop" }, { ro: "În folderul proiectului", en: "In the project folder" }, { ro: "În C:\\Windows", en: "In C:\\Windows" }, { ro: "Oriunde", en: "Anywhere" }], a: 1,
      e: { ro: "Programul caută fișierul în folderul în care rulează.", en: "The program looks for the file in the folder it runs in." } },
    { q: { ro: "Unde ajunge textul scris cu <code>fout &lt;&lt; x;</code> dacă <code>ofstream fout(\"date.out\");</code>?", en: "Where does <code>fout &lt;&lt; x;</code> write, given <code>ofstream fout(\"date.out\");</code>?" }, o: [{ ro: "Pe ecran", en: "On screen" }, { ro: "În date.out", en: "In date.out" }, { ro: "În date.in", en: "In date.in" }, { ro: "Nicăieri", en: "Nowhere" }], a: 1, e: { ro: "fout e legat de date.out.", en: "fout is tied to date.out." } },
  ],
  probs: [
    { id: "p10a", t: { ro: "Numărul de valori și maximul", en: "Count and maximum" },
      io: "file",
      s: { ro: "Fișierul date.in conține numere întregi (nu se știe câte). Scrieți în date.out câte sunt și cel mai mare dintre ele.", en: "The file date.in holds integers (how many is unknown). Write to date.out how many there are and the largest one." },
      tests: [["4 7 1\n8", "4 8"], ["-3", "1 -3"], ["5 5 5 5 5", "5 5"]],
      hint: { ro: "ifstream fin(\"date.in\"); ofstream fout(\"date.out\"); și while (fin >> x).", en: "ifstream fin(\"date.in\"); ofstream fout(\"date.out\"); and while (fin >> x)." },
      starter: R`#include <fstream>
using namespace std;

ifstream fin("date.in");
ofstream fout("date.out");

int main()
{

    return 0;
}
`,
      sol: R`#include <fstream>
using namespace std;

ifstream fin("date.in");
ofstream fout("date.out");

int main()
{
    int x, cnt = 0, mx = 0;
    while (fin >> x)
    {
        cnt++;
        if (cnt == 1 || x > mx) mx = x;
    }
    fout << cnt << " " << mx;
    return 0;
}` },
    { id: "p10b", t: { ro: "Media notelor", en: "Average grade" },
      io: "file",
      s: { ro: "Pe prima linie din date.in este n, iar pe a doua n note întregi. Scrieți în date.out media lor cu exact două zecimale.", en: "date.in holds n on the first line and n whole grades on the second. Write their average to date.out with exactly two decimals." },
      tests: [["3\n10 9 8", "9.00"], ["4\n7 8 8 10", "8.25"], ["1\n5", "5.00"]],
      hint: { ro: "Suma e int, dar media trebuie calculată ca double: (double)s / n. Pentru zecimale: fixed << setprecision(2) din <iomanip>.", en: "The sum is int but the average must be a double: (double)s / n. For decimals: fixed << setprecision(2) from <iomanip>." },
      sol: R`#include <fstream>
#include <iomanip>
using namespace std;

ifstream fin("date.in");
ofstream fout("date.out");

int main()
{
    int n, x, s = 0;
    fin >> n;
    for (int i = 1; i <= n; i++)
    {
        fin >> x;
        s += x;
    }
    fout << fixed << setprecision(2) << (double)s / n;
    return 0;
}` },
  ],
},
/* ───────────────────────── 11 ───────────────────────── */
{
  id: "m11", grade: "X",
  t: { ro: "Șiruri de caractere", en: "Character strings" },
  sub: { ro: "char s[], getline, strlen, strcpy, strcmp, strtok", en: "char s[], getline, strlen, strcpy, strcmp, strtok" },
  lesson: [
    { h: { ro: "Ce este un șir", en: "What a string is" },
      p: { ro: `<p>Un șir este un vector de <code>char</code> terminat cu caracterul <code>'\\0'</code> (codul 0). <code>char s[256];</code> poate reține până la 255 de caractere.</p>
<ul><li><code>cin &gt;&gt; s;</code> citește <b>un singur cuvânt</b> (se oprește la spațiu).</li>
<li><code>cin.getline(s, 256);</code> citește <b>toată linia</b>, cu spații.</li>
<li>Litere mari ↔ mici: diferența de cod este 32 (<code>'a' - 'A' == 32</code>), sau folosești <code>toupper</code>/<code>tolower</code> din <code>&lt;cctype&gt;</code>.</li></ul>`,
          en: `<p>A string is an array of <code>char</code> ending with the character <code>'\\0'</code> (code 0). <code>char s[256];</code> holds up to 255 characters.</p>
<ul><li><code>cin &gt;&gt; s;</code> reads <b>one word only</b> (stops at a space).</li>
<li><code>cin.getline(s, 256);</code> reads <b>the whole line</b>, spaces included.</li>
<li>Upper ↔ lower case: the code difference is 32 (<code>'a' - 'A' == 32</code>), or use <code>toupper</code>/<code>tolower</code> from <code>&lt;cctype&gt;</code>.</li></ul>` },
      code: R`#include <iostream>
#include <cstring>
using namespace std;

char s[256];

int main()
{
    cin.getline(s, 256);
    int voc = 0;
    for (int i = 0; s[i] != '\0'; i++)
        if (strchr("aeiouAEIOU", s[i]) != NULL)
            voc++;
    cout << strlen(s) << " caractere, " << voc << " vocale";
    return 0;
}`, inp: "ana are mere", out: "12 caractere, 6 vocale" },
    { h: { ro: "Funcțiile din <cstring>", en: "The <cstring> functions" },
      p: { ro: `<table><tr><th>Funcție</th><th>Ce face</th></tr>
<tr><td><code>strlen(s)</code></td><td>lungimea (fără '\\0')</td></tr>
<tr><td><code>strcpy(d, s)</code></td><td>copiază s în d</td></tr>
<tr><td><code>strcat(d, s)</code></td><td>lipește s la finalul lui d</td></tr>
<tr><td><code>strcmp(a, b)</code></td><td>&lt;0 dacă a e înaintea lui b alfabetic, 0 dacă sunt egale, &gt;0 altfel</td></tr>
<tr><td><code>strchr(s, c)</code></td><td>adresa primei apariții a caracterului c, sau NULL</td></tr>
<tr><td><code>strstr(s, t)</code></td><td>adresa primei apariții a lui t în s, sau NULL</td></tr>
<tr><td><code>strtok(s, " ")</code></td><td>împarte s în cuvinte</td></tr></table>
<p class="note">Șirurile nu se compară cu <code>==</code> și nu se copiază cu <code>=</code>. Folosește strcmp și strcpy.</p>`,
          en: `<table><tr><th>Function</th><th>What it does</th></tr>
<tr><td><code>strlen(s)</code></td><td>length (without '\\0')</td></tr>
<tr><td><code>strcpy(d, s)</code></td><td>copies s into d</td></tr>
<tr><td><code>strcat(d, s)</code></td><td>appends s to the end of d</td></tr>
<tr><td><code>strcmp(a, b)</code></td><td>&lt;0 if a comes before b alphabetically, 0 if equal, &gt;0 otherwise</td></tr>
<tr><td><code>strchr(s, c)</code></td><td>address of the first c in s, or NULL</td></tr>
<tr><td><code>strstr(s, t)</code></td><td>address of the first t inside s, or NULL</td></tr>
<tr><td><code>strtok(s, " ")</code></td><td>splits s into words</td></tr></table>
<p class="note">Strings are not compared with <code>==</code> and not copied with <code>=</code>. Use strcmp and strcpy.</p>` },
      code: R`#include <iostream>
#include <cstring>
using namespace std;

char s[256];

int main()
{
    cin.getline(s, 256);
    char *p = strtok(s, " ");
    while (p != NULL)
    {
        cout << p << " (" << strlen(p) << ")" << endl;
        p = strtok(NULL, " ");
    }
    return 0;
}`, inp: "ana are mere", out: "ana (3)\nare (3)\nmere (4)" },
  ],
  quiz: [
    { q: { ro: "Cât este <code>strlen(\"info\")</code>?", en: "What is <code>strlen(\"info\")</code>?" }, o: ["4", "5", "3", "6"], a: 0, e: { ro: "'\\0' nu se numără.", en: "'\\0' is not counted." } },
    { q: { ro: "<code>strcmp(\"abc\", \"abd\")</code> returnează:", en: "<code>strcmp(\"abc\", \"abd\")</code> returns:" }, o: [{ ro: "o valoare negativă", en: "a negative value" }, "0", { ro: "o valoare pozitivă", en: "a positive value" }, "3"], a: 0,
      e: { ro: "\"abc\" e înaintea lui \"abd\" în dicționar.", en: "\"abc\" comes before \"abd\" in the dictionary." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `char s[20] = "mere";
s[0] = s[0] - 32;
cout << s;`, o: ["mere", "Mere", "MERE", "-32ere"], a: 1, e: { ro: "'m' − 32 = 'M'.", en: "'m' − 32 = 'M'." } },
    { q: { ro: "Se citește cu <code>cin &gt;&gt; s;</code> textul „ana are mere”. Ce conține s?", en: "<code>cin &gt;&gt; s;</code> reads the text “ana are mere”. What is in s?" }, o: ["ana are mere", "ana", "mere", "a"], a: 1,
      e: { ro: "cin >> se oprește la primul spațiu. Pentru toată linia: cin.getline.", en: "cin >> stops at the first space. For the whole line: cin.getline." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `char s[] = "informatica";
cout << s + 5;`, o: ["informatica", "matica", "rmatica", "info"], a: 1, e: { ro: "s+5 arată spre caracterul cu indicele 5 ('m') și afișează de acolo până la final.", en: "s+5 points to the character at index 5 ('m') and prints from there to the end." } },
  ],
  probs: [
    { id: "p11a", t: { ro: "Numără vocalele", en: "Count the vowels" },
      s: { ro: "Se citește o linie de text cu litere mici și spații. Afișați numărul de vocale.", en: "Read a line of lowercase letters and spaces. Print the number of vowels." },
      tests: [["ana are mere", "6"], ["xyz", "0"], ["informatica e frumoasa", "10"]],
      hint: { ro: "cin.getline și strchr(\"aeiou\", s[i]).", en: "cin.getline and strchr(\"aeiou\", s[i])." },
      sol: R`#include <iostream>
#include <cstring>
using namespace std;

char s[256];

int main()
{
    cin.getline(s, 256);
    int v = 0;
    for (int i = 0; s[i]; i++)
        if (strchr("aeiou", s[i])) v++;
    cout << v;
    return 0;
}` },
    { id: "p11b", t: { ro: "Cel mai lung cuvânt", en: "Longest word" },
      s: { ro: "Se citește o linie cu cuvinte separate prin câte un spațiu. Afișați cel mai lung cuvânt (primul, la egalitate).", en: "Read a line of words separated by single spaces. Print the longest word (the first one on a tie)." },
      tests: [["ana are mere si pere", "mere"], ["c", "c"], ["programare in cpp", "programare"]],
      hint: { ro: "strtok + strlen, iar cel mai bun cuvânt îl copiezi cu strcpy.", en: "strtok + strlen, and copy the best word with strcpy." },
      sol: R`#include <iostream>
#include <cstring>
using namespace std;

char s[256], best[256];

int main()
{
    cin.getline(s, 256);
    char *p = strtok(s, " ");
    while (p)
    {
        if (strlen(p) > strlen(best)) strcpy(best, p);
        p = strtok(NULL, " ");
    }
    cout << best;
    return 0;
}` },
    { id: "p11c", t: { ro: "Inițiale majuscule", en: "Capitalize each word" },
      s: { ro: "Se citește o linie cu litere mici și spații. Transformați prima literă a fiecărui cuvânt în majusculă și afișați textul.", en: "Read a line of lowercase letters and spaces. Make the first letter of each word uppercase and print the text." },
      tests: [["ana are mere", "Ana Are Mere"], ["x", "X"], ["bac la info", "Bac La Info"]],
      hint: { ro: "Un caracter e început de cuvânt dacă e pe poziția 0 sau după un spațiu.", en: "A character starts a word if it is at position 0 or right after a space." },
      sol: R`#include <iostream>
#include <cstring>
using namespace std;

char s[256];

int main()
{
    cin.getline(s, 256);
    for (int i = 0; s[i]; i++)
        if (s[i] != ' ' && (i == 0 || s[i - 1] == ' '))
            s[i] = s[i] - 32;
    cout << s;
    return 0;
}` },
  ],
},
/* ───────────────────────── 12 ───────────────────────── */
{
  id: "m12", grade: "X",
  t: { ro: "Subprograme și structuri", en: "Functions and structs" },
  sub: { ro: "Funcții, parametri prin valoare/referință, struct", en: "Functions, value/reference parameters, struct" },
  lesson: [
    { h: { ro: "Definire și apel", en: "Defining and calling" },
      p: { ro: `<p>Un subprogram (funcție) grupează cod reutilizabil: <code>tip nume(parametri) { … return valoare; }</code>. O funcție <code>void</code> nu returnează nimic.</p>
<ul><li><b>Variabile locale</b>: declarate în funcție, există doar acolo.</li><li><b>Variabile globale</b>: declarate în afara funcțiilor, vizibile peste tot.</li></ul>`,
          en: `<p>A function (subprogram) groups reusable code: <code>type name(parameters) { … return value; }</code>. A <code>void</code> function returns nothing.</p>
<ul><li><b>Local variables</b>: declared inside a function, exist only there.</li><li><b>Global variables</b>: declared outside functions, visible everywhere.</li></ul>` },
      code: R`#include <iostream>
using namespace std;

bool prim(int n)
{
    if (n < 2) return false;
    for (int d = 2; d * d <= n; d++)
        if (n % d == 0) return false;
    return true;
}

int sumcif(int n)
{
    int s = 0;
    while (n) { s += n % 10; n /= 10; }
    return s;
}

int main()
{
    for (int x = 10; x <= 30; x++)
        if (prim(x)) cout << x << "(" << sumcif(x) << ") ";
    return 0;
}`, out: "11(2) 13(4) 17(8) 19(10) 23(5) 29(11)" },
    { h: { ro: "Parametri prin valoare și prin referință", en: "Value and reference parameters" },
      p: { ro: `<p>Prin <b>valoare</b> (<code>int x</code>) funcția primește o copie; modificările nu se văd în afară.<br>Prin <b>referință</b> (<code>int &amp;x</code>) funcția lucrează chiar pe variabila trimisă; modificările rămân.</p>`,
          en: `<p>By <b>value</b> (<code>int x</code>) the function gets a copy; changes are not visible outside.<br>By <b>reference</b> (<code>int &amp;x</code>) the function works on the variable itself; changes stay.</p>` },
      code: R`#include <iostream>
using namespace std;

void f(int x)  { x = 100; }
void g(int &x) { x = 100; }

void interschimba(int &a, int &b)
{
    int aux = a;
    a = b;
    b = aux;
}

int main()
{
    int a = 1, b = 2;
    f(a);
    cout << a << endl;     // 1
    g(a);
    cout << a << endl;     // 100
    interschimba(a, b);
    cout << a << " " << b; // 2 100
    return 0;
}`, out: "1\n100\n2 100" },
    { h: { ro: "Structuri (struct)", en: "Structs" },
      p: { ro: `<p>Un <code>struct</code> grupează date de tipuri diferite care descriu același lucru. Accesezi câmpurile cu punct: <code>e.nota</code>. Poți face vectori de structuri.</p>`,
          en: `<p>A <code>struct</code> groups data of different types that describe one thing. Access fields with a dot: <code>e.nota</code>. You can make arrays of structs.</p>` },
      code: R`#include <iostream>
using namespace std;

struct elev
{
    char nume[30];
    double medie;
};

elev v[100];
int n;

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++)
        cin >> v[i].nume >> v[i].medie;
    int best = 1;
    for (int i = 2; i <= n; i++)
        if (v[i].medie > v[best].medie) best = i;
    cout << v[best].nume;
    return 0;
}`, inp: "3\nAna 9.5\nMihai 10\nIoana 8", out: "Mihai" },
  ],
  quiz: [
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `void f(int x) { x = 10; }
int main() { int a = 5; f(a); cout << a; }`, o: ["5", "10", "15", "0"], a: 0, e: { ro: "Prin valoare: f modifică o copie.", en: "By value: f changes a copy." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `void f(int &x) { x = 10; }
int main() { int a = 5; f(a); cout << a; }`, o: ["5", "10", "15", "0"], a: 1, e: { ro: "Prin referință: f modifică chiar pe a.", en: "By reference: f changes a itself." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int f(int n) {
    if (n % 2) return n * 2;
    return n / 2;
}
cout << f(f(6));`, o: ["3", "6", "12", "1"], a: 1, e: { ro: "f(6) = 3 (par → /2), f(3) = 6 (impar → ·2).", en: "f(6) = 3 (even → /2), f(3) = 6 (odd → ·2)." } },
    { q: { ro: "O variabilă declarată în interiorul unei funcții este:", en: "A variable declared inside a function is:" }, o: [{ ro: "globală", en: "global" }, { ro: "locală", en: "local" }, { ro: "constantă", en: "constant" }, { ro: "parametru", en: "a parameter" }], a: 1, e: { ro: "Există doar cât rulează funcția.", en: "It only exists while the function runs." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `struct punct { int x, y; };
punct a = {2, 3};
cout << a.x * a.y;`, o: ["5", "6", "23", "1"], a: 1, e: { ro: "2 · 3 = 6.", en: "2 · 3 = 6." } },
  ],
  probs: [
    { id: "p12a", t: { ro: "Funcția sumcif", en: "The sumcif function" },
      s: { ro: "Scrieți funcția sumcif(n) care returnează suma cifrelor lui n. Se citesc n și apoi n numere; afișați numărul cu suma cifrelor cea mai mare (primul, la egalitate).", en: "Write the function sumcif(n) that returns the digit sum of n. Read n and then n numbers; print the number with the largest digit sum (the first one on a tie)." },
      tests: [["4\n19 345 1000 77", "77"], ["2\n5 50", "5"], ["3\n0 9 18", "9"]],
      hint: { ro: "int sumcif(int n) { … return s; }", en: "int sumcif(int n) { … return s; }" },
      sol: R`#include <iostream>
using namespace std;

int sumcif(int n)
{
    int s = 0;
    while (n) { s += n % 10; n /= 10; }
    return s;
}

int main()
{
    int n, x, best, bs = -1;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        cin >> x;
        if (sumcif(x) > bs) { bs = sumcif(x); best = x; }
    }
    cout << best;
    return 0;
}` },
    { id: "p12b", t: { ro: "Interschimbare prin referință", en: "Swap by reference" },
      s: { ro: "Scrieți funcția ordonare(int &a, int &b) care pune în a valoarea mai mică și în b pe cea mai mare. Citiți două numere, apelați funcția și afișați a și b.", en: "Write the function ordonare(int &a, int &b) that puts the smaller value in a and the larger in b. Read two numbers, call the function and print a and b." },
      tests: [["9 4", "4 9"], ["1 2", "1 2"], ["-3 -8", "-8 -3"]],
      hint: { ro: "Fără & valorile nu s-ar schimba în main.", en: "Without & the values wouldn't change in main." },
      sol: R`#include <iostream>
using namespace std;

void ordonare(int &a, int &b)
{
    if (a > b)
    {
        int aux = a;
        a = b;
        b = aux;
    }
}

int main()
{
    int a, b;
    cin >> a >> b;
    ordonare(a, b);
    cout << a << " " << b;
    return 0;
}` },
    { id: "p12c", t: { ro: "Elevul cu media cea mai mare", en: "Student with the best average" },
      s: { ro: "Se citesc n și apoi n elevi (nume fără spații, medie). Folosind un struct, afișați numele elevului cu media maximă (primul, la egalitate).", en: "Read n and then n students (name without spaces, average). Using a struct, print the name of the student with the highest average (the first one on a tie)." },
      tests: [["3\nAna 9.5\nMihai 10\nIoana 8", "Mihai"], ["1\nDan 7", "Dan"], ["2\nA 9\nB 9", "A"]],
      hint: { ro: "struct elev { char nume[30]; double medie; };", en: "struct elev { char nume[30]; double medie; };" },
      sol: R`#include <iostream>
using namespace std;

struct elev
{
    char nume[30];
    double medie;
};

elev v[100];

int main()
{
    int n, best = 1;
    cin >> n;
    for (int i = 1; i <= n; i++)
        cin >> v[i].nume >> v[i].medie;
    for (int i = 2; i <= n; i++)
        if (v[i].medie > v[best].medie) best = i;
    cout << v[best].nume;
    return 0;
}` },
  ],
},
];
