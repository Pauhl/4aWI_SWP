let ergebnis;
let art;






function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


function rechnen() {


    const rbs = document.querySelectorAll('input[name="adfs"]');
   
    for (const rb of rbs) {
        if (rb.checked) {
            art = rb.value;
            break;
        }
    }

    let zahl1 = parseInt(document.querySelector("#zahl1").value);
    let zahl2 = parseInt(document.querySelector("#zahl2").value);
   
    if (isNaN(zahl1) || isNaN(zahl2)) {

        ergebnis = "Fehler: Keine Zahl";
        document.getElementById('ausgabe').innerHTML = ergebnis;
    }
    else {


        if (art == 1) {

            ergebnis = zahl1 * zahl2;
        }


        else if (art == 2) {
            if (zahl2 == 0) {
                ergebnis = "Division durch null ist nicht möglich";
            }

            else {
                ergebnis = zahl1 / zahl2;
            }
        }


        else if (art == 3) {
            ergebnis = zahl1 - zahl2;
        }

        else if (art == 4) {
            ergebnis = parseInt(zahl1) + parseInt(zahl2);
        }

        
    }

    ausgabe(ergebnis);
}





async function ausgabe(ausgabe) {

    for (var i = 10; i <= 30; i++) {
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