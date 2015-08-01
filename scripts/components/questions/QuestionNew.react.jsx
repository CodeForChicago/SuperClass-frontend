var React = require('react');
var QuestionActionCreators = require('../../actions/QuestionActionCreators.react.jsx');

var QuestionNew = React.createClass({

	_onSubmit: function(e) {
		e.preventDefault();
		var title = this.refs.title.getDOMNode().value;
		var author = this.refs.author.getDOMNode().value;
		var body = this.refs.body.getDOMNode().value;
		QuestionActionCreators.createQuestion(title, author, body);
	},

	render: function () {
		return (
			<div className="row">
				<form onSubmit={this._onSubmit} className="new-question">
					<div className="new-question__title">
						<input type="test" placeholder="Title" name="title" ref="title"/>
					</div>
					<div className="new-question__body">
						<input type="text" placeholder="Body" name="body" ref="body"/>
					</div>
					<div className="new-question__submit">
						<button type="submit">Post</button>
					</div>
				</form>
			</div>
		);
	}

});

module.exports = QuestionNew;