// server
var express = require("express"),
 	logfmt = require("logfmt"),
 	app = express();
var pg = require('pg');
var connectstr="postgres://rdpftghcchyuko:Idi_xg8XFtGbWHT4zMjzkAf4gV@ec2-54-83-201-54.compute-1.amazonaws.com:5432/dc22kl241vg2q1";

pg.connect(process.env.DATABASE_URL, function(err, client) {
  client.query('SELECT * FROM your_table', function(err, result) {
    
    if(err) return console.error(err);
    console.log(result.rows);
  });
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
app.listen(port, function(){
	console.log("Listening on " + port);
});