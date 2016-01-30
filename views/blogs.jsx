var React = require('react');
var DefaultLayout = require('./layout/master');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var BlogForm = React.createClass({
  propTypes: {
    onBlog: React.PropTypes.func.isRequired
  },
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
    ev.preventDefault();

    this.setState({
      title: this.state.title,
      content: this.state.content
    });

    this.props.onBlog({
      title: this.state.title,
      content: this.state.content
    });
    
  },
  render: function() {
    return (
    <div className="input-group">	
      <form onSubmit={this.addBlog}>
        <div>
          <label htmlFor='title'>Title</label>
          <div><input className="form-control" type='text' id='title' value={this.state.title} onChange={this.changeTitle} placeholder='Title' /></div>
        </div>
        <div>
          <label htmlFor='title'>Content</label>
          <div><input className="form-control" type='text' id='content' value={this.state.content} onChange={this.changeContent} /></div>
        </div>
        <div>
          <button className="btn btn-default" type='submit'>Add Blog</button>
        </div>
      </form>
     </div>
    );
  }
});

var Blogs = React.createClass({
  propTypes: {
    blogs: React.PropTypes.array
  },
  getInitialState: function() {
    return {
      blogs: (this.props.blogs || [])
    };
  },
  onBook: function(blog) {
    this.state.blogs.push(blog);

    this.setState({
      blogs: this.state.blogs
    });
  },
  render: function() {
    var blogs = this.state.blogs.map(function(blog) {
      return <Blog title={blog.title} read={blog.content}></Blog>;
    });

    return (
		<DefaultLayout title={this.props.name}>	
    	  <div className="col-md-4 col-md-offset-4">	
	        <table>
	          <thead>
	            <tr>
	              <th>Title</th>
	              <th>Content</th>
	            </tr>
	          </thead>
	          <tbody>{blogs}</tbody>
	        </table>
	        <BlogForm onBlog={this.onBlog}></BlogForm>
	        
	      </div>
		</DefaultLayout>
    );
  }
});


var Blog = React.createClass({

propTypes: {
		picture: React.PropTypes.string,
		title: React.PropTypes.string,
		content: React.PropTypes.string
	},
	render: function(){

		return (
			
			<DefaultLayout title={this.props.name}>	
				<div> 
					{this.props.picture}
					{this.props.title}
		 			{this.props.content}
		 		</div>
		 	</DefaultLayout>
		);
	}

});
 
module.exports = Blogs;