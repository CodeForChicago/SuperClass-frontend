//jasmine_spec
//dispatcher_spec.js

var proxyquire = require('proxyquire');
//var EventEmitter = { prototype: jasmine.createSpyObj('prototype', ['emit', 'on', 'removeListener'])};
//var events = {EventEmitter: EventEmitter} ;
var Dispatcher = jasmine.createSpyObj('Dispatcher', ['dispatch']);
var DispatcherConstructor = jasmine.createSpy('DispatcherConstructor').andReturn(Dispatcher); 
var flux = {Dispatcher: DispatcherConstructor};
var SuperclassDispatcher = proxyquire('../../../scripts/dispatcher/SuperclassDispatcher.js', {'flux':flux});
var SuperclassConstants = require('../../../scripts/constants/SuperclassConstants.js');

var PayloadSources = SuperclassConstants.PayloadSources;

describe('Dispatcher', function(){

	var action = 'code';

	describe('handleServerAction', function(){
		beforeEach(function(){
			SuperclassDispatcher.handleServerAction(action)
		});

		it('calls dispatcher to dispatch', function(done){
			expect(Dispatcher.dispatch).toHaveBeenCalled();
			done();
		});

		it ('calls dispatcher.dispatch with a payload', function(done){
			expect(Dispatcher.dispatch).toHaveBeenCalledWith({
				source: PayloadSources.SERVER_ACTION,
				action: 'code'
			});
			done();
		});
	});

	describe('handleViewAction', function(){

		beforeEach(function(){
			SuperclassDispatcher.handleViewAction(action)
		});

		it ('calls dispatcher to dispatch', function(done){
			expect(Dispatcher.dispatch).toHaveBeenCalled();
			done();
		});

		it ('calls dispatcher.dispatch with a payload', function(done){
			expect(Dispatcher.dispatch).toHaveBeenCalledWith({
				source: PayloadSources.VIEW_ACTION, 
				action: 'code'
			});
			done();
		});

	});



});





//when handle serveraction gets called the dispatcher dispatches the payload
//when handle viewaction gets called the dispatcher dispatches the payload

//dispatch to registered callback with payload
//wait for a registered callback
//register a payload while waiting 
//error if stores are waiting for each other


/*
describe('Dispatcher', function(){
	it('should be able to dispatch to a registered callback with a payload', function () {
  		
  		var Dispatcher = new Dispatcher();
  		var fakePayload = {};
  		Dispatcher.register({}, function (payload) {
  			expect(payload).to.equal(fakePayload);
  		});
  		Dispatcher.dispatch(fakePayload);
 	});

*/


