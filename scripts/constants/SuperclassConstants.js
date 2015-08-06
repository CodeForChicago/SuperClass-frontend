/* global Constants */
//SuperclasConstants

var keyMirror = require('keymirror');

var APIRoot = "http://localhost:3000";

Constants = {
	APIEndpoints: {
    LOGIN:          APIRoot + "/v1/login",
		REGISTRATION:   APIRoot + "/v1/users",
		LESSONS:        APIRoot + "/v1/lessons",
		QUESTIONS:      APIRoot + "/questions"
	},
	// check up on QUESTIONS later

	ActionTypes: keyMirror({
		// Session
    	LOGIN_REQUEST: null,
    	LOGIN_RESPONSE: null,
    SIGNUP_REQUEST: null,
    LOGOUT: null,

    //WebAPI
    LOAD_LESSONS: null,
    RECEIVE_LESSONS: null,
    LOAD_LESSON: null,
    RECEIVE_LESSON: null,
    CREATE_LESSON: null,
    RECEIVE_CREATED_LESSON: null,
    
    LOAD_QUESTIONS: null,
    RECEIVE_QUESTIONS: null,
    LOAD_QUESTION: null,
    RECEIVE_QUESTION: null,
    CREATE_QUESTION: null,
    RECEIVE_CREATED_QUESTION: null,

    CREATE_COMMENT: null,

    //Routes
    REDIRECT: null

	}),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};

module.exports = Constants;
