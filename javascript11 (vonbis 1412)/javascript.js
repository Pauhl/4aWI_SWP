





function rechnen() {



   
 
    let zahl1 = parseInt(document.querySelector("#zahl1").value);
    let zahl2 = parseInt(document.querySelector("#zahl2").value);
   
    if (isNaN(zahl1) || isNaN(zahl2)) {

        
    }

    else {

    }
    ausgabe = "<ul>";
        for (a = zahl1; a <= zahl2; a++) {
            ausgabe += "<li>"+a+"</li>";
        }

        ausgabe += "</ul>"; 
        document.getElementById('ausgabe').innerHTML = ausgabe;
    }
