// "Greșeli frecvente": the mistakes that lose points at the exam, per chapter (original text;
// the list of classic beginner errors follows learncpp's lessons on semantic errors and if-statement problems).
const MISTAKES = {
  m0: [
    { ro: "Uiți <code>;</code> la sfârșitul instrucțiunii → eroare „expected ';'”.", en: "Forgetting <code>;</code> at the end of a statement → “expected ';'” error." },
    { ro: "Scrii <code>Cout</code> sau <code>Main</code> cu majusculă. C++ face diferența între litere mari și mici.", en: "Writing <code>Cout</code> or <code>Main</code> with a capital. C++ is case-sensitive." },
    { ro: "Ghilimele uitate la text: <code>cout &lt;&lt; Salut;</code> caută o variabilă numită Salut.", en: "Missing quotes around text: <code>cout &lt;&lt; Salut;</code> looks for a variable called Salut." },
  ],
  m1: [
    { ro: "Confuzi „repetă … până când c” (se oprește când c devine adevărat) cu „cât timp c” (continuă cât c e adevărat).", en: "Mixing up “repetă … până când c” (stops when c becomes true) with “cât timp c” (continues while c is true)." },
    { ro: "La urmărirea pseudocodului sari peste un pas. Fă tabelul cu toate variabilele, rând cu rând.", en: "Skipping a step when tracing pseudocode. Make the table with every variable, row by row." },
    { ro: "Uiți că [x] înseamnă partea întreagă: [7/2] = 3, nu 3,5.", en: "Forgetting that [x] is the integer part: [7/2] = 3, not 3.5." },
  ],
  m2: [
    { ro: "<b>Variabilă neinițializată</b>: <code>int s; s += x;</code> pornește de la o valoare „gunoi”. Scrie <code>int s = 0;</code>.", en: "<b>Uninitialised variable</b>: <code>int s; s += x;</code> starts from a garbage value. Write <code>int s = 0;</code>." },
    { ro: "<b>Împărțire întreagă</b> nedorită: media <code>(a + b) / 2</code> cu int pierde zecimalele. Folosește <code>(a + b) / 2.0</code> sau <code>(double)</code>.", en: "Unwanted <b>integer division</b>: the average <code>(a + b) / 2</code> with ints loses the decimals. Use <code>(a + b) / 2.0</code> or <code>(double)</code>." },
    { ro: "<b>Depășire</b>: un produs sau o sumă mare nu încape în int. Folosește long long.", en: "<b>Overflow</b>: a big product or sum doesn't fit in an int. Use long long." },
  ],
  m3: [
    { ro: "<code>=</code> în loc de <code>==</code> în condiție: <code>if (x = 5)</code> e mereu adevărat.", en: "<code>=</code> instead of <code>==</code> in a condition: <code>if (x = 5)</code> is always true." },
    { ro: "<code>;</code> după if: <code>if (x &gt; 0);</code> — instrucțiunea de dedesubt se execută mereu.", en: "<code>;</code> after if: <code>if (x &gt; 0);</code> — the statement below always runs." },
    { ro: "Fără acolade, doar <b>prima</b> instrucțiune ține de if. Pune <code>{ }</code> când ai mai multe.", en: "Without braces only the <b>first</b> statement belongs to the if. Use <code>{ }</code> for more." },
    { ro: "Condiția 3 ≤ x ≤ 7 nu se scrie <code>3 &lt;= x &lt;= 7</code>, ci <code>x &gt;= 3 &amp;&amp; x &lt;= 7</code>.", en: "3 ≤ x ≤ 7 is not written <code>3 &lt;= x &lt;= 7</code> but <code>x &gt;= 3 &amp;&amp; x &lt;= 7</code>." },
  ],
  m4: [
    { ro: "<b>Off-by-one</b>: <code>i &lt; n</code> în loc de <code>i &lt;= n</code> sare peste ultimul element.", en: "<b>Off-by-one</b>: <code>i &lt; n</code> instead of <code>i &lt;= n</code> skips the last element." },
    { ro: "<b>Buclă infinită</b>: uiți să modifici variabila din condiție (de ex. lipsește <code>n /= 10</code>).", en: "<b>Infinite loop</b>: forgetting to change the variable in the condition (e.g. missing <code>n /= 10</code>)." },
    { ro: "Suma sau contorul se inițializează <b>în</b> buclă și se resetează la fiecare pas. Inițializează-le înainte.", en: "Initialising the sum or counter <b>inside</b> the loop resets it every step. Initialise them before." },
  ],
  m5: [
    { ro: "Lucrezi direct pe n și apoi îl compari cu oglinditul — dar n a ajuns 0. Fă o copie: <code>x = n</code>.", en: "Working on n directly, then comparing it with its reverse — but n is now 0. Make a copy: <code>x = n</code>." },
    { ro: "Numărul de cifre pentru n = 0: cu <code>while</code> obții 0. Folosește <code>do … while</code>.", en: "Digit count for n = 0: <code>while</code> gives 0. Use <code>do … while</code>." },
  ],
  m6: [
    { ro: "Uiți că 0 și 1 nu sunt prime.", en: "Forgetting that 0 and 1 are not prime." },
    { ro: "Euclid aplicat direct pe a și b, care apoi lipsesc la calculul cmmmc. Lucrează pe copii.", en: "Running Euclid on a and b directly, then missing them for the LCM. Work on copies." },
    { ro: "<code>a * b</code> depășește int la numere mari: calculează <code>a / cmmdc * b</code>.", en: "<code>a * b</code> overflows int for big numbers: compute <code>a / gcd * b</code>." },
  ],
  m7: [
    { ro: "Maximul pornit de la 0: nu merge dacă toate numerele sunt negative. Pornește de la primul număr.", en: "Starting the max at 0 fails when every number is negative. Start from the first number." },
    { ro: "Variabila <code>ant</code> nu se actualizează după comparație, deci compari mereu cu primul număr.", en: "Not updating <code>ant</code> after the comparison, so you always compare with the first number." },
  ],
  m8: [
    { ro: "Ieși din vector: <code>v[n + 1]</code> sau <code>v[0]</code> când lucrezi de la 1. C++ nu te oprește, dar rezultatul e greșit.", en: "Going outside the array: <code>v[n + 1]</code> or <code>v[0]</code> when you index from 1. C++ won't stop you, but the result is wrong." },
    { ro: "La inserare muți elementele de la început spre final și le suprascrii. Mută de la <b>final</b> spre poziție.", en: "When inserting, shifting from the start overwrites elements. Shift from the <b>end</b> towards the position." },
    { ro: "Uiți <code>n--</code> după ștergere sau <code>n++</code> după inserare.", en: "Forgetting <code>n--</code> after deleting or <code>n++</code> after inserting." },
  ],
  m9: [
    { ro: "Inversezi i cu j: <code>a[j][i]</code> în loc de <code>a[i][j]</code>.", en: "Swapping i and j: <code>a[j][i]</code> instead of <code>a[i][j]</code>." },
    { ro: "Diagonala secundară: <code>i + j == n + 1</code> doar cu indici de la 1. De la 0 e <code>n - 1</code>.", en: "Secondary diagonal: <code>i + j == n + 1</code> only with indexes from 1. From 0 it is <code>n - 1</code>." },
  ],
  m10: [
    { ro: "Scrii cu <code>cout</code> în loc de <code>fout</code>: rezultatul apare pe ecran, iar date.out rămâne gol.", en: "Writing with <code>cout</code> instead of <code>fout</code>: the result shows on screen and date.out stays empty." },
    { ro: "Numele fișierului greșit (<code>date.txt</code>, <code>Date.in</code>). Trebuie exact cum cere problema.", en: "Wrong file name (<code>date.txt</code>, <code>Date.in</code>). It must be exactly what the problem says." },
  ],
  m11: [
    { ro: "Compari șiruri cu <code>==</code> sau le copiezi cu <code>=</code>. Folosește <code>strcmp</code> și <code>strcpy</code>.", en: "Comparing strings with <code>==</code> or copying with <code>=</code>. Use <code>strcmp</code> and <code>strcpy</code>." },
    { ro: "<code>cin &gt;&gt; s</code> citește doar un cuvânt. Pentru o linie întreagă: <code>cin.getline(s, 256)</code>.", en: "<code>cin &gt;&gt; s</code> reads one word only. For a whole line: <code>cin.getline(s, 256)</code>." },
    { ro: "Vector de char prea mic: „ana” are nevoie de 4 locuri (3 litere + <code>'\\0'</code>).", en: "Char array too small: “ana” needs 4 places (3 letters + <code>'\\0'</code>)." },
  ],
  m12: [
    { ro: "Uiți <code>&amp;</code> când funcția trebuie să schimbe variabila (de ex. la interschimbare).", en: "Forgetting <code>&amp;</code> when the function must change the variable (e.g. swapping)." },
    { ro: "Funcție care trebuie să returneze ceva, dar pe un drum nu ajunge la <code>return</code>.", en: "A function that must return something but doesn't reach <code>return</code> on some path." },
    { ro: "Apelezi funcția fără paranteze: <code>prim</code> în loc de <code>prim(x)</code>.", en: "Calling a function without brackets: <code>prim</code> instead of <code>prim(x)</code>." },
  ],
  m13: [
    { ro: "Lipsește condiția de oprire sau nu se ajunge la ea (de ex. <code>f(n + 1)</code> în loc de <code>f(n - 1)</code>).", en: "The stopping condition is missing or never reached (e.g. <code>f(n + 1)</code> instead of <code>f(n - 1)</code>)." },
    { ro: "Uiți <code>return</code> în fața autoapelului: <code>fact(n - 1) * n;</code> calculează, dar nu dă rezultatul mai departe.", en: "Forgetting <code>return</code> before the self-call: <code>fact(n - 1) * n;</code> computes but doesn't pass the result back." },
  ],
};

// Extra reading, three free sites. They teach modern C++ (std::string, std::vector);
// at the Romanian exam you write the school style shown in the lessons (char s[], v[1..n]).
const READ = {
  m0: [["learncpp", "Introduction to iostream: cout, cin and endl", "https://www.learncpp.com/cpp-tutorial/introduction-to-iostream-cout-cin-and-endl/"], ["learncpp", "Syntax and semantic errors", "https://www.learncpp.com/cpp-tutorial/syntax-and-semantic-errors/"], ["hackingcpp", "Hello World", "https://hackingcpp.com/cpp/hello_world.html"], ["studyplan.dev", "Setting up a C++ development environment", "https://www.studyplan.dev/intro-to-programming/cpp-ide"]],
  m1: [["learncpp", "Relational operators", "https://www.learncpp.com/cpp-tutorial/relational-operators-and-floating-point-comparisons/"], ["learncpp", "Logical operators", "https://www.learncpp.com/cpp-tutorial/logical-operators/"]],
  m2: [["learncpp", "Introduction to objects and variables", "https://www.learncpp.com/cpp-tutorial/introduction-to-objects-and-variables/"], ["learncpp", "Uninitialized variables", "https://www.learncpp.com/cpp-tutorial/uninitialized-variables-and-undefined-behavior/"], ["learncpp", "Arithmetic operators", "https://www.learncpp.com/cpp-tutorial/arithmetic-operators/"], ["hackingcpp", "Fundamental types", "https://hackingcpp.com/cpp/lang/fundamental_types.html"], ["studyplan.dev", "Creating variables", "https://www.studyplan.dev/intro-to-programming/creating-variables"], ["studyplan.dev", "Numbers", "https://www.studyplan.dev/intro-to-programming/numbers"]],
  m3: [["learncpp", "Introduction to if statements", "https://www.learncpp.com/cpp-tutorial/introduction-to-if-statements/"], ["learncpp", "Common if statement problems", "https://www.learncpp.com/cpp-tutorial/common-if-statement-problems/"], ["learncpp", "Switch statement basics", "https://www.learncpp.com/cpp-tutorial/switch-statement-basics/"], ["hackingcpp", "Control flow basics", "https://hackingcpp.com/cpp/lang/control_flow_basics.html"], ["studyplan.dev", "Conditional logic", "https://www.studyplan.dev/intro-to-programming/conditional-logic"], ["studyplan.dev", "Booleans", "https://www.studyplan.dev/intro-to-programming/booleans"]],
  m4: [["learncpp", "Loops and while statements", "https://www.learncpp.com/cpp-tutorial/introduction-to-loops-and-while-statements/"], ["learncpp", "Do while statements", "https://www.learncpp.com/cpp-tutorial/do-while-statements/"], ["learncpp", "For statements", "https://www.learncpp.com/cpp-tutorial/for-statements/"], ["learncpp", "Break and continue", "https://www.learncpp.com/cpp-tutorial/break-and-continue/"], ["studyplan.dev", "Loops", "https://www.studyplan.dev/intro-to-programming/loops"]],
  m5: [["learncpp", "Remainder (%)", "https://www.learncpp.com/cpp-tutorial/remainder-and-exponentiation/"], ["studyplan.dev", "The modulus operator", "https://www.studyplan.dev/intro-to-programming/modulus-operator"]],
  m6: [["studyplan.dev", "The modulus operator", "https://www.studyplan.dev/intro-to-programming/modulus-operator"]],
  m7: [["learncpp", "Common semantic errors", "https://www.learncpp.com/cpp-tutorial/common-semantic-errors-in-c/"]],
  m8: [["learncpp", "Introduction to C-style arrays", "https://www.learncpp.com/cpp-tutorial/introduction-to-c-style-arrays/"], ["learncpp", "Arrays and loops", "https://www.learncpp.com/cpp-tutorial/arrays-and-loops/"], ["hackingcpp", "C arrays", "https://hackingcpp.com/cpp/lang/c_arrays.html"]],
  m9: [["learncpp", "Multidimensional C-style arrays", "https://www.learncpp.com/cpp-tutorial/multidimensional-c-style-arrays/"]],
  m10: [["learncpp", "Basic file I/O", "https://www.learncpp.com/cpp-tutorial/basic-file-io/"], ["hackingcpp", "File input & output", "https://hackingcpp.com/cpp/std/file_streams.html"]],
  m11: [["learncpp", "C-style strings", "https://www.learncpp.com/cpp-tutorial/c-style-strings/"], ["hackingcpp", "String basics (std::string)", "https://hackingcpp.com/cpp/std/string_basics.html"]],
  m12: [["learncpp", "Introduction to functions", "https://www.learncpp.com/cpp-tutorial/introduction-to-functions/"], ["learncpp", "Function return values", "https://www.learncpp.com/cpp-tutorial/function-return-values-value-returning-functions/"], ["learncpp", "Global variables", "https://www.learncpp.com/cpp-tutorial/introduction-to-global-variables/"], ["learncpp", "Pass by reference", "https://www.learncpp.com/cpp-tutorial/pass-by-lvalue-reference/"], ["learncpp", "Introduction to structs", "https://www.learncpp.com/cpp-tutorial/introduction-to-structs-members-and-member-selection/"], ["hackingcpp", "Function basics", "https://hackingcpp.com/cpp/lang/function_basics.html"], ["hackingcpp", "References", "https://hackingcpp.com/cpp/lang/references.html"], ["studyplan.dev", "Function arguments and parameters", "https://www.studyplan.dev/intro-to-programming/arguments"], ["studyplan.dev", "Scope", "https://www.studyplan.dev/intro-to-programming/scope"], ["studyplan.dev", "Structs", "https://www.studyplan.dev/intro-to-programming/structs"]],
  m13: [["learncpp", "Recursion", "https://www.learncpp.com/cpp-tutorial/recursion/"]],
};
