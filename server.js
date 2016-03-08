var express = require('express'),
    path    = require('path'),
    Promise = require('bluebird');


var app = express(),
    server;

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, '/public')));
app.use('/bower_components',  express.static( path.join(__dirname, '/bower_components')));

app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || '0.0.0.0');

app.get('/', function (req, res) {
   res.render('index');
});

server = app.listen(app.get('port'), app.get('host'), function () {
 console.log("Express server listening on port " + app.get('port'));
});