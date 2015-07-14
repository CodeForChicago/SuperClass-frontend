var React = require('react');
var QuestionStore = require('../../stores/QuestionStore.react.jsx');
var QuestionActionCreators = require('../../actions/QuestionActionCreators.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var Router = require('react-router');
var Link = Router.Link;
var timeago = require('timeago');

var QuestionsPage = React.createClass({
  
  getInitialState: function(){
    return {
      questions: QuestionStore.getAllQuestions(),
      errors: []
    };
  },
  
  componentDidMount: function() {
    QuestionStore.addChangeListener(this._onChange);
    QuestionActionCreators.loadQuestions();
  },
  
  componentWillUnmount: function() {
    QuestionStore.removeChangeListener(this._onChange);
  },
  
  _onChange: function() {
    this.setState({
      questions: QuestionStore.getAllQuestions(),
      errors: QuestionStore.getErrors()
    });
  },
  
  render: function() {
    var errors = (this.state.errors.length > 0) ? 
      <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
        <div className="row">
          <QuestionsList questions={this.state.questions} />
        </div>
      </div>
    );
  }
});

var QuestionItem = React.createClass({
  render: function() {
    < li className="question">
      <div className="question__title">
        <Link to="question" params={ {lessonId: this.props.question.id} }>
          {this.props.question.title}
        </Link>
      </div>
      <div className="question__info">
        Author: {this.props.question.author}, Created: {timeago(this.props.question.created_at)}, Responses: {this.props.question.responsecount}, Reputation: {this.props.question.repcount} 
      </div>
      <div className="question__summary">
        {this.props.question.summary}
      </div>
    </li>
  }
})

var QuestionsList = React.createClass({
  render: function() {
    return(
        <ul className="large-8 medium-10 small-12 small-centered column">
        {this.props.questions.map(function(question, index){
          return <QuestionItem question={question} key={"question-" + index}/>
        })}
    );
  }
});

module.exports = QuestionsPage;