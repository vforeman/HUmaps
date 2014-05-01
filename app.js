// server
var express = require("express");
var logfmt = require("logfmt"),
 	app = express(),
 	http = require('http');
var colors = require('colors');
var sq3 = require('sqlite3').verbose();
var db = new sq3.Database('db/hufeatures.sqlite',function(err){
	if(err == null){
		console.log('opened hufeatures.sqlite'.green);
	}else{
		console.log(err);
	}
});

// configuration =====================
app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/public'));  // set static files location /public/img for users

//route
app.get('/', function(req, res){
	res.sendfile('public/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen 
var port = Number(process.env.PORT || 5000);
http.createServer(app).listen(port, function(){
	console.log("Listening on " + port);
});



