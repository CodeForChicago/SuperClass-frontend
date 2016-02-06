var APIEndpoints = require('../scripts/constants/SuperclassConstants.js').APIEndpoints;
var _currUrl;
var _currErr = '[]';
var _currRes;

var API = {};

var arrLESSONS = [{id: 1, title: "I am a lesson", summary: "hello world", creator: "Juan David"}];
API[APIEndpoints.LESSONS] = JSON.stringify(arrLESSONS);

var request = { 
	get: function(url) {
		_currUrl = url;
		return this;
       	},
	set: function(key, value) {
       		return this;
	},
	end: function(callback) {
		res = { text: API[_currUrl], error: _currErr };
		callback(_currErr, res);
       	}	
}
