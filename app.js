// server
var redis = require('redis'),
	jsonify = require('redis-jsonify'),
	client = jsonify(redis.createClient()),
 	express = require("express"),
 	logfmt = require("logfmt"),
 	app = express();
var pg = require('pg');

pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  client.query('SELECT * FROM your_table', function(err, result) {
    done();
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