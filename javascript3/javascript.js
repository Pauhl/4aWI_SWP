// JavaScript source code

//L�sung 1:

let a = 0;


for (i = 0; i <= 100; i++) {

    if (i % 2 == 0) {
        a += i;

    }
}

console.log("Das Ergebnis ist:"+a);


//L�sung 2:
let e = 0;


for (i = 0; i <= 100; i+=2) {

    if (i % 2 == 0) {
        e += i;

    }
}

console.log("Das Ergebnis ist:" + e);
