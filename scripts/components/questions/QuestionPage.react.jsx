var React = require('react');
var QuestionStore = require('../../stores/QuestionStore.react.jsx');
var QuestionActionCreators = require('../../actions/QuestionActionCreators.react.jsx')
var State = require('react-router').State;

var QuestionPage = React.createClass({

	mixins: [ State ],

	getInitialState: function() {
		return {
			question: QuestionStore.getQuestion(),
			errors: []
		}
	},

	componentDidMount: function() {
		QuestionStore.addChangeListener(this._onChange);
		QuestionActionCreators.loadQuestion(this.getParams().questionId);
	},

	componentWillUnmount: function() {
		QuestionStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({
			question: QuestionStore.getQuestion(),
			errors: QuestionStore.getErrors()
		});
	},

	render: function() {
		return (
			<div className="row">
				<div className="question__title">{this.state.question.title}</div>
				<div className="question__author">{this.state.question.user}</div>
				<div className="question__body">{this.state.question.body}</div>
			</div>
		);
	}
});

module.exports = QuestionPage;