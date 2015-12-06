var React = require('react');
var SessionStore = require('../../stores/SessionStore.react.jsx');

var WelcomePage = React.createClass({

	render: function() {
		var WelcomeDisplay = SessionStore.isLoggedIn() ? (
			<div className="row">
				<br/>
				<strong>Welcome {SessionStore.getUser()}! Get started by clicking on the 'Lessons' or 'Questions' links on the header bar.</strong>
			</div>
			) : (
			<div className="row">
				<br/>
				<strong>Welcome to the Code for Chicago web application prototype!<br/>
				Please log in or sign up in the upper right corner.</strong>
			</div>);

		var video = (<iframe width="853" height="480" src="https://www.youtube.com/embed/STRPsW6IY8k" frameborder="10" allowfullscreen> </iframe>);
		return (
			<div>
				{WelcomeDisplay}
				<div className="row">
					{video}
				</div>
			</div>
			);
	}
});

module.exports = WelcomePage;