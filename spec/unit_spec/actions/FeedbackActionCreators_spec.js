//jasmine_spec 
//FeedbackActionCreators_spec.js
var proxyquire =  require('proxyquire');
var WebAPIUtils = jasmine.createSpyObj('WebAPIUtils', ['sendFeedback']);
var FeedbackActionCreators = proxyquire('../../../scripts/actions/FeedbackActionCreators.js', {'../utils/WebAPIUtils.js': WebAPIUtils });

describe("FeedbackActionCreators", function() {

  beforeEach(function() {
	FeedbackActionCreators.sendFeedback('feedbackBody');
  });

  it("Calls on WebAPIUtils to sendFeedback", function(done) {
    expect(WebAPIUtils.sendFeedback).toHaveBeenCalled();
    done();
  });

  it("Passes on the body to WebAPIUtils", function(done) {
  	expect(WebAPIUtils.sendFeedback).toHaveBeenCalledWith('feedbackBody');
  	done();
  });

});