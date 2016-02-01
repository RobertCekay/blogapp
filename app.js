var express = require('express');
var path = require('path');
var http = require('http');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var app = express();
var jsx = require('node-jsx');
jsx.install();

app.set('port', (process.env.PORT || 'devleopment'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', routes);
app.get('/blogs/create', routes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


