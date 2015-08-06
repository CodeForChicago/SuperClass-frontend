var React = require('react');
var QuestionStore = require('../../stores/QuestionStore.react.jsx');
var QuestionActionCreators = require('../../actions/QuestionActionCreators.react.jsx');
var CommentActionCreators = require('../../actions/CommentActionCreators.react.jsx');
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

	_onSubmit: function(e) {
		e.preventDefault();
		var commentBody = this.refs.body.getDOMNode().value;
		CommentActionCreators.createComment(commentBody, this.getParams().questionId);
		//QuestionActionCreators.addComment(newComment);
	},

	render: function() {
		var CommentItem = this.state.question.comments.length ? (
			this.state.question.comments[0].body
			) : (null);
		return (
			<div className="row">
				<div className="question__title"><strong>{this.state.question.title}</strong></div>
				<div className="question__author">{this.state.question.user}</div>
				<br/>
				<div className="question__body">{this.state.question.body}</div>
				<br/>
				<div className="question__comments">
					<div className="comments__head"><u>Comments</u></div>
					<CommentsList comments={this.state.question.comments}/>
				</div>
				<div className="row">
					<form onSubmit={this._onSubmit} className="new-comment">
						<div className="new-comment__body">
							<textarea rows="5" input type="text" placeholder="Write a new comment" name="body" ref="body"/>
						</div>
						<div className="new-comment__submit">
							<button type="submit">Post Comment</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

var CommentsList = React.createClass({
	render: function() {
		var ReturnItem = this.props.comments.length ? (
			<ul className="comments__list">
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