var React = require('react');
//var FeedbackActionCreators = require('../../actions/FeedbackActionCreators.react.jsx');

var Submitted;

var FeedbackPage = React.createClass({

	componentDidMount: function() {
		Submitted = false;
	},

	componentWillUnmount: function() {
		Submitted = false;
	},

	_onSubmitFeedback: function(e) {
		e.preventDefault();
		Submitted = true;
		this.forceUpdate();
	},

	_onSubmitNew: function(e) {
		e.preventDefault();
		Submitted = false;
		this.forceUpdate();
	},

	render: function() {
		var RenderObject = Submitted ? (
			<div className = "row">
				<br/>
				<div className = "feedback__thanks">
				Thank you for your feedback!
				</div>
				<br/>
				<form onSubmit={this._onSubmitNew} className="feedback">
					<div className="feedback__new">
						<button type="submit">New Feedback</button>
					</div>
				</form>
			</div>
		) : (
			<div className = "row">
				<br/>
				<div className = "feedback__header">
					We appreciate any feedback regarding our website.
				</div>
				<br/>
				<form onSubmit={this._onSubmitFeedback} className="feedback">
					<div className="feedback__body">
						<textarea rows="10" input type="text" placeholder="Write feedback here" name="body" ref="body"/>
					</div>
					<div className="feedback__submit">
						<button type="submit">Submit Feedback</button>
					</div>
				</form>
			</div>
		);
		return (RenderObject);
	}
});

module.exports = FeedbackPage;
