var React = require('react');
//var FeedbackActionCreators = require('../../actions/FeedbackActionCreators.react.jsx');

var FeedbackPage = React.createClass({

	_onSubmit: function(e) {

	},

	render: function() {
		return (
			<div className = "row">
				<br/>
				<div className = "feedback__header">
					We appreciate any feedback regarding our website.
				</div>
				<br/>
				<form onSubmit={this._onSubmit} className="feedback">
					<div className="feedback__body">
						<textarea rows="10" input type="text" placeholder="Write feedback here" name="body" ref="body"/>
					</div>
					<div className="feedback__submit">
						<button type="submit">Submit Feedback</button>
					</div>
				</form>
			</div>
		);
	}
});

module.exports = FeedbackPage;
