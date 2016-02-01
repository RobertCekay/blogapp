var React = require('react');
var DefaultLayout = require('../layout/master');
var mongoose = require('mongoose');


var Blogs = React.createClass({
  getInitialState: function() {
    return {

    };
  },
  onBook: function(blog) {
    this.state.blogs.push(blog);

    this.setState({
      blogs: this.state.blogs
    });
  },
  render: function() {

    /*ar blogs = this.state.blogs.map(function(blog) {
      return <Blog title={blog.title} read={blog.content}></Blog>;
    });*/

	 // var blogs = mongoose.model('Blog').find({});

    return (
		<DefaultLayout title={this.props.name}>
	        <table>
	          <thead>
	            <tr>
	              <th>Title</th>
	              <th>Content</th>
	            </tr>
	          </thead>
	          <tbody></tbody>
	        </table>
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
	handleClick: function(ev){
		alert("hello");
	},
	render: function(){

		return (
			
			<DefaultLayout title={this.props.name}>	
				<div> 
					{this.props.picture}
					{this.props.title}
		 			{this.props.content}
		 			<button onClick={this.handleClick}>hello</button>
		 		</div>
		 	</DefaultLayout>
		);
	}

});
 
module.exports = Blogs;