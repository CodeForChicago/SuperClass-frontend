var proxyquire = require('proxyquire');
var EventEmitter = { prototype: jasmine.createSpyObj('prototype', ['emit'])};
var events = {EventEmitter: EventEmitter};
var LessonStore = proxyquire("../../../scripts/stores/LessonStore.js",{'events':events} );

describe("LessonStore", function(){

	 it("Calls LessonStore to emit a change", function(done){
		LessonStore.emitChange();
	 	expect(EventEmitter.prototype.emit).toHaveBeenCalled();
		done();
	 });
});
