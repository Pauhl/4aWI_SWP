let ergebnis;






function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


function rechnen() {

    
    let zahl1 = parseInt(document.querySelector("#zahl1").value);
    let zahl2 = parseInt(document.querySelector("#zahl2").value);
   
    if (isNaN(zahl1) || isNaN(zahl2)) {

        ergebnis = "Fehler: Keine Zahl";
        document.getElementById('ausgabe').innerHTML = ergebnis;
    }
    else {


       

    ausgabe(zufall(zahl1, zahl2));
}
}




async function ausgabe(ausgabe) {

    for (var i = 10; i <= 15; i++) {
        document.body.style.cursor = 'wait';
        await Sleep(300);

        if (i % 3 == 0) {
            document.getElementById('ausgabe').innerHTML = "loading .";
        }
        else if (i % 3 == 1) {
            document.getElementById('ausgabe').innerHTML = "loading ..";
        }
        else {
            document.getElementById('ausgabe').innerHTML = "loading ...";
        }

    }
    document.getElementById('ausgabe').innerHTML = ausgabe;
    document.body.style.cursor = 'auto';
}



function zufall(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }