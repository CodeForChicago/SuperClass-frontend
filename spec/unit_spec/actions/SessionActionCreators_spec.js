var proxyquire = require('proxyquire');
var WebAPIUtilsMethods = ['signup', 'login', 'logout'];
var WebAPIUtils = jasmine.createSpyObj('WebAPIUtils', WebAPIUtilsMethods);
var DispatcherMethods = ['handleViewAction'];
var Dispatcher = jasmine.createSpyObj('Dispatcher', DispatcherMethods)
var SessionActionCreators = proxyquire('../../../scripts/actions/SessionActionCreators.js',{'../utils/WebAPIUtils.js': WebAPIUtils, '../dispatcher/SuperclassDispatcher.js': Dispatcher})
var Constants = require('../../../scripts/constants/SuperclassConstants.js');
var ActionTypes = Constants.ActionTypes;
var resetter = require('../../spec_helper.js').resetter;

resetter.set({
	objects: [WebAPIUtils, Dispatcher],
	methods: [WebAPIUtilsMethods, DispatcherMethods]
});

describe("SessionActionCreators", function() {
	beforeEach(function() {
		resetter.resetAll();
	})

	describe("signup", function() {
		var user_email = "me@me.com";
		var user_username = "my_username"; // testing input cleaning
		var user_password = "my_password";
		var user_passwordConfirmation = "my_password";

		beforeEach(function() {
			SessionActionCreators.signup(user_email, user_username, user_password, user_passwordConfirmation);
		});

		it("Tests user signup", function(done){
			expect(WebAPIUtils.signup).toHaveBeenCalled();
			done();
		});

		it("Tests signup w/inputs", function(done){
			expect(WebAPIUtils.signup).toHaveBeenCalledWith("me@me.com","my_username","my_password","my_password");
			done();
		});
		
		it("calls Dispatcher to handleViewAction", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});

		it("calls Dispatcher to handleViewAction with", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
        			type: ActionTypes.SIGNUP_REQUEST,
        			email: user_email,
        			username: user_username,
        			password: user_password,
        			passwordConfirmation: user_passwordConfirmation
			});
			done();
		});
	});
	
	describe("login", function(){
		var email = "me@me.com";
		var password = "my_password";

		beforeEach(function(){
			SessionActionCreators.login(email,password);
		});

		it("Calls WebAPIUtils to log user in", function(done){
			expect(WebAPIUtils.login).toHaveBeenCalled();
			done();
		});

		it("Calls WebAPIUtils to log user in w/inputs", function(done){
			expect(WebAPIUtils.login).toHaveBeenCalledWith("me@me.com", "my_password");
			done();
		});
	});
	describe("logout", function(){
		beforeEach(function(){
			SessionActionCreators.logout();
		});

// do we need to make a WebAPIUtils function for logging out, because none
// currently exists
////////	it("calls WebAPIUtils to logout", function(done){
////////		expect(WebAPIUtils.logout).toHaveBeenCalled();
////////		done();
////////	});

		it("calls Dispatcher to handleViewAction", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalled();
			done();
		});
		
		it("calls Dispatcher to handleViewAction with", function(done){
			expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
				type: ActionTypes.LOGOUT
			});
			done();
		});
	});
});
