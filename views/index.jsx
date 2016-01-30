var React = require('react');



var Blogs = React.createClass({

propTypes: {
		picture: React.PropTypes.string,
		title: React.PropTypes.string,
		content: React.PropTypes.string
	},
	render: function(){

		return (
			<div> 
			{ this.props.picture }
			{ this.props.title }
		 	{ this.props.content }
		 	</div>
		); 
	}

});
 
module.exports = Blogs;