//jasmine_spec
//QuestionActionCreators_spec.js

var proxyquire = require('proxyquire');

var DispatcherMethods = ['handleViewAction'];
var Dispatcher = jasmine.createSpyObj('Dispatcher', DispatcherMethods);
var WebAPIUtilsMethods = ['loadQuestions', 'loadQuestion', 'createQuestion', 'addComment'];
var WebAPIUtils = jasmine.createSpyObj('WebAPIUtils', WebAPIUtilsMethods);

var QuestionActionCreators = proxyquire('../../../scripts/actions/QuestionActionCreators.js', {'../dispatcher/SuperclassDispatcher.js': Dispatcher, '../utils/WebAPIUtils.js': WebAPIUtils});
var resetter = require('../../spec_helper.js').resetter;

var Constants = require('../../../scripts/constants/SuperclassConstants.js');
var ActionTypes = Constants.ActionTypes;
					
resetter.set({
	objects: [WebAPIUtils, Dispatcher],
	methods: [WebAPIUtilsMethods, DispatcherMethods]
});

describe("QuestionActionCreators", function() {
	beforeEach(function() {
		resetter.resetAll();
	});
	
	describe("loadQuestions", function() {
		beforeEach(function() {
			QuestionActionCreators.loadQuestions();
		});

		it("Calls Dispatcher to handleViewAction", function(done) {
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});

		it("Calls Dispatcher with correct hash info", function(done) {
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
				type: ActionTypes.LOAD_QUESTIONS
			});
			done();
		});

		it("It calls WebAPIUtils to loadQuestions", function(done) {
		       expect(WebAPIUtils.loadQuestions).toHaveBeenCalled();
		       done();
		});
	});

	describe("loadQuestion", function() {
		var q_id = 1;
		beforeEach(function() {
			QuestionActionCreators.loadQuestion(q_id);
		});

		it("Calls Dispatcher to handleViewAction", function(done) {
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});

		it("Calls Dispatcher with correct hash info", function(done) {
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
				type: ActionTypes.LOAD_QUESTION,
				questionId: q_id
			});
			done();
		});

		it("Calls WebAPIUtils to loadQuestion", function(done) {
		       expect(WebAPIUtils.loadQuestion).toHaveBeenCalled();
		       done();
		});
				
		it("Calls WebAPIUtils with correct question id", function(done) {
			expect(WebAPIUtils.loadQuestion).toHaveBeenCalledWith(q_id);
			done();
		});
	});

	describe("createQuestion", function() {
		var title = "immaTitle";
		var body = "allAboutCompSci";

		beforeEach(function() {
			QuestionActionCreators.createQuestion(title, body);
		});

		it("Calls Dispatcher to handleViewAction", function(done) {
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});

		it("Calls Dispatcher with correct hash info", function(done) {
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
				type: ActionTypes.CREATE_QUESTION,
				title: title,
				body: body
			});
			done();
		});

		it("Calls WebAPIUtils to createQuestion", function(done) {
			expect(WebAPIUtils.createQuestion).toHaveBeenCalled();
			done();
		});

		it("Calls WebAPIUtils with correct params", function(done) {
			expect(WebAPIUtils.createQuestion).toHaveBeenCalledWith(title, body);
			done();
		});

	});	

	describe("addComment", function() {
		var body = "immaQ";
		var q_id = 1;

		beforeEach(function() {
			QuestionActionCreators.addComment(body, q_id);
		});

		it("Calls Dispatcher to handleViewAction", function(done) {
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});

		it("Calls Dispatcher with correct hash info", function(done) {
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
				type: ActionTypes.CREATE_COMMENT,
				body: body,
				question_id: q_id
			});
			done();
		});

		it("Calls WebAPIUtils to addComment", function(done) {
			expect(WebAPIUtils.addComment).toHaveBeenCalled();
			done();
		});

		it("Calls WebAPIUtils with correct params", function(done) {
			expect(WebAPIUtils.addComment).toHaveBeenCalledWith(body, q_id);
			done();
		});
	});

});
