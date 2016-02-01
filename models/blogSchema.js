var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://admin:Admin123@ds051575.mongolab.com:51575/blogapp');

var BlogSchema = new Schema({
    title:  String,
    content: String,
    picture: String,
    comments: String,
});

var Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;