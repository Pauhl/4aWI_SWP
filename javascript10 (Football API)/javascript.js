function abfrage(liga) {


url = 'https://api.football-data.org/v2/competitions/'+liga+'/scorers'

fetch(url,

{method: "GET",
headers: {
  "x-auth-token": "1b09c3488b9c4bd5827930e1a049e5e7"
}})
  .then(response => response.json())
  .then(data => console.log(data));

}

