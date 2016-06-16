var mysql = require("mysql");
function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5) {
    router.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    router.get("/",function(req, res, next){
        res.json({"Message" : "Hello World !"});
    });
    router.get("/civs",function(req, res, next){
        var query = "SELECT * FROM ??";
        var table = ["civs"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "characters" : rows});
            }
        });
    });
    router.get("/civs/:name",function(req, res, next){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["civs","name", req.params.name];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "characters" : rows});
            }
        });
    });
}

module.exports = REST_ROUTER;