var proxyquire =  require('proxyquire');
var WebAPIUtils = jasmine.createSpyObj('WebAPIUtils', ['loadLessons', 'loadLesson','createLesson']);
var Dispatcher = jasmine.createSpyObj('Dispatcher', ['handleViewAction']);
var LessonActionCreators = proxyquire('../../scripts/actions/LessonActionCreators.js', {'../utils/WebAPIUtils.js': WebAPIUtils, '../dispatcher/SuperclassDispatcher.js': Dispatcher});

describe("LessonActionCreators", function(){
	var title = "stuff";
	var creator ="things";
	var link = "moreThangz";
	var summary= "moreStuffz";
	var lessonId= "hub";
	var DisHand="moreThangz";

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

	it("it calls Dispatcher to handleViewAction with", function(done){
		expect(Dispatcher.handleViewAction).toHaveBeenCalledWith(DisHand);
		done();
	})

	beforeEach(function() {
		LessonActionCreators.loadLesson(lessonId);
	});

	it("It calls WebAPIUtils to loadLesson", function(done) {
		expect(WebAPIUtils.loadLesson).toHaveBeenCalled();
		done();
	});	

	it("It calls WebAPIUtils to loadLesson", function(done) {
		expect(WebAPIUtils.loadLesson).toHaveBeenCalledWith("hub");
		done();
	});

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


})
