var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('blogs', { title: "Holy Crap!"});
});

router.get('/User/create', function(req, res){
	res.render('user', {name: "Charlie", password: "fg" });
});

module.exports = router;