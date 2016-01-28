var proxyquire = require('proxyquire');
var EventEmitter = { prototype: jasmine.createSpyObj('prototype', ['emit', 'on', 'removeListener'])};
var events = {EventEmitter: EventEmitter};
var LessonStore = proxyquire("../../../scripts/stores/LessonStore.js",{'events':events} );

describe("LessonStore", function(){
	var CHANGE_EVENT = 'change';
	var callback = function(){};

	describe("emiteChange", function(){
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
	 
});
