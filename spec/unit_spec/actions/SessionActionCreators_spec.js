//jasmine spec
//SessionActionCreators_spec.js
var proxyquire =  require('proxyquire');
var Dispatcher = jasmine.createSpyObj('Dispatcher', ['handleViewAction']);
var SessionActionCreators = proxyquire('../../../scripts/actions/SessionActionCreators.js', 
	{'../dispatcher/SuperclassDispatcher.js': Dispatcher });

describe("SessionActionCreators", function() {

	describe("signup", function() {
		var email = 'bs1';
		var username = 'bs2';
		var password = 'bs3';
		var passwordConfirmation = 'bs4';
		beforeEach(function() {
			SessionActionCreators.signup(email, username, password, passwordConfirmation );
		});

		it("Dispatches the handleViewAction", function(done) {	
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});
	});

});