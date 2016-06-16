var express = require('express')
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
var rest = require("./REST.js");
var app = express();

/*app.use(express.static(__dirname + "/public"));
//Static Var list declaration until database is up

app.get('/api/civs', function(req, res) {
	console.log("I recieved a GET request");
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.header("Access-Control-Allow-Origin", "*");
	res.json(getCivs())
});

app.get('/api/civs/:name', function(req, res) {
	var civlist = getCivs();
	for(var i = 0; i < civlist.length--; i++){
		if(civlist[i].name === req.params.name)
			var civ = civlist[i];
	}
	res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.header("Access-Control-Allow-Origin", "*");
	res.json(civ)
});

app.listen(8081);
console.log("Server running on port 8081");

function getCivs(){
	var civlist = [
		{name: "India", leader: "Gandhi", ability: "Fat Cities", unit1: "Elephant", unit2: null},
		{name: "Huns", ability: "Cheap Roads", unit1: "Battering Ram", unit2: "Cavalry Archer"},
		{name: "Egypt", leader: "Cleopatra", ability: "Something involving surrounding Militants", unit1: "?", unit2: "?"},
		{name: "America", leader: "Teddy Roosevelt", ability: "Big Stick", unit1: "?", unit2: "?"}
	]
	return civlist;
}*/

function REST(){
    var self = this;
    self.connectMysql();
};

REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : '127.0.0.1',
        user     : 'granthum',
        password : '',
        database : 'civ6info',
        debug    :  false
    });
    pool.getConnection(function(err,connection){
        if(err) {
          self.stop(err);
        } else {
          self.configureExpress(connection);
        }
    });
}

REST.prototype.configureExpress = function(connection) {
      var self = this;
      app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());
      var router = express.Router();
      app.use('/api', router);
      var rest_router = new rest(router,connection,md5);
      self.startServer();
}

REST.prototype.startServer = function() {
      app.listen(8081,function(){
          console.log("All right ! I am alive at Port 8081.");
      });
}

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
}

new REST();