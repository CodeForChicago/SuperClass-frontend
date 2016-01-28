var Dispatcher = require('../dispatcher/SuperclassDispatcher.js');
var Constants = require('../constants/SuperclassConstants.js');
var WebAPIUtils = require('../utils/WebAPIUtils.js');

var ActionTypes = Constants.ActionTypes;

QuestionActionCreators = {
  loadQuestions: function() {
    Dispatcher.handleViewAction({
      type: ActionTypes.LOAD_QUESTIONS
    });
    WebAPIUtils.loadQuestions();
  },
  
  loadQuestion: function(questionId) {
    Dispatcher.handleViewAction({
      type: ActionTypes.LOAD_QUESTION,
      questionId: questionId
    });
    WebAPIUtils.loadQuestion(questionId);
  },

  createQuestion: function(title, body) {
    Dispatcher.handleViewAction({
      type: ActionTypes.CREATE_QUESTION,
      title: title,
      body: body
    });
    WebAPIUtils.createQuestion(title, body);
  },

  addComment: function(body, question_id) {
    Dispatcher.handleViewAction({
      type: ActionTypes.CREATE_COMMENT,
      body: body,
      question_id: question_id
    });
    WebAPIUtils.addComment(body, question_id);
  }
};

module.exports = QuestionActionCreators;
