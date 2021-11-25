
let p1 = 0;
let p2 = 0;
let rundezahl = 1;
let endpunkte;
let over = false;

function spielen() {


    document.getElementById("status").innerHTML = "";
    
    endpunkte = parseInt(document.querySelector("#siegpunkte").value);


    if (endpunkte >= 1 && endpunkte <= 100) {
        document.getElementById("einstellungen").style.display = "none";
        runde();
        document.getElementById("spieler").style.display = "inline";
        document.getElementById("stand").style.display = "inline";
    }

    else {
        document.getElementById("status").innerHTML = "Bitte korrekte Zahl eingeben";
    }
}


function runde() {
   
    
    
    document.getElementById("runde").innerHTML = rundezahl + " Runde";
    document.getElementById("punkte").innerHTML = p1 + " : " + p2;
    document.getElementById("ende").innerHTML = "Gewinn bei " + endpunkte +" Punkten";
}



function antwort(e) {

    if (over) {

    }
    else {
        document.getElementById("spieler").style.display = "none";
        x = Math.floor(Math.random() * (4 - 1)) + 1;



        /*document.getElementById("test").innerHTML = e + ":"+x;*/

        if (e == x) {


            w = 0;
        }

        else if (e + 1 == x) {
            p2++;
            w = 2;
        }

        else if (x + 1 == e) {
            p1++;
            w = 1;
        }


        else if (x + 2 == e) {
            p2++;
            w = 2;
        }

        else {
            p1++;
            w = 1;
        }






        if (endpunkte <= p1) {
            document.getElementById("status").innerHTML = "Gewonnen";
            document.getElementById("status").style.color = "green";
            over = true;
            document.getElementById("nochmal").style.display = "inline";
        }


        else if (endpunkte <= p2) {
            document.getElementById("status").innerHTML = "Verloren";
            document.getElementById("status").style.color = "red";
            over = true;
            document.getElementById("nochmal").style.display = "inline";
        }


        else {
            rundezahl++;




        }
        runde();

        zwischen(e, 1, w);
        zwischen(x, 2, w);
    }
}





async function zwischen(b , n, w) {

    document.getElementById("zwischen").style.display = "inline";

    if (b == 1) {
        document.getElementById(n).innerHTML = "<img src='schere.png'>";
    }

    else if (b == 2) {
        document.getElementById(n).innerHTML = "<img src='stein.png'>";
    }


    else {
        document.getElementById(n).innerHTML = "<img src='papier.png'>";
    }


    if (w == n || w == 0) {
        document.getElementById(n).style.backgroundColor = "green";
    }

    else {
        document.getElementById(n).style.backgroundColor  = "red";
    }

   
    if (over) { }

    else {
        await Sleep(3000);
        document.getElementById("zwischen").style.display = "none";
        document.getElementById("spieler").style.display = "inline";
    }

}




function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}



function nochmal() {
    document.getElementById("nochmal").style.display = "none";
    document.getElementById("stand").style.display = "none";

    p1 = 0;
    p2 = 0;
    rundezahl = 1;
    over = false;

    document.getElementById("einstellungen").style.display = "inline";
    document.getElementById("spieler").style.display = "none";
    document.getElementById("zwischen").style.display = "none";
}