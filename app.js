let a = 5;

//  exp1
let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
// 4+5=9 → truthy → returns "abc"
// "abc" || "falsetest" → "abc" (first truthy)
// a-- returns 5 → expression becomes "abc" * 5 = NaN
// false && (...) stops immediately → false → false * "end" = NaN
// NaN || NaN → NaN
// Final: NaN


//  exp2

let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
// "foo" truthy → evaluates right → 5+(++a=6)=11
// 10*11 = 110
// 110 && "falsetest" → "falsetest"
// "falsetest" || 0 → "falsetest"
// Final: "falsetest"


//  exp3

let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// a-- returns 5 → 5*4=20 → 3+20=23
// --a makes a=3 → "3value" * 3 = NaN
// 23 && NaN → NaN → NaN + "result" = "NaNresult"
// Final: "NaNresult"


//  exp4

let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
// ++a=6 → 6+1=7 → "hello"*7=NaN
// 3*"abc"=NaN → 2+NaN = NaN → NaN + "xyz" = "NaNxyz"
// "NaNxyz" && 0 → 0 (because 0 is falsy)
// NaN || 0 → 0
// Final: 0


// exp5

let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// true || anything → true (right side ignored)
// Final: true


//  exp6

let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
// ++a=6 → "6abc" truthy → use right side
// 8+3 = 11 → truthy → returned before others
// Final: 11


//  exp7

let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// "foo5" * (...) = NaN
// 2*3=6 ; true+2=3 → 6+3 = 9
// 9 is truthy → returned
// Final: 9


//  exp8

let exp8 = (0 + 1) && (true + 0) || ("falsetest") * 4 && 3 + 2 || "value";
// 1 && 1 → 1
// 1 || ... stops → returns 1
// Final: 1


//  exp9

let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// 3*"abc"=NaN → NaN+2 = NaN → falsy
// (++a=6) → "6test" truthy → "3result"
// Final: "3result"


//  exp10

let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// ++a=6 → 6&&"start" → "start"
// "start" || ... returns "start"
// Final: "start"







//  exp11
let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// false && "hello" → false
// a++ = 5 → truthy → then a becomes 6
// 5 * 4 = 20
// false + 20 → "false20"
// "false20" || (5*"abc"=NaN && 0=NaN) → "false20"
// Final: "false20"


//  exp12

let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// "hello"*1 = NaN → NaN + 2 = NaN
// (false+1=1) → 1*3=3 → truthy → "result"
// Final: "result"


//  exp13

let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// a++=5 → truthy → 5*5=25 ; 25+2=27
// 27 && "falsetest" → "falsetest"
// Final: "falsetest"


// exp14

let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// "falseabc"*2 = NaN
// --a=4 ; 4+1=5 ; 5*"start"=NaN ; NaN+3= "NaN3" (string)
// "NaN3" && 4 → 4
// Final: 4


//  exp15

let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// "0foo"*3 = NaN → NaN + "result" = "NaNresult"
// "NaNresult" is truthy → returned
// Final: "NaNresult"


//  exp16

let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// 2*"end" = NaN → falsy
// false && true = false
// --a=4 ; 4+2=6 ; 6*5=30 → "start30"
// "start30" && null → null
// Final: null


//  exp17

let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// "test5" → string → 2*"test5" = NaN ; 3 + NaN = NaN
// NaN && ... → NaN
// 0 + "value" → "value" ; "value" && 4 → 4
// Final: 4


//  exp18

let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// 2*"end" = NaN ; false||NaN = NaN
// "start" && NaN = NaN
// ++a=6 ; 6+1=7 ; 7*3=21 → "21result"
// "21result" && 0 = 0
// Final: 0


//  exp19

let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// 5+1=6 → truthy → "foo"
// "foo" || ... stops
// Final: "foo"


//  exp20

let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
// 6 + "hello" → "6hello" (truthy)
// false + ++a = 6 → 6*"result" = NaN
// NaN || "end5" → "end5"
// Final: "end5"







//  exp21
let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// ++a = 6 → true+6 = 7 → 5*7 = 35
// 35 && "testfalse" → "testfalse"
// Final: "testfalse"


// exp22

let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// "foo4" truthy
// ++a=6 → 6+1=7 → 7*"start" = NaN → falsy
// 6*(1)=6 → 5+6=11 → 11 && "test" = "test"
// Final: "test"


//  exp23

let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// false && 2 = false
// a++=5 → 5+1=6 → 6*"end" = NaN → NaN && "start" = NaN
// 4*5 = 20 → truthy → "result"
// Final: "result"


// exp24

let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// 2*"test" = NaN → 3 + NaN = NaN (falsy)
// (false+5)=5 → 5*"hello" = NaN → NaN && ... = NaN
// NaN || "world1" → "world1"
// Final: "world1"


//  exp25

let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
// false||a-- → 5 ; 7*5 = 35 → truthy → 35 && 5 = 5
// Final: 5


//  exp26
let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
// "hello" truthy → evaluate right
// 3*2=6 ; a++=5 → +1=6 ; 6+6 = 12
// Final: 12


//  exp27

let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// 3*"test" = NaN ; NaN + 3 = NaN → falsy
// false || "value" = "value"
// Final: "value"


//  exp28

let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// 1*"hello" = NaN (falsy)
// a--=5 → truthy → 5*"result" = NaN → 3+NaN = NaN
// NaN || "world" → "world"
// Final: "world"


//  exp29

let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// 2*(true)=2 → "start2"
// "value"*5 = NaN → NaN + "result" = "NaNresult"
// "start2" && "NaNresult" → "NaNresult"
// Final: "NaNresult"


//  exp30

let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// 4*"test" = NaN → falsy
// 1*5=5 → truthy → "falsevalue" + "end" = "falsevalueend"
// Final: "falsevalueend"







//  exp31
let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// "3end" is truthy → stops here
// Final: "3end"


//  exp32

let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// 3 * 1 = 3 → truthy → stops
// Final: 3


// exp33

let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// 2+3 = 5 → truthy
// "end5" is truthy → returned
// a becomes 6 after a++
// Final: "end5"


// exp34

let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// false+5 = 5 ; 4*5 = 20 → "hello20" truthy → stops
// Final: "hello20"


//  exp35

let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// a-- = 5 → truthy → 5*4 = 20 → 20+5=25
// 25 && "falseend" → "falseend"
// Final: "falseend"


//  exp36

let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// "1value" truthy → evaluate right
// ++a=6 → 6+2 = 8 → returned
// Final: 8


//  exp37

let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// "hello" truthy → 2 + "test" = "2test"
// Final: "2test"


//  exp38

let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// a-- = 5 → 5*5 = 25
// 6 * "result" = NaN → 25 && NaN = NaN
// NaN || "2end" = "2end"
// Final: "2end"


//  exp39

let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// false+1 = 1 → 1*2 = 2 → truthy → stops
// Final: 2


//  exp40

let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// "test"*5 = NaN → falsy
// a-- = 5 → truthy → "result"*4 = NaN
// 6 + NaN = NaN
// Final: NaN










// exp41
let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// 5*"test" = NaN → NaN + 5 = "NaN5" (string truthy)
// "start" && "NaN5" → "NaN5"
// Final: "NaN5"


// exp42

let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// 2*"end" = NaN → 1 + NaN = NaN (falsy)
// false+3 = 3 → 3 && ("result"*4 = NaN → NaN + 5 = "NaN5")
// Final: "NaN5"


//  exp43

let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// false && anything = false
// 4*(5)=20 → 20 && "start5" → "start5"
// Final: "start5"


//  exp44

let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// true+5 = 6 → 2*6 = 12 → 3+12=15 (truthy)
// 15 && "value1" → "value1"
// Final: "value1"


//  exp45

let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// false||1 = 1 → "1test" truthy
// 3*a-- = 15 → a becomes 4 → 5+15 = 20
// Final: 20


//  exp46

let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// 2*5+4 = 14 → truthy → "test"
// Final: "test"


//exp47

let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
// "0result" truthy
// (3+1)*2 = 8 → returned
// Final: 8


//  exp48

let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// 1 * "test" = NaN → NaN && 4 = NaN
// true+2 = 3 → 3 * "hello" = NaN → NaN + 5 = "NaN5"
// Final: "NaN5"


// exp49

let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// "6result" truthy
// a--+1 = 6 → 4*6 = 24 → returned
// Final: 24


//  exp50

let exp50 = 32 && true - ++a && " " || "true";
// ++a = 6
// true - 6 = -5 → truthy
// 32 && -5 && " " → " "
// Final: " "











// exp51
let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// a-- = 5 → a becomes 4
// (5+2)=7 ; (5+1)=6 → 7*6 = 42 → truthy → stops
// Final: 42


// exp52

let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// ++a = 6 → 6 && 3 = 3
// 3 * "test" = NaN (falsy)
// "start" * (5 + "result") = NaN → 4 + NaN = NaN
// Final: NaN


// exp53

let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// ++a = 6 → 6+1=7 → "value"*7 = NaN → 3 + NaN = NaN
// a-- = 6 → truthy → "start" ; a becomes 5
// "start" + "end" = "startend"
// Final: "startend"


// exp54

let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// a-- = 5 → +2 = 7 → 7*"result" = NaN (falsy)
// false && 5 = false → false * "test" = 0 → 0 + 4 = 4
// Final: 4


//  exp55

let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// a--=5 → "5test" → 5*"5test" = NaN → "startNaN" truthy
// Final: "startNaN"


//  exp56

let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// a--=5 → +1=6 → 4*6=24 → 24+"test" = "24test" truthy
// Final: "24test"


// exp57

let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
// 3*"test" = NaN → NaN+1 = NaN (falsy)
// ++a = 6 ; 6 && a-- = 6 (then a=5 again) → 6 * "result" = NaN
// NaN || "value" = "value"
// Final: "value"


// exp58

let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
// a--=5 → "5start" ; "5start" * "result" = NaN
// false+2 = 2 → 2 + "end" = "2end" → "2end" + 3 = "2end3"
// Final: "2end3"


// exp59

let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
// a--=5 → +3=8 → 5*8=40 ; 40*"test" = NaN → falsy
// false && "start" = false → false + 2 = 2
// Final: 2


//  exp60

let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// a--=5 → "5value" ; "5value" * "test" = NaN → NaN + 4 = NaN
// (false+2)=2 → 2*"end" = NaN
// Final: NaN









//exp61

let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// ++a = 6 → "6result" → 3 + "6result" = "36result" (truthy)
// Final: "36result"


//  exp62

let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
// a-- = 5 → "5test" → "5test"*3 = NaN → "startNaN" truthy
// Final: "startNaN"


// exp63

let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// ++a = 6 → 6+2 = 8 → 8*"test" = NaN (falsy)
// a-- = 6 → +3 = 9 → 9*"result"=NaN → "valueNaN"
// Final: "valueNaN"


// exp64

let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
// 5*"end" = NaN
// a--=5 →+1=6 → 6*"test" = NaN
// NaN + NaN = NaN (falsy)
// "start" + false = "startfalse"
// Final: "startfalse"


// exp65

let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
// a--=5 → "5test" → 3*"5test" = NaN → "valueNaN" truthy
// Final: "valueNaN"


// exp66

let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
// ++a=6 → "6test"*2 = NaN (falsy)
// a--=6 → +1=7 → 7*"start"=NaN → NaN + "result" = "NaNresult"
// Final: "NaNresult"


// exp67

let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
// a--=5 → +3=8 → 8*"end"=NaN → "startNaN" truthy
// Final: "startNaN"


// exp68

let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
// a--=5 →+1=6 → 2*6=12 → 12+"result" = "12result" (truthy)
// Final: "12result"


// exp69

let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// a-- = 5 → "5test"*5 = NaN → 4 + NaN = NaN (falsy)
// 2*"start" = NaN
// Final: NaN


// exp70

let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// a--=5 → +2=7 → 7*"result" = NaN (falsy)
// false && "end" = false → false + 3 = 3
// Final: 3



// exp71
let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// a-- = 5 → +3 = 8 → 2*8 = 16
// "test" + 16 = "test16" (truthy)
// Final: "test16"


// exp72

let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// a-- = 5 → "5value" → 3*"5value" = NaN (falsy)
// (false+2)=2 → 2*"test" = NaN
// Final: NaN


// exp73

let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// a--=5 → "5test"*4 = NaN
// false+1 = 1 → 1*"result" = NaN → NaN + "start" = "NaNstart"
// Final: "NaNstart"


// exp74

let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// ++a = 6 → 6+5 = 11 → 11*"end" = NaN
// a-- = 6 → +2 = 8 → 8*"result" = NaN → NaN + "start" = "NaNstart"
// Final: "NaNstart"


// exp75

let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
// 3*"test" = NaN
// a-- = 5 → "5start" → NaN + "5start" = "NaN5start" (truthy)
// Final: "NaN5start"
