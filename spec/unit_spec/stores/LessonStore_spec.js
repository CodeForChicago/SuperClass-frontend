var proxyquire = require('proxyquire');
var eventEmitterMethods = ['emit', 'on', 'removeListener'];
var EventEmitter = { prototype: jasmine.createSpyObj('prototype', eventEmitterMethods)};
var events = {EventEmitter: EventEmitter};
var Constants = require('../../../scripts/constants/SuperclassConstants.js');
var callbackFunc;
var Dispatcher = { register: function(callback) {callbackFunc = callback; } }
var LessonStore = proxyquire("../../../scripts/stores/LessonStore.js",{'events':events, '../dispatcher/SuperclassDispatcher.js': Dispatcher} );
var resetter = require("../../spec_helper.js").resetter;

resetter.set( {
	objects: [EventEmitter.prototype],
	methods: [eventEmitterMethods]
});


describe("LessonStore", function(){
	var CHANGE_EVENT = 'change';
	var callback = function(){};
	beforeEach(function() {
		resetter.resetAll();
	});

	describe("emitChange", function(){
		it("Calls LessonStore to emit a change", function(done){
			LessonStore.emitChange();
		 	expect(EventEmitter.prototype.emit).toHaveBeenCalled();
			done();
		});

		it("Calls LessonStore to emit CHANGE_EVENT", function(done){
			LessonStore.emitChange();
		 	expect(EventEmitter.prototype.emit).toHaveBeenCalledWith(CHANGE_EVENT);
			done();
		});
	});

	describe("addChangeListener", function(){
		it("Calls LessonStore to add a Listener", function(done){
			LessonStore.addChangeListener(callback);
		 	expect(EventEmitter.prototype.on).toHaveBeenCalled();
			done();
		});

		it("Calls LessonStore to add a Listener with callback", function(done){
			LessonStore.addChangeListener(callback);
		 	expect(EventEmitter.prototype.on).toHaveBeenCalledWith(CHANGE_EVENT, callback);
			done();
		});
	});
	
	describe("removeChangeListener", function(){
		it("Calls LessonStore to remove a Listener", function(done){
			LessonStore.removeChangeListener(callback);
		 	expect(EventEmitter.prototype.removeListener).toHaveBeenCalled();
			done();
		});

		it("Calls LessonStore to remove a Listener with callback", function(done){
			LessonStore.removeChangeListener(callback);
		 	expect(EventEmitter.prototype.removeListener).toHaveBeenCalledWith(CHANGE_EVENT, callback);
			done();
		});
	});

	describe("disptachToken logic", function() {
		describe("When action.type is RECEIVE_LESSONS", function(){
			var payload = {
				action: {
					type: Constants.ActionTypes.RECEIVE_LESSONS, 
					json: {lessons: "Helloworld"} 
				}
			}; 
			it("calls lessonstore emit change", function(done){
				callbackFunc(payload);
				expect(EventEmitter.prototype.emit).toHaveBeenCalled();
				done();

			});
		});
	});	 
});
