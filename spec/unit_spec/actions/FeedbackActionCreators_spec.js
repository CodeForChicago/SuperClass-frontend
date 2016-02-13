//jasmine_spec 
//FeedbackActionCreators_spec.js
var proxyquire =  require('proxyquire');
var WebAPIUtilsMethods = ['sendFeedback'];
var WebAPIUtils = jasmine.createSpyObj('WebAPIUtils', WebAPIUtilsMethods);
var FeedbackActionCreators = proxyquire('../../../scripts/actions/FeedbackActionCreators.js', {'../utils/WebAPIUtils.js': WebAPIUtils });
var resetter = require("../../spec_helper.js").resetter;

resetter.set({
  objects: [WebAPIUtils],
  methods: [WebAPIUtilsMethods]
});

describe("FeedbackActionCreators", function() {

  beforeEach(function() {
    resetter.resetAll();
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