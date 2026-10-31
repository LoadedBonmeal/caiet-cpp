// "Fișa de recapitulare": everything she must know, in one place.
// TEMPLATES are the standard algorithms to know by heart (each is a complete program, compiled and tested
// against its example); THEORY are the written-test answers; WORDS is the Romanian–English dictionary.
const RT = String.raw;
const TEMPLATES = [
  { id: "sumcif", ch: "m5", t: { ro: "Suma cifrelor", en: "Digit sum" }, why: { ro: "Ultima cifră e n % 10, o tai cu n / 10.", en: "The last digit is n % 10, cut it off with n / 10." }, inp: "1234", out: "10",
    code: RT`int n, s = 0;
cin >> n;
while (n > 0)
{
    s += n % 10;
    n /= 10;
}
cout << s;` },
  { id: "oglindit", ch: "m5", t: { ro: "Oglinditul și palindromul", en: "Reverse and palindrome" }, why: { ro: "og = og·10 + cifra; palindrom dacă og == n (lucrezi pe o copie).", en: "rev = rev·10 + digit; palindrome if rev == n (work on a copy)." }, inp: "12321", out: "12321 DA",
    code: RT`int n, x, og = 0;
cin >> n;
x = n;
while (x > 0)
{
    og = og * 10 + x % 10;
    x /= 10;
}
cout << og << " " << (og == n ? "DA" : "NU");` },
  { id: "prim", ch: "m6", t: { ro: "Număr prim", en: "Prime number" }, why: { ro: "Cauți divizori doar până la √n; 0 și 1 nu sunt prime.", en: "Look for divisors only up to √n; 0 and 1 aren't prime." }, inp: "97", out: "DA",
    code: RT`int n;
cin >> n;
bool prim = (n >= 2);
for (int d = 2; d * d <= n; d++)
    if (n % d == 0) prim = false;
cout << (prim ? "DA" : "NU");` },
  { id: "divizori", ch: "m6", t: { ro: "Divizorii unui număr", en: "Divisors of a number" }, why: { ro: "d divide n când n % d == 0.", en: "d divides n when n % d == 0." }, inp: "12", out: "1 2 3 4 6 12",
    code: RT`int n;
cin >> n;
for (int d = 1; d <= n; d++)
    if (n % d == 0) cout << d << " ";` },
  { id: "cmmdc", ch: "m6", t: { ro: "CMMDC (Euclid) și CMMMC", en: "GCD (Euclid) and LCM" }, why: { ro: "Restul devine împărțitor până dă 0; cmmmc = a / cmmdc · b.", en: "The remainder becomes the divisor until it is 0; lcm = a / gcd · b." }, inp: "12 18", out: "6 36",
    code: RT`int a, b;
cin >> a >> b;
int x = a, y = b;
while (y != 0)
{
    int r = x % y;
    x = y;
    y = r;
}
cout << x << " " << a / x * b;` },
  { id: "minmax", ch: "m7", t: { ro: "Minim și maxim dintr-un șir", en: "Min and max of a sequence" }, why: { ro: "Pornești de la primul număr, nu de la 0.", en: "Start from the first number, not from 0." }, inp: "5\n3 -2 8 0 7", out: "-2 8",
    code: RT`int n, x, mn, mx;
cin >> n >> x;
mn = mx = x;
for (int i = 2; i <= n; i++)
{
    cin >> x;
    if (x < mn) mn = x;
    if (x > mx) mx = x;
}
cout << mn << " " << mx;` },
  { id: "fibo", ch: "m7", t: { ro: "Șirul Fibonacci", en: "Fibonacci sequence" }, why: { ro: "Ții minte doar ultimii doi termeni.", en: "Remember only the last two terms." }, inp: "7", out: "1 1 2 3 5 8 13",
    code: RT`int n;
cin >> n;
long long a = 1, b = 1;
cout << a << " " << b << " ";
for (int i = 3; i <= n; i++)
{
    long long c = a + b;
    cout << c << " ";
    a = b;
    b = c;
}` },
  { id: "vector", ch: "m8", t: { ro: "Citirea și afișarea unui vector", en: "Reading and printing an array" }, why: { ro: "Vector global, indici de la 1 la n.", en: "Global array, indexes 1 to n." }, inp: "4\n5 1 9 2", out: "5 1 9 2", glob: "int v[1001], n;",
    code: RT`cin >> n;
for (int i = 1; i <= n; i++) cin >> v[i];
for (int i = 1; i <= n; i++) cout << v[i] << " ";` },
  { id: "sortare", ch: "m8", t: { ro: "Sortarea prin interschimbare", en: "Exchange sort" }, why: { ro: "Compari v[i] cu fiecare v[j] de după el și le schimbi prin aux.", en: "Compare v[i] with every later v[j] and swap through aux." }, inp: "5\n5 3 9 1 3", out: "1 3 3 5 9", glob: "int v[1001], n;",
    code: RT`cin >> n;
for (int i = 1; i <= n; i++) cin >> v[i];
for (int i = 1; i < n; i++)
    for (int j = i + 1; j <= n; j++)
        if (v[i] > v[j])
        {
            int aux = v[i];
            v[i] = v[j];
            v[j] = aux;
        }
for (int i = 1; i <= n; i++) cout << v[i] << " ";` },
  { id: "binara", ch: "m8", t: { ro: "Căutarea binară", en: "Binary search" }, why: { ro: "Doar pe vector sortat: te uiți la mijloc și înjumătățești.", en: "Only on a sorted array: look in the middle and halve." }, inp: "6\n1 4 7 9 12 20\n9", out: "4", glob: "int v[1001], n;",
    code: RT`cin >> n;
for (int i = 1; i <= n; i++) cin >> v[i];
int x, st = 1, dr = n, poz = 0;
cin >> x;
while (st <= dr && poz == 0)
{
    int m = (st + dr) / 2;
    if (v[m] == x) poz = m;
    else if (v[m] < x) st = m + 1;
    else dr = m - 1;
}
cout << poz;` },
  { id: "frecventa", ch: "m8", t: { ro: "Vectorul de frecvență", en: "Frequency array" }, why: { ro: "f[x]++ numără aparițiile; parcurgi f ca să le ai sortate.", en: "f[x]++ counts occurrences; walk f to get them sorted." }, inp: "6\n4 1 4 2 1 4", out: "1 2 4", glob: "int f[1001];",
    code: RT`int n, x;
cin >> n;
for (int i = 1; i <= n; i++)
{
    cin >> x;
    f[x]++;
}
for (int v = 0; v <= 1000; v++)
    if (f[v] > 0) cout << v << " ";` },
  { id: "interclasare", ch: "m8", t: { ro: "Interclasarea", en: "Merging" }, why: { ro: "Iei mereu cel mai mic dintre primele rămase; apoi copiezi restul.", en: "Always take the smaller of the first remaining ones; then copy the rest." }, inp: "3\n1 4 7\n3\n2 3 8", out: "1 2 3 4 7 8", glob: "int a[1001], b[1001], n, m;",
    code: RT`cin >> n;
for (int i = 1; i <= n; i++) cin >> a[i];
cin >> m;
for (int j = 1; j <= m; j++) cin >> b[j];
int i = 1, j = 1;
while (i <= n && j <= m)
    if (a[i] <= b[j]) cout << a[i++] << " ";
    else cout << b[j++] << " ";
while (i <= n) cout << a[i++] << " ";
while (j <= m) cout << b[j++] << " ";` },
  { id: "matrice", ch: "m9", t: { ro: "Matrice: diagonalele", en: "Matrix: the diagonals" }, why: { ro: "Principala: i == j. Secundara: i + j == n + 1.", en: "Main: i == j. Secondary: i + j == n + 1." }, inp: "3\n1 2 3\n4 5 6\n7 8 9", out: "15 15", glob: "int a[101][101], n;",
    code: RT`cin >> n;
for (int i = 1; i <= n; i++)
    for (int j = 1; j <= n; j++)
        cin >> a[i][j];
int sp = 0, ss = 0;
for (int i = 1; i <= n; i++)
{
    sp += a[i][i];
    ss += a[i][n + 1 - i];
}
cout << sp << " " << ss;` },
  { id: "fisiere", ch: "m10", t: { ro: "Fișiere: citire până la final", en: "Files: read to the end" }, why: { ro: "fin și fout se folosesc exact ca cin și cout.", en: "fin and fout work exactly like cin and cout." }, inp: "4 7 1 8", out: "4", io: "file", glob: "ifstream fin(\"date.in\");\nofstream fout(\"date.out\");",
    code: RT`int x, cnt = 0;
while (fin >> x) cnt++;
fout << cnt;` },
  { id: "cuvinte", ch: "m11", t: { ro: "Șiruri: împărțirea în cuvinte", en: "Strings: splitting into words" }, why: { ro: "cin.getline citește toată linia; strtok taie la spații.", en: "cin.getline reads the whole line; strtok cuts at spaces." }, inp: "ana are mere", out: "ana are mere", glob: "char s[256];",
    code: RT`cin.getline(s, 256);
char *p = strtok(s, " ");
while (p != NULL)
{
    cout << p << endl;
    p = strtok(NULL, " ");
}` },
  { id: "referinta", ch: "m12", t: { ro: "Funcție cu parametri prin referință", en: "Function with reference parameters" }, why: { ro: "Cu & funcția schimbă chiar variabilele din main.", en: "With & the function changes main's own variables." }, inp: "9 4", out: "4 9", fn: RT`void ordonare(int &a, int &b)
{
    if (a > b)
    {
        int aux = a;
        a = b;
        b = aux;
    }
}`,
    code: RT`int a, b;
cin >> a >> b;
ordonare(a, b);
cout << a << " " << b;` },
  { id: "recursiv", ch: "m13", t: { ro: "Funcție recursivă", en: "Recursive function" }, why: { ro: "Condiția de oprire întâi, apoi autoapelul cu o valoare mai mică.", en: "Stopping condition first, then the self-call on a smaller value." }, inp: "5", out: "120", fn: RT`long long fact(int n)
{
    if (n == 0) return 1;
    return n * fact(n - 1);
}`,
    code: RT`int n;
cin >> n;
cout << fact(n);` },
];
// Each template as the complete program she would write at the exam.
function templateProgram(t) {
  const inc = t.io === "file" ? "#include <fstream>" : t.id === "cuvinte" ? "#include <iostream>\n#include <cstring>" : "#include <iostream>";
  const body = t.code.split("\n").map(l => "    " + l).join("\n");
  return `${inc}\nusing namespace std;\n\n${t.glob ? t.glob + "\n\n" : ""}${t.fn ? t.fn + "\n\n" : ""}int main()\n{\n${body}\n    return 0;\n}`;
}

const THEORY = [
  { q: { ro: "Ce este un algoritm?", en: "What is an algorithm?" }, a: { ro: "O succesiune finită de pași clari și ordonați care, pornind de la datele de intrare, ajunge la rezultat.", en: "A finite sequence of clear, ordered steps that leads from the input data to the result." } },
  { q: { ro: "Care sunt proprietățile unui algoritm?", en: "What are the properties of an algorithm?" }, a: { ro: "Claritate (fiecare pas are un singur sens), generalitate (rezolvă o clasă de probleme), finitudine (se termină), plus corectitudine și eficiență.", en: "Clarity (each step has one meaning), generality (solves a class of problems), finiteness (it ends), plus correctness and efficiency." } },
  { q: { ro: "Care sunt etapele rezolvării unei probleme?", en: "What are the stages of solving a problem?" }, a: { ro: "Analiza problemei, elaborarea algoritmului, implementarea într-un limbaj de programare, testarea și depanarea.", en: "Analysing the problem, designing the algorithm, implementing it in a programming language, testing and debugging." } },
  { q: { ro: "Care sunt structurile de bază ale programării structurate?", en: "What are the basic structures of structured programming?" }, a: { ro: "Structura liniară (pași la rând), alternativă (dacă … atunci … altfel) și repetitivă (cât timp, pentru, repetă … până când).", en: "Linear (steps in order), alternative (if … then … else) and repetitive (while, for, repeat … until)." } },
  { q: { ro: "Care e diferența dintre „cât timp” și „repetă … până când”?", en: "What is the difference between “cât timp” and “repetă … până când”?" }, a: { ro: "„Cât timp” testează condiția înainte și poate să nu execute nimic; „repetă … până când” testează după, deci execută cel puțin o dată, și se oprește când condiția devine adevărată.", en: "“Cât timp” (while) tests first and may run zero times; “repetă … până când” tests after, so it runs at least once, and stops when the condition becomes true." } },
  { q: { ro: "Ce reprezintă formele dintr-o schemă logică?", en: "What do the flowchart shapes mean?" }, a: { ro: "Oval: start/stop. Paralelogram: citire/scriere. Dreptunghi: calcul/atribuire. Romb: decizie.", en: "Oval: start/stop. Parallelogram: input/output. Rectangle: calculation/assignment. Diamond: decision." } },
  { q: { ro: "Ce este o variabilă și ce este un tip de date?", en: "What is a variable and what is a data type?" }, a: { ro: "Variabila e o zonă de memorie cu nume, a cărei valoare se poate schimba. Tipul spune ce valori poate ține și ce operații se pot face (int, long long, double, char, bool).", en: "A variable is a named memory area whose value can change. The type says which values it can hold and which operations apply (int, long long, double, char, bool)." } },
  { q: { ro: "Ce dau / și % între numere întregi?", en: "What do / and % give between integers?" }, a: { ro: "/ dă câtul fără zecimale (7 / 2 = 3), % dă restul (7 % 2 = 1).", en: "/ gives the quotient without decimals (7 / 2 = 3), % gives the remainder (7 % 2 = 1)." } },
  { q: { ro: "Ce este un tablou unidimensional (vector)?", en: "What is a one-dimensional array?" }, a: { ro: "O colecție de elemente de același tip, păstrate unul după altul în memorie și accesate prin indice: v[i].", en: "A collection of elements of the same type, stored one after another in memory and accessed by index: v[i]." } },
  { q: { ro: "Când se poate folosi căutarea binară?", en: "When can binary search be used?" }, a: { ro: "Doar pe un vector sortat. Face aproximativ log₂ n comparații, față de n la căutarea secvențială.", en: "Only on a sorted array. It makes about log₂ n comparisons, against n for linear search." } },
  { q: { ro: "Ce este un șir de caractere în C++?", en: "What is a character string in C++?" }, a: { ro: "Un vector de char terminat cu caracterul '\\0'. Se prelucrează cu funcțiile din <cstring>: strlen, strcpy, strcat, strcmp, strchr, strstr, strtok.", en: "An array of char ending with the character '\\0'. It is processed with the <cstring> functions: strlen, strcpy, strcat, strcmp, strchr, strstr, strtok." } },
  { q: { ro: "Diferența dintre transmiterea prin valoare și prin referință?", en: "Pass by value versus pass by reference?" }, a: { ro: "Prin valoare funcția primește o copie, modificările nu se văd în afară. Prin referință (&) lucrează pe variabila originală, modificările rămân.", en: "By value the function gets a copy and changes aren't visible outside. By reference (&) it works on the original variable and changes stay." } },
  { q: { ro: "Variabile locale și globale?", en: "Local and global variables?" }, a: { ro: "Locale: declarate într-o funcție, există doar acolo. Globale: declarate în afara funcțiilor, vizibile peste tot și inițializate cu 0.", en: "Local: declared inside a function, exist only there. Global: declared outside functions, visible everywhere and initialised to 0." } },
  { q: { ro: "Ce este recursivitatea?", en: "What is recursion?" }, a: { ro: "O funcție care se autoapelează. Are obligatoriu o condiție de oprire și un autoapel care se apropie de ea.", en: "A function that calls itself. It must have a stopping condition and a self-call that moves towards it." } },
  { q: { ro: "Ce este metoda Divide et Impera?", en: "What is divide and conquer?" }, a: { ro: "Împarți problema în subprobleme de același tip, le rezolvi (de obicei recursiv) și combini rezultatele. Exemple: căutarea binară, mergesort, quicksort.", en: "Split the problem into subproblems of the same kind, solve them (usually recursively) and combine the results. Examples: binary search, mergesort, quicksort." } },
];

const WORDS = [
  ["algoritm", "algorithm"], ["date de intrare / de ieșire", "input / output data"], ["variabilă", "variable"], ["tip de date", "data type"],
  ["atribuire", "assignment"], ["structură alternativă", "decision (if)"], ["structură repetitivă", "loop"], ["cât timp … execută", "while … do"],
  ["pentru … execută", "for … do"], ["repetă … până când", "repeat … until"], ["parte întreagă [x]", "integer part"], ["rest (%)", "remainder"],
  ["cifră", "digit"], ["oglindit", "reversed number"], ["divizor", "divisor"], ["număr prim", "prime number"], ["cmmdc / cmmmc", "GCD / LCM"],
  ["șir de valori", "sequence of values"], ["vector (tablou unidimensional)", "array"], ["matrice (tablou bidimensional)", "matrix (2D array)"],
  ["diagonala principală / secundară", "main / secondary diagonal"], ["sortare", "sorting"], ["căutare binară", "binary search"],
  ["vector de frecvență", "frequency array"], ["interclasare", "merging"], ["fișier text", "text file"], ["șir de caractere", "character string"],
  ["subprogram (funcție)", "function"], ["parametru prin valoare / referință", "value / reference parameter"], ["variabilă locală / globală", "local / global variable"],
  ["înregistrare (struct)", "record (struct)"], ["recursivitate", "recursion"], ["condiție de oprire", "base case"], ["schemă logică", "flowchart"],
  ["eficiență", "efficiency"], ["compilare", "compiling"], ["depanare", "debugging"],
];
