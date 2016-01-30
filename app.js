var React = require('react');
var express = require('express');
var path = require('path');

var routes = require('./routes/index');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-React-views').createEngine());

app.get('/', routes);
app.get('/user/create', routes);

app.listen(8000, function () {
  console.log('Example app listening on port 3000!');
});