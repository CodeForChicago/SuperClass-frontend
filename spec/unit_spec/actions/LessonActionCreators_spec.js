var proxyquire =  require('proxyquire');

var WebAPIUtilsMethods = ['loadLessons', 'loadLesson', 'createLesson'];
var WebAPIUtils = jasmine.createSpyObj('WebAPIUtils', WebAPIUtilsMethods);
var DispatcherMethods = ['handleViewAction'];
var Dispatcher = jasmine.createSpyObj('Dispatcher', DispatcherMethods);

var LessonActionCreators = proxyquire('../../../scripts/actions/LessonActionCreators.js', {'../utils/WebAPIUtils.js': WebAPIUtils, '../dispatcher/SuperclassDispatcher.js': Dispatcher});
var resetter = require('../../spec_helper.js').resetter;

var Constants = require('../../../scripts/constants/SuperclassConstants.js');
var ActionTypes = Constants.ActionTypes;

resetter.set({
	objects: [WebAPIUtils, Dispatcher],
	methods: [WebAPIUtilsMethods, DispatcherMethods]
});

describe("LessonActionCreators", function(){

	beforeEach(function() {
		resetter.resetAll();
	});

	describe("loadLessons", function(){
		beforeEach(function() {
			LessonActionCreators.loadLessons();
		});

		it("It calls WebAPIUtils to loadLessons", function(done){
			expect(WebAPIUtils.loadLessons).toHaveBeenCalled();
			done();
		});

		it("It calls Dispatcher to handleViewAction", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});

		it("it calls Dispatcher with correct hash", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
				type: ActionTypes.LOAD_LESSONS
			});
			done();
		});
	});

	describe("loadLesson", function(){
		var lessonId= 15;

		beforeEach(function() {
			LessonActionCreators.loadLesson(lessonId);
		});

		it("It calls WebAPIUtils to loadLesson", function(done) {
			expect(WebAPIUtils.loadLesson).toHaveBeenCalled();
			done();
		});	

		it("It calls WebAPIUtils to loadLesson", function(done) {
			expect(WebAPIUtils.loadLesson).toHaveBeenCalledWith(15);
			done();
		});

		it("It calls Dispatcher to handleViewAction", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});

		it("it calls Dispatcher to handleViewAction with", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
				type: ActionTypes.LOAD_LESSON,
				lessonId: 15
			});
			done();
		});
	});

	describe("createLesson", function(){
		var title = "stuff";
		var creator = "things";
		var link = "moreThangz";
		var summary= "moreStuffz";

		beforeEach(function() {
			LessonActionCreators.createLesson(title,creator,link,summary);
		});

		it("It calls WebAPIUtils to createLesson", function(done) {
			expect(WebAPIUtils.createLesson).toHaveBeenCalled();
			done();
		});

		it("It calls WebAPIUtils to createLesson", function(done) {
			expect(WebAPIUtils.createLesson).toHaveBeenCalledWith("stuff","things","moreThangz","moreStuffz");
			done();
		});

		it("It calls Dispatcher to handleViewAction", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});

		it("it calls Dispatcher to handleViewAction with", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
				type: ActionTypes.CREATE_LESSON,
				title: "stuff",
				creator: "things",
				link: "moreThangz",
				summary: "moreStuffz"
			});
			done();
		});
	});
});
