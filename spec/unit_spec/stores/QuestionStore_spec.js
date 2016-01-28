var proxyquire = require('proxyquire');
var EventEmitter = { prototype: jasmine.createSpyObj('prototype', ['emit', 'on', 'removeListener'])};
var events = {EventEmitter: EventEmitter};
var QuestionStore = proxyquire("../../../scripts/stores/QuestionStore.js",{'events':events} );

describe("QuestionStore", function(){
	var CHANGE_EVENT = 'change';
	var callback = function(){};

	describe("emiteChange", function(){
		it("Calls LessonStore to emit a change", function(done){
			QuestionStore.emitChange();
		 	expect(EventEmitter.prototype.emit).toHaveBeenCalled();
			done();
		});

		it("Calls QuestionStore to emit CHANGE_EVENT", function(done){
			QuestionStore.emitChange();
		 	expect(EventEmitter.prototype.emit).toHaveBeenCalledWith(CHANGE_EVENT);
			done();
		});
	});

	describe("addChangeListener", function(){
		it("Calls QuestionStore to add a Listener", function(done){
			QuestionStore.addChangeListener(callback);
		 	expect(EventEmitter.prototype.on).toHaveBeenCalled();
			done();
		});

		it("Calls QuestionStore to add a Listener with callback", function(done){
			QuestionStore.addChangeListener(callback);
		 	expect(EventEmitter.prototype.on).toHaveBeenCalledWith(CHANGE_EVENT, callback);
			done();
		});
	});
	
	describe("removeChangeListener", function(){
		it("Calls QuestionStore to remove a Listener", function(done){
			QuestionStore.removeChangeListener(callback);
		 	expect(EventEmitter.prototype.removeListener).toHaveBeenCalled();
			done();
		});

		it("Calls QuestionStore to remove a Listener with callback", function(done){
			QuestionStore.removeChangeListener(callback);
		 	expect(EventEmitter.prototype.removeListener).toHaveBeenCalledWith(CHANGE_EVENT, callback);
			done();
		});
	});
	 
});
