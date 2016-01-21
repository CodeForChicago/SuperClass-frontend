var React = require('react');
<<<<<<< HEAD
var LessonStore = require('../../stores/LessonStore.react.jsx');
var SessionStore = require ('../../stores/SessionStore.react.jsx');
=======
var LessonStore = require('../../stores/LessonStore.js');
>>>>>>> 544648488746fc930cad5f2c97bf3f15987a5c38
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var LessonActionCreators = require('../../actions/LessonActionCreators.js');
var Router = require('react-router');
var Link = Router.Link;

var LessonsPage = React.createClass({

  getInitialState: function() {
    return {
      lessons: LessonStore.getAllLessons(),
      errors: []
    };
  },

  componentDidMount: function() {
    LessonStore.addChangeListener(this._onChange);
    LessonActionCreators.loadLessons();
  },

  componentWillUnmount: function() {
    LessonStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      lessons: LessonStore.getAllLessons(),
      errors: LessonStore.getErrors()
    });
  },

  render: function() {
    var loginMessage = SessionStore.isLoggedIn() ? (<br/>)
	    : ( <div className= "large-3 medium-10 small-12 small-centered column">
		   <strong>Please sign in to view lessons</strong>
		</div>);
    var errors = (this.state.errors.length > 0) ? 
    <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
	<br/>
	{loginMessage}
	<br/>
        <div className="row">
          <LessonsList lessons={this.state.lessons} />
        </div>
      </div>
    );
  }
});

var LessonItem = React.createClass({
  render: function() {
    return (
      <li className="lesson">
        <div className="lesson__title">
          <Link to="lesson" params={ {lessonId: this.props.lesson.id} }>
            {this.props.lesson.title}
          </Link>
        </div>
        <div className="lesson__summary">{this.props.lesson.summary}</div>
        <span className="lesson__creator">{this.props.lesson.creator}</span>
      </li>
    );
  }
});

var LessonsList = React.createClass({
  render: function() {
    return (
      <ul className="large-8 medium-10 small-12 small-centered columns">
        {this.props.lessons.map(function(lesson, index){
          return <LessonItem lesson={lesson} key={"lesson-" + index}/>
        })}
      </ul>
    );
  }
});

module.exports = LessonsPage;
