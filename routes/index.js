var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('blogs/blogs', {});
});

router.get('/blogs/create', function(req, res){
	res.render('blogs/blogsCreate', {});
});

module.exports = router;