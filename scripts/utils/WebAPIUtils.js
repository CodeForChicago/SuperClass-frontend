//WebAPIUtil.js
var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var SuperclassConstants = require('../constants/SuperclassConstants.js');
var request = require('superagent');

var APIEndpoints = SuperclassConstants.APIEndpoints;

// prototypes for when we can add comments to the backend
var _tempComments = [];
var _tempComment = {id: 0, body: ""};

function _getErrors(res) {
  var errorMsgs = ["Something went wrong, please try again"];
  if ((json = JSON.parse(res.text))) {
    if (json['errors']) {
      errorMsgs = json['errors'];
    } else if (json['error']) {
      errorMsgs = [json['error']];
    }
  }
  return errorMsgs;
}

WebAPIUtils = {

  signup: function(email, username, password, passwordConfirmation) {
    request.post(APIEndpoints.REGISTRATION)
      .send({
        user: {
          email: email,
          username: username,
          password: password,
          password_confirmation: passwordConfirmation
        }
      })
      .set('Accept', 'application/json')
      .end(function(error, res) {
        if(res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  },

  login: function(email, password) {
    request.post(APIEndpoints.LOGIN)
      .send({ username: email, password: password, grant_type: 'password' })
      .set('Accept', 'application/json')
      .end(function(error, res){
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveLogin(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveLogin(json, null);
          }
        }
      });
  },

  loadLessons: function() {
    request.get(APIEndpoints.LESSONS)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveLessons(json);
        }
      });
  },

  loadLesson: function(lessonId) {
    request.get(APIEndpoints.LESSONS + '/' + lessonId)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveLesson(json);
        }
      });
  },

  createLesson: function(title, creator, link, summary) {
    request.post(APIEndpoints.LESSONS)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .send({ lesson: {title: title, creator: creator,
        link: link, summary: summary}})
      .end( function(error, res) {
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveCreatedLesson( null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveCreatedLesson( json, null);
          }
        }
      });
  },
  
  loadQuestions: function() { //TODO: separate by class
    request.get(APIEndpoints.QUESTIONS)
      .set('Accept', 'application/json') //Gatekeeper
      .set('Authorization', sessionStorage.getItem('accessToken')) //Key
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveQuestions(json);
        }
      });
  },
  
  loadQuestion: function(questionId) {
    request.get(APIEndpoints.QUESTIONS + '/' + questionId)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .end(function(error, res){
        if (res) {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveQuestion(json);
        }
      });
  },
  
  // removed author because the user who created a question is already tracked
  createQuestion: function(title, body) {
    request.post(APIEndpoints.QUESTIONS)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .send({ question: {title: title, /*author: author,*/ body: body}})
      .end( function(error, res) {
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveCreatedQuestion(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveCreatedQuestion(json, null);
          }
        }
      });
  },

  // change this when database can create comments
  addComment: function(body, question_id) {
    request.post(APIEndpoints.COMMENTS)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .send({ comment: {body: body, question: question_id} })
      .end( function(error, res) {
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            ServerActionCreators.receiveCreatedComment(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            ServerActionCreators.receiveCreatedComment(null,errorMsgs);
          }
        }
    });
  },

  sendFeedback: function(body) {
    /*request.post(APIEndpoints.FEEDBACK)
      .set('Accept', 'application/json')
      .set('Authorization', sessionStorage.getItem('accessToken'))
      .send({ feedback: {body: body} })
      .end( function(error, res) {
        if (res) {
          if (res.error) {
            var errorMsgs = _getErrors(res);
            //ServerActionCreators.receiveCreatedComment(null, errorMsgs);
          } else {
            json = JSON.parse(res.text);
            //ServerActionCreators.receiveCreatedComment(null,errorMsgs);
          }
        }
    });*/
  }
};

module.exports = WebAPIUtils;
