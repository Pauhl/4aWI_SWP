function holen() {



   
 
    let zahl1 = (document.querySelector("#zahl1").value);
    let zahl2 = (document.querySelector("#zahl2").value);
   
    if (isNaN(zahl1) || isNaN(zahl2) || zahl1=="" || zahl2=="") {

        document.getElementById("ausgabe").innerHTML ="Bitte korrekte Zahl eingeben";
    }
    else if(zahl2==0) {
        document.getElementById("ausgabe").innerHTML ="Division durch 0 nicht möglich";
        
    }

    else {



        gerundet = Math.round(rechnen(zahl1, zahl2));
        zahl = rechnen(zahl1, zahl2);
        ausgabe(gerundet, zahl, zahl1, zahl2);

    }

} 
   

function rechnen(zahl1, zahl2) {


    erg = (((zahl1 * 1.43)/zahl2)-3.4);
   
    return erg;


}

function ausgabe(rundung, ergebnis, zahl1, zahl2) {

document.getElementById("ausgabe").innerHTML = "";
        
document.getElementById("ausgabe").innerHTML += "(("+zahl1 + "*1,43)/"+zahl2+")-3,4=";


document.getElementById("ausgabe").innerHTML += ergebnis;
document.getElementById("ausgabe").innerHTML += "<br> ≈";
document.getElementById("ausgabe").innerHTML += rundung;

document.getElementById("ausgabe").innerHTML += "<br><br>";
if (rundung==0) {

    document.getElementById("ausgabe").innerHTML += 0;
    document.getElementById("ausgabe").innerHTML += "<br><br>";
    document.getElementById("ausgabe").innerHTML += "Ergebnis ist null";

}

else if (rundung<0) {
    
for(i=0;i>=rundung;i--) {
    document.getElementById("ausgabe").innerHTML += i +"&nbsp; ";
    
}
document.getElementById("ausgabe").innerHTML += "<br><br>";
document.getElementById("ausgabe").innerHTML += "Ergebnis ist negativ";

}

else {
    for(i=0;i<=rundung;i++) {
        document.getElementById("ausgabe").innerHTML += i+"&nbsp; ";
        
    }
    document.getElementById("ausgabe").innerHTML += "<br><br>";
    document.getElementById("ausgabe").innerHTML += "Ergebnis ist positiv";
}



}
