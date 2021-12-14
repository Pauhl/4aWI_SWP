function abfrage() {

  liga = document.querySelector("#liga").value;;



url1 = 'https://api.football-data.org/v2/competitions/'+liga+'/scorers'



//url1 = 'https://api.football-data.org/v2/competitions/'



  datenholen(url1, 1);
  
}


function datenholen(url, art) {

  if (art==1) {
      testfunktion = spielerausgeben;
  }
  if (art==2) {
    testfunktion = vereinausgeben;
  }

  if (art==3) {
    testfunktion = spielerdatenausgeben;
  }
      
  



  console.log(url);

fetch(url,

{method: "GET",
headers: {
  "x-auth-token": "1b09c3488b9c4bd5827930e1a049e5e7"
}})


  



    .then(response => response.json())
    .then(data => testfunktion(data));
   


}





function verein() {

  const queryString = window.location.search;
  console.log(queryString);
  v = queryString.replace("?v=", "")



  url2 = 'https://api.football-data.org/v2/teams/'+v;

  datenholen(url2, 2);
  
}


function vereinausgeben(vereinsdaten){
  var ausgabe="";
  ausgabe = "<img height='200px' src='"+vereinsdaten.crestUrl+"' />";

  
document.getElementById('ausgabe').innerHTML = ausgabe;
  

}






function spielerausgeben(daten) {


  var ausgabe="";
  console.log(daten);



vonbis="Saison von "+ daten.season.startDate+" bis "+daten.season.endDate;


console.log("test");

  for (i = 0; i < daten.scorers.length; i++) {
    ausgabe+= "<div class='zeile'><b class='spielername'><a href='spieler.html?s="+ daten.scorers[i].player.id+"'>"+daten.scorers[i].player.name+"</a></b>";
    ausgabe += "<b class='tore'>Tore:"+daten.scorers[i].numberOfGoals+"</b>";
    ausgabe += "<b class='verein'><a href='verein.html?v="+ daten.scorers[i].team.id +"'>"+daten.scorers[i].team.name+"</a></b><br></div>";
  }

  
  document.getElementById('ausgabe').innerHTML = ausgabe;
  document.getElementById('vonbis').innerHTML = vonbis;
}



function spieler() {

  const queryString = window.location.search;
  console.log(queryString);
  s = queryString.replace("?s=", "")



  url3 = 'https://api.football-data.org//v2/players/'+s;

  datenholen(url3, 3);
  
}


function spielerdatenausgeben(spielerdaten){
  var ausgabe="";
  

  console.log(spielerdaten);
  
  ausgabe = spielerdaten.name;


  


document.getElementById('spielername').innerHTML = ausgabe;



ausgabe = "";
ausgabe += "<p>Nationalität: "+spielerdaten.nationality+"</p>";
ausgabe += "<p>Position: "+spielerdaten.position+"</p>";
document.getElementById('ausgabe').innerHTML = ausgabe;
  

}
