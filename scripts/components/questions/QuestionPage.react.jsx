var React = require('react');
var QuestionStore = require('../../stores/QuestionStore.react.jsx');
var QuestionActionCreators = require('../../actions/QuestionActionCreators.react.jsx');
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
		var CommentItem = this.state.question.comments.length ? (
			this.state.question.comments[0].body
			) : (null);
		return (
			<div className="row">
				<div className="question__title">{this.state.question.title}</div>
				<div className="question__author">{this.state.question.user}</div>
				<div className="question__body">{this.state.question.body}</div>
				<div className="question__comment">
					<CommentsList comments={this.state.question.comments}/>
				</div>
			</div>
		);
	}
});

var CommentsList = React.createClass({
	render: function() {
		var ReturnItem = this.props.comments.length ? (
			<ul className="large-8 medium-10 small-12 small-centered column">
			{this.props.comments.map(function(comment, index){
				return <CommentItem comment={comment} key={"comment-" + index}/>
				})}
			</ul>
			) : (null);
		return(ReturnItem);
	}
});

var CommentItem = React.createClass({
	render: function() {
	return(
		<li className="comment">
			<div className="comment__body">
				{this.props.comment.body}
			</div>
			<div className="comment__user">
				&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;
				{this.props.comment.user.username}
			</div>
		</li>
		);
	}
});


module.exports = QuestionPage;