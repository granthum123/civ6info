var express = require('express')
var app = express();

app.use(express.static(__dirname + "/public"));
//Static Var list declaration until database is up
var civlist = [
		{name: "India", leader: "Gandhi", ability: "Fat Cities", unit1: "Elephant", unit2: null},
		{name: "Huns", ability: "Cheap Roads", unit1: "Battering Ram", unit2: "Cavalry Archer"},
		{name: "Egypt", leader: "Cleopatra", ability: "Something involving surrounding Militants", unit1: "?", unit2: "?"},
		{name: "America", leader: "Teddy Roosevelt", ability: "Big Stick", unit1: "?", unit2: "?"}
	]

app.get('/api/civs', function(req, res) {
	console.log("I recieved a GET request");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.header("Access-Control-Allow-Origin", "*");
	res.json(civlist)
});

app.get('/api/civs/:name', function(req, res) {
	console.log("I recieved a GET request");
	for(i = 0; i < civlist.length; i++){
		if(civlist[i].name === name)
			var civ = civlist[i];
	}
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.header("Access-Control-Allow-Origin", "*");
	res.json(civ)
});

app.listen(8081);
console.log("Server running on port 8081");