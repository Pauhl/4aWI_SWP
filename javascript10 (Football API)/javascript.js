anzeige = 1;
anzeig = 0;

function anzeigen() {
  if (anzeige % 2 == 1) {
    document.getElementById('landausgabe').style.visibility = 'visible';
    //document.getElementById('hauptland').style.visibility = 'hidden'; 
    document.getElementById('einausblenden').innerHTML = "Weniger Anzeigen";
  }
  else {
    document.getElementById('landausgabe').style.visibility = 'hidden';
    //document.getElementById('hauptland').style.visibility = 'visible'; 

    document.getElementById('einausblenden').innerHTML = "Alle anzeigen";
  }
  anzeige++;
}

function abfrage() {

  liga = document.querySelector("#liga").value;



  url1 = 'https://api.football-data.org/v2/competitions/' + liga + '/scorers'



  //url1 = 'https://api.football-data.org/v2/competitions/'



  datenholen(url1, 1);

}


function datenholen(url, art) {

  if (art == 1) {
    testfunktion = spielerausgeben;
  }
  if (art == 2) {
    testfunktion = vereinausgeben;
  }

  if (art == 3) {
    testfunktion = spielerdatenausgeben;
  }

  if (art == 4) {
    testfunktion = vereintabelle;
  }


  if (art == 5) {
    testfunktion = laenderausgaben;

  }




  //console.log(url);

  fetch(url,

    {
      method: "GET",
      headers: {
        "x-auth-token": "1b09c3488b9c4bd5827930e1a049e5e7"
      }
    })




    .then(response => response.json())
    .then(data => testfunktion(data));



}




function verein() {

  const queryString = window.location.search;
  console.log(queryString);
  v = queryString.replace("?v=", "")



  url2 = 'https://api.football-data.org/v2/teams/' + v;

  datenholen(url2, 2);

}


function vereinausgeben(vereinsdaten) {
  var ausgabe = "";
  ausgabe = "<img height='200px' src='" + vereinsdaten.crestUrl + "' />";


  document.getElementById('ausgabe').innerHTML = ausgabe;


  document.getElementById('vereinsname').innerHTML = vereinsdaten.name;


}




function spielerausgeben(daten) {


  var ausgabe = "";
  console.log(daten);



  vonbis = "Saison von " + daten.season.startDate + " bis " + daten.season.endDate;


  console.log("test");

  for (i = 0; i < daten.scorers.length; i++) {
    ausgabe += "<div class='zeile'><b class='spielername'><a href='spieler.html?s=" + daten.scorers[i].player.id + "'>" + daten.scorers[i].player.name + "</a></b>";
    ausgabe += "<b class='tore'>Tore:" + daten.scorers[i].numberOfGoals + "</b>";
    ausgabe += "<b class='verein'><a href='verein.html?v=" + daten.scorers[i].team.id + "'>" + daten.scorers[i].team.name + "</a></b><br></div>";
  }


  document.getElementById('ausgabe').innerHTML = ausgabe;
  document.getElementById('vonbis').innerHTML = vonbis;
}



function spieler() {

  const queryString = window.location.search;
  console.log(queryString);
  s = queryString.replace("?s=", "")



  url3 = 'https://api.football-data.org//v2/players/' + s;

  datenholen(url3, 3);

}


function spielerdatenausgeben(spielerdaten) {
  var ausgabe = "";


  console.log(spielerdaten);

  ausgabe = spielerdaten.name;




  document.getElementById('spielername').innerHTML = ausgabe;



  ausgabe = "";
  ausgabe += "<p>Nationalität: " + spielerdaten.nationality + "</p>";
  ausgabe += "<p>Position: " + spielerdaten.position + "</p>";
  document.getElementById('ausgabe').innerHTML = ausgabe;


}



function laenderauflisten() {


  console.log("laenderdaten");

  url5 = 'https://api.football-data.org//v2/areas';

  datenholen(url5, 5);




}


function laenderausgaben(laenderdaten) {
  //land = "<div class='landzeile'>";

  land = "";

  console.log(laenderdaten);
  for (i = 0; i < laenderdaten.areas.length; i++) {



    land += "<div class='abcd'><input type='checkbox' name='a' value='" + laenderdaten.areas[i].id + "'><b>" + laenderdaten.areas[i].name + "</b></div>";
    if ((i + 1) % 5 == 0) {
      //land += "</div><div class='landzeile'>";
    }
  }
  document.getElementById('landausgabe').innerHTML = land;

}



function vereinnachland(land) {


  tabelleausgabe = "";



  const rbs = document.querySelectorAll('input[name="a"]');

  for (const rb of rbs) {
    if (rb.checked) {
      console.log("lol");
      url4 = 'https://api.football-data.org//v2/teams?areas=' + rb.value;

      datenholen(url4, 4);

    }
  }

  document.getElementById('auswahl').style.visibility = 'hidden';
  document.getElementById('landausgabe').style.visibility = 'hidden';



}


function vereintabelle(vereinsdaten) {


  console.log(vereinsdaten);

  for (i = 0; i < vereinsdaten.teams.length; i++) {



    tabelleausgabe += "<div class='abc'><b><a href='verein.html?v=" + vereinsdaten.teams[i].id + "'>" + vereinsdaten.teams[i].name + "</a></b></div><br>";


  }
  document.getElementById('vereineauflistung').innerHTML = tabelleausgabe;


}


function wechsel() {

  if (anzeig % 2 == 1) {
    document.getElementById('topscorer').style.visibility = 'visible';
    document.getElementById('vereinsuche').style.visibility = 'hidden'; 
    anzeigen();
    document.getElementById('knopf').innerHTML = "Vereine suchen";
    document.getElementById('vereinsuche').style.gridRow = 3;
    document.getElementById('topscorer').style.gridRow = 2;
    document.getElementById('landausgabe').style.visibility = 'hidden';
  }
  else {
    document.getElementById('topscorer').style.visibility = 'hidden';
    document.getElementById('landausgabe').style.visibility = 'hidden';
    document.getElementById('vereinsuche').style.gridRow = 2;
    document.getElementById('topscorer').style.gridRow = 3;
    document.getElementById('vereinsuche').style.visibility = 'visible'; 

    document.getElementById('knopf').innerHTML = "Topschützen anzeigen";
  }
  anzeig++;

}



