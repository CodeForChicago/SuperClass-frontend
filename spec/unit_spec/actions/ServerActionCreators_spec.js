//jasmine_spec
//ServerActionCreators_spec.js
var proxyquire = require('proxyquire');
var DispatcherMethods = ['handleServerAction'];
var Dispatcher = jasmine.createSpyObj('SuperclassDispatcher',DispatcherMethods);
var ServerActionCreators=proxyquire('../../../scripts/actions/ServerActionCreators.js',{'../dispatcher/SuperclassDispatcher.js':Dispatcher});
var Constants = require('../../../scripts/constants/SuperclassConstants.js');
var ActionTypes=Constants.ActionTypes;
var resetter = require('../../spec_helper.js').resetter;

resetter.set({
	objects: [Dispatcher],
	methods: [DispatcherMethods]
});

describe('ServerActionCreators', function(){
	var json='jsonZZ';
	var errors='errorZZ';
	beforeEach(function() {
		resetter.resetAll();
	});

	describe('receiveLogin', function(){

		beforeEach(function() {
			ServerActionCreators.receiveLogin(json, errors);
		});

		it("calls Dispatcher to handleServerAction", function(done){
			expect(Dispatcher.handleServerAction).toHaveBeenCalled();
			done();
		});
		
		it("calls Dispatcher to handleServerAction with", function(done){
				expect(Dispatcher.handleServerAction).toHaveBeenCalledWith({
				type: ActionTypes.LOGIN_RESPONSE,
				json:'jsonZZ',
				errors:'errorZZ'
				
			});
			done();
		});
	});

	describe('receiveLessons', function(){
		beforeEach(function(){
			ServerActionCreators.receiveLessons(json);
		});

		it("calls Dispatcher to handleServerAction", function(done){
			expect(Dispatcher.handleServerAction).toHaveBeenCalled();
			done();
		});

		it("calls Dispatcher to handleServerAction with", function(done){
				expect(Dispatcher.handleServerAction).toHaveBeenCalledWith({
				type: ActionTypes.RECEIVE_LESSONS,
				json:'jsonZZ',
			});
			done();
		});

	});

	describe('receiveLesson', function(){
		beforeEach(function(){
			ServerActionCreators.receiveLesson(json);
		});

		it("calls Dispatcher to handleServerAction", function(done){
			expect(Dispatcher.handleServerAction).toHaveBeenCalled();
			done();
		});

		it("calls Dispatcher to handleServerAction with", function(done){
				expect(Dispatcher.handleServerAction).toHaveBeenCalledWith({
				type: ActionTypes.RECEIVE_LESSON,
				json:'jsonZZ',
			});
			done();
		});

	});

	describe('receiveCreatedLesson', function(){
		beforeEach(function(){
			ServerActionCreators.receiveCreatedLesson(json, errors);
		});

		it("calls Dispatcher to handleServerAction", function(done){
			expect(Dispatcher.handleServerAction).toHaveBeenCalled();
			done();
		});

		it("calls Dispatcher to handleServerAction with", function(done){
				expect(Dispatcher.handleServerAction).toHaveBeenCalledWith({
				type: ActionTypes.RECEIVE_CREATED_LESSON,
				json:'jsonZZ',
				errors:'errorZZ'
			});
			done();
		});

	});

	describe('receiveQuestions', function(){
		beforeEach(function(){
			ServerActionCreators.receiveQuestions(json);
		});

		it("calls Dispatcher to handleServerAction", function(done){
			expect(Dispatcher.handleServerAction).toHaveBeenCalled();
			done();
		});

		it("calls Dispatcher to handleServerAction with", function(done){
				expect(Dispatcher.handleServerAction).toHaveBeenCalledWith({
				type: ActionTypes.RECEIVE_QUESTIONS,
				json:'jsonZZ',
			});
			done();
		});

	});

	describe('receiveQuestion', function(){
		beforeEach(function(){
			ServerActionCreators.receiveQuestion(json);
		});

		it("calls Dispatcher to handleServerAction", function(done){
			expect(Dispatcher.handleServerAction).toHaveBeenCalled();
			done();
		});

		it("calls Dispatcher to handleServerAction with", function(done){
				expect(Dispatcher.handleServerAction).toHaveBeenCalledWith({
				type: ActionTypes.RECEIVE_QUESTION,
				json:'jsonZZ',
			});
			done();
		});

	});

	describe('receiveCreatedQuestion', function(){
		beforeEach(function(){
			ServerActionCreators.receiveCreatedQuestion(json, errors);
		});

		it("calls Dispatcher to handleServerAction", function(done){
			expect(Dispatcher.handleServerAction).toHaveBeenCalled();
			done();
		});

		it("calls Dispatcher to handleServerAction with", function(done){
				expect(Dispatcher.handleServerAction).toHaveBeenCalledWith({
				type: ActionTypes.RECEIVE_CREATED_QUESTION,
				json:'jsonZZ',
				errors:'errorZZ'
			});
			done();
		});

	});

	describe('receiveCreatedComment', function(){
		beforeEach(function(){
			ServerActionCreators.receiveCreatedComment(json,errors);
		});

		it("calls Dispatcher to handleServerAction", function(done){
			expect(Dispatcher.handleServerAction).toHaveBeenCalled();
			done();
		});

		it("calls Dispatcher to handleServerAction with", function(done){
				expect(Dispatcher.handleServerAction).toHaveBeenCalledWith({
				type: ActionTypes.RECEIVE_CREATED_COMMENT,
				json:'jsonZZ',
				errors:'errorZZ'
			});
			done();
		});

	});
});
