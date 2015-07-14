var Dispatcher = require('../dispatcher/SuperclassDispatcher.js');
var Constants = require('../constants/SuperclassConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = Constants.ActionTypes;

QuestionActionCreators = {
  loadQuestions: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.LOAD_QUESTIONS
    });
    WebAPIUtils.loadQuestions(); // write this later
  },
  
  loadQuestion: function(questionId) {
    Dispatcher.handleViewAction({
      type: ActionTypes.LOAD_QUESTION,
      questionId: questionId
    });
    WebAPIUtils.loadQuestion(questionId);
  },
  
  createQuestion: function(title, author, body) { //comments, responsecount, repcount) {
    Dispatcher.handleViewAction({
      type: ActionTypes.CREATE_QUESTION,
      title: title,
      author: author,
      body: body
        //don't include these, they will be null
      //comments: comments,
      //responsecount: responsecount,
      //repcount: repcount
    });
    WebAPIUtils.createQuestion(title, author, body);
  }
};

module.exports = QuestionActionCreators;