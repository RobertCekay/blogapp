var React = require('react');
var DefaultLayout = require('../layout/master');
var mongoose = require('mongoose');
var BlogSchema = require('../../models/blogSchema.js');


var BlogForm = React.createClass({
    getInitialState: function() {
        return {
            title: '',
            content: ''
        };
    },
    changeTitle: function(ev) {
        this.setState({
            title: ev.target.value
        });
    },
    changeContent: function(ev) {
        this.setState({
            content: ev.target.value
        });
    },
    addBlog: function(ev) {


        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {


            var newBlog = new BlogSchema({
                Title: "hello",
                Content: "hello"
            });

            newBlog.save(function (err) {

                if (err) {
                    console.log("error fool");
                }
                console.log("New Blog");
            })// we're connected!

        });


        //mongoose.disconnect();

    },
    render: function() {
        return (
            <DefaultLayout title={this.props.name}>
                <div className="input-group col-md-4 col-md-offset-4">
                    <h1>Create a blog</h1>
                    <form onSubmit={this.addBlog}>
                        <div>
                            <label htmlFor='picure'>Picture</label>
                            <div><input type='file' id='picure' value={this.state.picure} /></div>
                        </div>
                        <div>
                            <input className="form-control" type='text' id='title' value={this.state.title} onChange={function(){}} placeholder='Title' />
                        </div>
                        <div>
                            <input className="form-control" type='text' id='content' value={this.state.content} onChange={this.changeContent} placeholder='Content'  />
                        </div>
                        <div>
                            <button onClick={this.addBlog(this)} className="btn btn-default">Add Blog</button>
                        </div>
                    </form>
                </div>
            </DefaultLayout>
        );
    }
});



module.exports = BlogForm;