var proxyquire = require('proxyquire');
var mockedRequests = require('../request_mock.js');
var mockedWebApiUtils = proxyquire('../../scripts/utils/WebAPIUtils.js', {'superagent': mockedRequests});
var FeedbackActionCreators = 	proxyquire('../../scripts/actions/FeedbackActionCreators.js', {'../utils/WebAPIUtils.js': mockedWebApiUtils});

describe ("FeedbackActionCreators", function() {
	var body = "hello world!";
	it("Sends feedback to api", function(done) {
		API = mockedRequests.API
		console.log(mockedRequests);
		//For some reason we are not using the correct mocked request?
		console.log("API:");
		console.log(API);
		expect(API["emails"]).toEqual([]);
		FeedbackActionCreators.sendFeedback(body);
		API = mockedRequests.API
		expect(API["emails"]).toEqual([body]);
	});
});
