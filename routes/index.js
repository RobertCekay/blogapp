var express = require('express');
var ReactDOMServer = require('react-dom/Server');
var router = express.Router();
//var BlogCreate = require('../views/blogs/blogsCreate.jsx');
var BlogSchema = require('../models/blogSchema.js');

	router.get('/', function(req, res){
		res.render('blogs/blogs', {});
	});

	router.get('/blogs/create', function(req, res){
		res.render('blogs/blogsCreate', {});
	});

module.exports = router