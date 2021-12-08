function abfrage() {

  liga = document.querySelector("#liga").value;;



url1 = 'https://api.football-data.org/v2/competitions/'+liga+'/scorers'



//url1 = 'https://api.football-data.org/v2/competitions/'



  datenholen(url1);
}


function datenholen(url) {



fetch(url,

{method: "GET",
headers: {
  "x-auth-token": "1b09c3488b9c4bd5827930e1a049e5e7"
}})
  .then(response => response.json())
  .then(data => spielerausgeben(data));




}


function spielerausgeben(daten) {


  ausgabe="";
  console.log(daten);


  for (i = 0; i < daten.scorers.length; i++) {
    ausgabe+= daten.scorers[i].player.name+"         Tore:"+daten.scorers[i].numberOfGoals+"<br>";
  }
  document.getElementById('ausgabe').innerHTML = ausgabe;
}
