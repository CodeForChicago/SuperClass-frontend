var React = require('react');
var Dispatcher = require('../../dispatcher/SuperclassDispatcher.js');
var Constants = require('../../constants/SuperclassConstants.js');
var SessionStore = require('../../stores/SessionStore.react.jsx');
var LessonActionCreators = require('../../actions/LessonActionCreators.react.jsx');
var RouteActionCreators = require('../../actions/RouteActionCreators.react.jsx');

var LessonNew = React.createClass({

  componentDidMount: function() {
    if (!SessionStore.isAdmin()) {
      RouteActionCreators.redirect('app');
    }
  },

  _onSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value;
    var summary = this.refs.summary.getDOMNode().value;
    var link = this.refs.link.getDOMNode().value;
    var creator = this.refs.creator.getDOMNode().value;
    LessonActionCreators.createLesson(title, creator, link, summary);
  },

  render: function() {
    return (
      <div className="row">
        <form onSubmit={this._onSubmit} className="new-lesson">
          <div className="new-lesson__title">
            <input type="text" placeholder="Title" name="title" ref="title" />
          </div>
          <div className="new-lesson__creator">
            <input type="text" placeholder="Creator" name="creator" ref="creator" />
          </div>
          <div className="new-lesson__link">
            <input type="text" placeholder="Link" name="link" ref="link" />
          </div>
          <div className="new-lesson__summary">
            <textarea rows="10" placeholder="Summary fo lesson..." name="summary" ref="summary" />
          </div>
          <div className="new-lesson__submit">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    );
  }

});

module.exports = LessonNew;
