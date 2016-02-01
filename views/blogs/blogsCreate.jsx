var React = require('react');
var DefaultLayout = require('../layout/master');
var mongoose = require('mongoose');
var BlogSchema = require('../../models/blogSchema.js');
var db = mongoose.connection;
var ReactDomServer = require('react-dom/server');


var BlogForm = React.createClass({
    getInitialState: function() {
        return {
            title: '',
            content: ''
        };
    },
    changeTitle: function(event) {

         var text = event.target.value;

        alert(text)

        this.setState({
            title: event.target.value
        });
    },
    changeContent: function(event) {

        this.setState({
            content: event.target.value
         });
    },
    addBlog: function(ev) {

        console.log("hit hit");


        /*var newBlog = new BlogSchema({
            picture: this.state.picture,
            title: this.state.title,
            content: this.state.content,
            comments: this.state.comments,
        });

        console.log(newBlog);

        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {

            newBlog.save(function (err) {

                if (err) {
                    console.log("error fool");
                }
                console.log("New Blog");
            })// we're connected!

        });*/
    },
    render: function() {
        return (
                    <form onSubmit={this.addBlog(this)}>
                        <div>
                            <label htmlFor='picure'>Picture</label>
                            <div><input type='file' id='picture' value={this.state.picture} /></div>
                        </div>
                        <div>
                            <input className="form-control" type='text' id='content' value={this.state.title} onChange={(evt) => this.changeTitle(evt)} placeholder='Title' />
                        </div>
                        <div>
                            <input className="form-control" type='text' id='content' value={this.state.content} onChange={(evt) => this.changeContent(evt)}placeholder='Content' />
                        </div>
                        <div>
                            <button className="btn btn-default">Add Blog</button>
                        </div>
                    </form>

        );
    }
});

var BlogCreate = React.createClass({
    render: function (){
        return(
        <DefaultLayout>
            <div className="col-md-4 col-md-offset-4">
                <BlogForm />
            </div>
        </DefaultLayout>
        );
    }
});


module.exports = BlogCreate;