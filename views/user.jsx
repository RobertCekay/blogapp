var React = require('react');
var Blogs = require('./blogs');


  var UserForm = React.createClass({
  propTypes: {
    onUser: React.PropTypes.func.isRequired
 },
  getInitialState: function() {
    return {
      name: '',
      password: ''
    };
  },
  changeName: function(ev) {
    this.setState({
      name: ev.target.value
    });
  },
  changeContent: function(ev) {
    this.setState({
      password: ev.target.value
    });
  },
  addUser: function(ev) {
    ev.preventDefault();

    this.props.onUser({
      name: this.state.title,
      password: this.state.content
    });

    this.setState({
      name: '',
      password: ''
    });
  },
  render: function() {
    return (
      <form onSubmit={this.addUser}>
        <div>
          <label htmlFor='title'>Name</label>
          <div><input type='text' id='title' value={this.state.name} onChange={this.changeName} placeholder='Title' /></div>
        </div>
        <div>
          <label htmlFor='title'>Password</label>
          <div><input type='text' id='content' value={this.state.password} onChange={this.changePassword} /></div>
        </div>
        <div>
          <button type='submit'>Create User</button>
        </div>
      </form>
    );
  }
});


var User = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		password: React.PropTypes.string.isRequired,
		blogs: Blogs
	},
	render: function(){
		return (
			<div>
				{ this.props.name }
				{ this.props.blogs }
			</div>
		);
	}
});

module.exports = UserForm;