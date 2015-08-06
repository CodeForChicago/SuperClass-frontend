var React = require('react');
var QuestionActionCreators = require('../../actions/QuestionActionCreators.react.jsx');
var RouteActionCreators = require('../../actions/RouteActionCreators.react.jsx');

var QuestionNew = React.createClass({

	_onSubmit: function(e) {
		e.preventDefault();
		var title = this.refs.title.getDOMNode().value;
		//var author = this.refs.author.getDOMNode().value;
		var body = this.refs.body.getDOMNode().value;
		QuestionActionCreators.createQuestion(title, body);
		RouteActionCreators.redirect('questions'); // Look into changing
		//createLesson handles redirection without this final line
		//we're not sure how
	},

	render: function () {
		return (
			<div className="row">
				<br/>
				<form onSubmit={this._onSubmit} className="new-lesson">
					<div className="new-lesson__title">
						<input type="text" placeholder="Title" name="title" ref="title"/>
					</div>
					<div className="new-lesson__summary">
						<textarea rows="10" input type="text" placeholder="Write your question here" name="body" ref="body"/>
					</div>
					<div className="new-lesson__submit">
						<button type="submit">Post Question</button>
					</div>
				</form>
			</div>
		);
	}

});

module.exports = QuestionNew;