


let fertig = 0;

let i = 0;

const text = [];
const farbe = [];

function addtask() {



    i++;

    text[i] = document.querySelector("#aufgabetext").value;
    farbe[i] = 0;
   
    document.getElementById('ausgabe').innerHTML += "<div id='" + i + "'><input type='text' value='" + text[i] + "'readonly> <button onclick='erledigt(" + i +")' class='minus' type='button'>Erledigt</button><button id='"+i+"s' onclick='stern("+i+")' type='button'>&#9733;</button><br></div>";
    document.getElementById('zutun').innerHTML = i - fertig + " Aufgaben unerledigt";
}


function erledigt(a) {




    document.getElementById(a).innerHTML = "";
    fertig++;
    document.getElementById('fertig').innerHTML = fertig + " Aufgaben erledigt";
    document.getElementById('zutun').innerHTML = i - fertig + " Aufgaben unerledigt";
   

    f = a + "m";

   
    document.getElementById('text').innerHTML += "<p id='"+f+"'>" + text[a] + "</p><br>";



    if (farbe[a] == 1) {


        
        document.getElementById(f).style.backgroundColor = "yellow";
    }
    
}



function aufklappen(div) {
    with (document.getElementById(div).style) {
        if (visibility == "visible") {
            visibility = "hidden";
            document.getElementById('erledigt').innerHTML = "Erledigte Aufgaben anzeigen";
        }
        else {
            visibility = "visible";
            document.getElementById('erledigt').innerHTML = "Erledigte Aufgaben ausblenden";
        }
    }
}



function stern(a) {

    e = a + "s";

    if (farbe[a] == 0) {


        farbe[a] = 1;
        document.getElementById(e).style.backgroundColor = "yellow";
    }

    else {
        farbe[a] = 0;
        document.getElementById(e).style.backgroundColor = "";
    }


}


    
  



