var React = require('react');

var DefaultLayout = React.createClass({
	render: function(){
		return (
			<html lang="en">
				<head>
					<title>{this.props.title}</title>
					<script type="application/javascript;version=1.7" src=""></script>
					<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"></link>
					<script src="https://facebook.github.io/react/js/jsfiddle-integration-babel.js"></script>
				</head>	
				<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/">
				        <p>Blog App</p>
				      </a>
				    </div>
				    <div className="navbar-right">
				    	<a href="/blogs/create">
				    		<button type="button" className="btn btn-default navbar-btn">Make A Blog</button>
				    	</a>
				    </div>
				  </div>
				</nav>
				<body>
					<div className="col-md-12">
						<div id="container">
							{this.props.children}
						</div>
					</div>	
				</body>
			</html>
		);
	}

});

module.exports = DefaultLayout;