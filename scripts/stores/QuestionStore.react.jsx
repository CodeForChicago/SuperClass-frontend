var Dispatcher = require('../dispatcher/SuperclassDispatcher.js');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/SuperclassConstants.js');
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _questions = [];
var _errors = [];
var _question = { title: "", author: "", comments: [], body: "", responsecount: 0, repcount: 0  };

var QuestionStore = assign({}, EventEmitter.prototype, {
  
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  
  getAllQuestions: function() {
    return _questions;
  },
  
  getLesson: function() {
    return _lesson;
  },
  
  getErrors: function() {
    return _errors;
  }
  
});

QuestionStore.dispatchToken = Dispatcher.register(function(payload) {
  var action = payload.action;
  
  switch(action.type) {
    
    case ActionTypes.RECEIVE_QUESTIONS:
      _questions = action.json.questions;
      QuestionStore.emitChange();
      break;
      
    case ActionTypes.RECEIVE_CREATED_QUESTION:
      if (action.json) {
        _questions.unshift(action.json.question);
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      QuestionStore.emitChange();
      break;
      
    case ActionTypes.RECEIVE_QUESTION:
      if (action.json) {
        _question = action.json.question;
        _errors = [];
      }
      if (action.errors) {
        _errors = action.errors;
      }
      QuestionStore.emitChange();
      break;
  }
  return true;
});

module.exports = QuestionStore;