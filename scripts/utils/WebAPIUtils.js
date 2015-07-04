//WebAPIUtil.js

var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var SuperclassConstants = require('../constants/SuperclassConstants.js');
var request = require('superagent');

var APIEndpoints = SuperclassConstants.APIEndpoints;


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
    //debugger;
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
  }

};


module.exports = WebAPIUtils;
