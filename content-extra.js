// Lesson 0 (from zero) goes first; recursion (grade 10 intensive) goes last.
MODULES.unshift({
  id: "m0", grade: "IX",
  t: { ro: "Lecția 0: de la zero", en: "Lesson 0: from zero" },
  sub: { ro: "Ce e un program, cum îl scrii și cum îl rulezi", en: "What a program is, how to write it and run it" },
  lesson: [
    { h: { ro: "Calculatorul face exact ce îi spui", en: "The computer does exactly what you say" },
      p: { ro: `<p>Un calculator e foarte rapid, dar nu se gândește singur. Un <b>program</b> e o listă de instrucțiuni pe care le execută una după alta, de sus în jos, exact cum sunt scrise. Dacă greșești o literă sau uiți un semn, nu „ghicește” ce ai vrut: îți dă o eroare.</p>
<p>La informatică vei face mereu trei lucruri:</p><ul><li>citești <b>date</b> (numere, cuvinte),</li><li>le <b>prelucrezi</b> (aduni, compari, numeri),</li><li>afișezi un <b>rezultat</b>.</li></ul>`,
          en: `<p>A computer is very fast, but it doesn't think for itself. A <b>program</b> is a list of instructions it carries out one after another, top to bottom, exactly as written. If you mistype a letter or forget a sign, it doesn't “guess” what you meant: it gives you an error.</p>
<p>In informatics you always do three things:</p><ul><li>read <b>data</b> (numbers, words),</li><li><b>process</b> it (add, compare, count),</li><li>print a <b>result</b>.</li></ul>` } },
    { h: { ro: "Primul tău program", en: "Your first program" },
      p: { ro: `<p>Structura de mai jos o vei scrie la începutul fiecărui program de la examen. Singurul rând care contează acum e cel cu <code>cout</code>: el afișează textul dintre ghilimele. Apasă <b>Rulează</b>, apoi schimbă textul și rulează din nou.</p>`,
          en: `<p>You will write the structure below at the start of every exam program. The only line that matters now is the one with <code>cout</code>: it prints the text between the quotes. Press <b>Run</b>, then change the text and run it again.</p>` },
      code: String.raw`#include <iostream>
using namespace std;

int main()
{
    cout << "Salut! Acesta e primul meu program.";
    return 0;
}`, out: "Salut! Acesta e primul meu program." },
    { h: { ro: "Citim două numere și le adunăm", en: "Reading two numbers and adding them" },
      p: { ro: `<p><code>int a, b;</code> face două cutiuțe pentru numere întregi, numite a și b. <code>cin &gt;&gt; a &gt;&gt; b;</code> ia două numere de la intrare și le pune în cutii. <code>cout &lt;&lt; a + b;</code> afișează suma. Schimbă numerele de la Intrare și rulează din nou.</p>`,
          en: `<p><code>int a, b;</code> makes two boxes for whole numbers, called a and b. <code>cin &gt;&gt; a &gt;&gt; b;</code> takes two numbers from the input and puts them in the boxes. <code>cout &lt;&lt; a + b;</code> prints the sum. Change the numbers in Input and run it again.</p>` },
      code: String.raw`#include <iostream>
using namespace std;

int main()
{
    int a, b;
    cin >> a >> b;
    cout << "Suma este " << a + b;
    return 0;
}`, inp: "12 30", out: "Suma este 42" },
    { h: { ro: "Ce se întâmplă când apeși Rulează", en: "What happens when you press Run" },
      p: { ro: `<p>Întâi <b>compilatorul</b> verifică dacă ai scris corect (ca un profesor care corectează gramatica) și traduce programul pe limba calculatorului. Dacă găsește o greșeală, îți arată linia și coloana: <code>main.cpp:5:20: error: expected ';'</code> înseamnă că la linia 5 lipsește un <code>;</code>. Sub mesaj apare și explicația pe românește. Dacă totul e bine, programul <b>rulează</b> și vezi ce afișează.</p>
<p>Cum înveți aici: citești lecția, rulezi exemplele și le modifici, faci testul, apoi rezolvi problemele. La fiecare problemă apeși <b>Rulează testele</b> și vezi imediat dacă programul tău dă rezultatele corecte.</p>`,
          en: `<p>First the <b>compiler</b> checks that you wrote it correctly (like a teacher checking grammar) and translates the program into the computer's language. If it finds a mistake it shows the line and column: <code>main.cpp:5:20: error: expected ';'</code> means a <code>;</code> is missing on line 5. A plain explanation appears under the message. If everything is fine the program <b>runs</b> and you see what it prints.</p>
<p>How to learn here: read the lesson, run the examples and change them, take the quiz, then solve the problems. For each problem press <b>Run the tests</b> and see at once whether your program gives the right results.</p>` } },
  ],
  quiz: [
    { q: { ro: "Ce face instrucțiunea <code>cout &lt;&lt; \"Buna\";</code>?", en: "What does <code>cout &lt;&lt; \"Buna\";</code> do?" }, o: [{ ro: "Afișează Buna pe ecran", en: "Prints Buna on screen" }, { ro: "Citește Buna de la tastatură", en: "Reads Buna from the keyboard" }, { ro: "Șterge ecranul", en: "Clears the screen" }, { ro: "Nimic", en: "Nothing" }], a: 0, e: { ro: "cout = afișare, cin = citire.", en: "cout = print, cin = read." } },
    { q: { ro: "Cu ce se termină aproape fiecare instrucțiune în C++?", en: "What ends almost every C++ statement?" }, o: [".", ";", ":", ","], a: 1, e: { ro: "Punctul și virgula e „punctul” propozițiilor din C++.", en: "The semicolon is the “full stop” of C++ sentences." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int a = 5, b = 3;
cout << a + b << " " << a - b;`, o: ["8 2", "53", "a + b a - b", "15 2"], a: 0, e: { ro: "5 + 3 = 8, apoi un spațiu, apoi 5 − 3 = 2.", en: "5 + 3 = 8, then a space, then 5 − 3 = 2." } },
    { q: { ro: "Ce înseamnă <code>int x;</code>?", en: "What does <code>int x;</code> mean?" }, o: [{ ro: "Creez o cutiuță x pentru un număr întreg", en: "I create a box x for a whole number" }, { ro: "Afișez x", en: "I print x" }, { ro: "x este sigur 0", en: "x is surely 0" }, { ro: "Citesc x", en: "I read x" }], a: 0, e: { ro: "Asta se numește declararea unei variabile.", en: "This is called declaring a variable." } },
  ],
  probs: [
    { id: "p0a", t: { ro: "Salut, lume!", en: "Hello, world!" },
      s: { ro: "Scrie un program care afișează exact textul: Salut, lume!", en: "Write a program that prints exactly: Salut, lume!" },
      tests: [["", "Salut, lume!"]],
      hint: { ro: "Scrie cout << \"Salut, lume!\"; în interiorul lui main, deasupra lui return 0;", en: "Write cout << \"Salut, lume!\"; inside main, above return 0;" },
      sol: String.raw`#include <iostream>
using namespace std;

int main()
{
    cout << "Salut, lume!";
    return 0;
}` },
    { id: "p0b", t: { ro: "Dublul unui număr", en: "Double a number" },
      s: { ro: "Se citește un număr întreg x. Afișează dublul lui.", en: "Read a whole number x. Print its double." },
      tests: [["7", "14"], ["0", "0"], ["-5", "-10"]],
      hint: { ro: "int x; cin >> x; apoi cout << x * 2;", en: "int x; cin >> x; then cout << x * 2;" },
      sol: String.raw`#include <iostream>
using namespace std;

int main()
{
    int x;
    cin >> x;
    cout << x * 2;
    return 0;
}` },
  ],
});

MODULES.push({
  id: "m13", grade: "X",
  t: { ro: "Recursivitate și Divide et Impera", en: "Recursion and divide & conquer" },
  sub: { ro: "Funcții care se autoapelează, condiția de oprire, împarte și stăpânește", en: "Functions that call themselves, the stopping condition, divide and conquer" },
  lesson: [
    { h: { ro: "O funcție care se cheamă pe ea însăși", en: "A function that calls itself" },
      p: { ro: `<p>O funcție <b>recursivă</b> rezolvă o problemă folosind rezultatul aceleiași probleme pentru o valoare mai mică. Are mereu două părți:</p><ul><li><b>condiția de oprire</b>: cazul simplu, rezolvat direct (ex. 0! = 1);</li><li><b>autoapelul</b>: problema redusă (n! = n · (n−1)!).</li></ul>`,
          en: `<p>A <b>recursive</b> function solves a problem using the result of the same problem for a smaller value. It always has two parts:</p><ul><li>the <b>stopping condition</b>: the simple case, solved directly (e.g. 0! = 1);</li><li>the <b>self-call</b>: the reduced problem (n! = n · (n−1)!).</li></ul>` },
      code: String.raw`#include <iostream>
using namespace std;

long long fact(int n)
{
    if (n == 0) return 1;        // conditia de oprire
    return n * fact(n - 1);      // autoapelul
}

int main()
{
    int n;
    cin >> n;
    cout << fact(n);
    return 0;
}`, inp: "5", out: "120" },
    { h: { ro: "Ordinea afișării: înainte sau după autoapel", en: "Print order: before or after the self-call" },
      p: { ro: `<p>Contează unde pui <code>cout</code>. Dacă afișezi <b>înainte</b> de autoapel, valorile apar în ordinea apelurilor; dacă afișezi <b>după</b>, apar la întoarcere, în ordine inversă. Întrebările de tip „ce afișează” de la examen verifică exact asta.</p>`,
          en: `<p>Where you put <code>cout</code> matters. Print <b>before</b> the self-call and values appear in call order; print <b>after</b> and they appear on the way back, in reverse. Exam “what does it print” questions test exactly this.</p>` },
      code: String.raw`#include <iostream>
using namespace std;

void inainte(int n) { if (n > 0) { cout << n << " "; inainte(n - 1); } }
void dupa(int n)    { if (n > 0) { dupa(n - 1); cout << n << " "; } }
int sumcif(int n)   { if (n == 0) return 0; return n % 10 + sumcif(n / 10); }

int main()
{
    inainte(3);  cout << endl;   // 3 2 1
    dupa(3);     cout << endl;   // 1 2 3
    cout << sumcif(4825);        // 19
    return 0;
}`, out: "3 2 1\n1 2 3\n19" },
    { h: { ro: "Divide et Impera", en: "Divide and conquer" },
      p: { ro: `<p>Împarți vectorul în două jumătăți, rezolvi fiecare jumătate (recursiv) și <b>combini</b> rezultatele. Când bucata are un singur element, răspunsul e direct. Așa funcționează și căutarea binară recursivă, sortarea prin interclasare (mergesort) și quicksort.</p>`,
          en: `<p>Split the array into two halves, solve each half (recursively) and <b>combine</b> the results. When a piece has a single element the answer is immediate. Recursive binary search, mergesort and quicksort all work this way.</p>` },
      code: String.raw`#include <iostream>
using namespace std;

int v[1001], n;

int maxim(int st, int dr)
{
    if (st == dr) return v[st];          // o singura valoare
    int m = (st + dr) / 2;
    int a = maxim(st, m);                // jumatatea stanga
    int b = maxim(m + 1, dr);            // jumatatea dreapta
    return a > b ? a : b;                // combinare
}

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> v[i];
    cout << maxim(1, n);
    return 0;
}`, inp: "6\n4 17 9 2 17 11", out: "17" },
  ],
  quiz: [
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int f(int n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}
cout << f(4);`, o: ["4", "10", "24", "1"], a: 2, e: { ro: "4 · 3 · 2 · 1 = 24.", en: "4 · 3 · 2 · 1 = 24." } },
    { q: { ro: "Ce afișează f(3)?", en: "What does f(3) print?" }, code: `void f(int n) {
    if (n > 0) { f(n - 1); cout << n; }
}`, o: ["321", "123", "3", "0123"], a: 1, e: { ro: "Afișarea e după autoapel, deci la întoarcere: 1, 2, 3.", en: "Printing happens after the self-call, so on the way back: 1, 2, 3." } },
    { q: { ro: "Ce afișează?", en: "What does it print?" }, code: `int s(int n) {
    if (n == 0) return 0;
    return n % 10 + s(n / 10);
}
cout << s(352);`, o: ["352", "10", "253", "7"], a: 1, e: { ro: "Suma cifrelor: 2 + 5 + 3 = 10.", en: "The digit sum: 2 + 5 + 3 = 10." } },
    { q: { ro: "Ce se întâmplă dacă o funcție recursivă nu are condiție de oprire?", en: "What happens if a recursive function has no stopping condition?" }, o: [{ ro: "Se autoapelează la nesfârșit și programul se blochează", en: "It calls itself forever and the program crashes" }, { ro: "Returnează 0", en: "It returns 0" }, { ro: "Compilatorul o oprește singur", en: "The compiler stops it" }, { ro: "Rulează o singură dată", en: "It runs once" }], a: 0, e: { ro: "Memoria pentru apeluri (stiva) se umple și programul se oprește cu eroare.", en: "The call memory (the stack) fills up and the program stops with an error." } },
    { q: { ro: "Care sunt cei trei pași ai metodei Divide et Impera?", en: "What are the three steps of divide and conquer?" }, o: [{ ro: "Împarte, rezolvă, combină", en: "Divide, solve, combine" }, { ro: "Citește, sortează, afișează", en: "Read, sort, print" }, { ro: "Caută, șterge, inserează", en: "Search, delete, insert" }, { ro: "Declară, apelează, returnează", en: "Declare, call, return" }], a: 0, e: { ro: "Problema se sparge în subprobleme de același tip, rezolvate separat, apoi rezultatele se combină.", en: "The problem is split into subproblems of the same kind, solved separately, then the results are combined." } },
  ],
  probs: [
    { id: "p13a", t: { ro: "Suma cifrelor, recursiv", en: "Recursive digit sum" },
      s: { ro: "Scrieți o funcție recursivă care returnează suma cifrelor unui număr natural n. Citiți n și afișați rezultatul.", en: "Write a recursive function that returns the digit sum of a natural number n. Read n and print the result." },
      tests: [["1234", "10"], ["0", "0"], ["999", "27"]],
      hint: { ro: "Oprire: n == 0 → 0. Altfel: ultima cifră + suma cifrelor lui n / 10.", en: "Stop: n == 0 → 0. Otherwise: last digit + digit sum of n / 10." },
      sol: String.raw`#include <iostream>
using namespace std;

int sumcif(int n)
{
    if (n == 0) return 0;
    return n % 10 + sumcif(n / 10);
}

int main()
{
    int n;
    cin >> n;
    cout << sumcif(n);
    return 0;
}` },
    { id: "p13b", t: { ro: "Fibonacci recursiv", en: "Recursive Fibonacci" },
      s: { ro: "Scrieți o funcție recursivă fib(n) cu fib(1) = fib(2) = 1 și fib(n) = fib(n−1) + fib(n−2). Citiți n (n ≤ 25) și afișați fib(n).", en: "Write a recursive function fib(n) with fib(1) = fib(2) = 1 and fib(n) = fib(n−1) + fib(n−2). Read n (n ≤ 25) and print fib(n)." },
      tests: [["1", "1"], ["7", "13"], ["25", "75025"]],
      hint: { ro: "Condiția de oprire: dacă n <= 2 returnezi 1.", en: "Stopping condition: if n <= 2 return 1." },
      sol: String.raw`#include <iostream>
using namespace std;

int fib(int n)
{
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

int main()
{
    int n;
    cin >> n;
    cout << fib(n);
    return 0;
}` },
    { id: "p13c", t: { ro: "Suma elementelor, Divide et Impera", en: "Array sum, divide and conquer" },
      s: { ro: "Se citește un vector cu n elemente întregi. Calculați suma elementelor folosind o funcție Divide et Impera suma(st, dr).", en: "Read an array of n integers. Compute the sum of its elements using a divide-and-conquer function suma(st, dr)." },
      tests: [["5\n1 2 3 4 5", "15"], ["1\n-7", "-7"], ["4\n10 -10 3 3", "6"]],
      hint: { ro: "Dacă st == dr returnezi v[st]; altfel împarți la mijloc și aduni cele două sume.", en: "If st == dr return v[st]; otherwise split in the middle and add the two sums." },
      sol: String.raw`#include <iostream>
using namespace std;

int v[1001], n;

int suma(int st, int dr)
{
    if (st == dr) return v[st];
    int m = (st + dr) / 2;
    return suma(st, m) + suma(m + 1, dr);
}

int main()
{
    cin >> n;
    for (int i = 1; i <= n; i++) cin >> v[i];
    cout << suma(1, n);
    return 0;
}` },
  ],
});

// Exam details are not part of the public build.
const EXAMS = [];
