var React = require('react');
var express = require('express');
var path = require('path');
var http = require('http');

var routes = require('./routes/index');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', routes);
app.get('/user/create', routes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});