var proxyquire =  require('proxyquire');
var Dispatcher = jasmine.createSpyObj('Dispatcher', ['handleViewAction']);
var RouteActionCreators = proxyquire('../../../scripts/actions/RouteActionCreators.js', {'../dispatcher/SuperclassDispatcher.js': Dispatcher});
var Constants = require('../../../scripts/constants/SuperclassConstants.js');
var ActionTypes = Constants.ActionTypes;

describe("RouteActionCreators", function(){
	var route = "newRoute";

	beforeEach(function(){
		RouteActionCreators.redirect(route);
	});

	it("It calls Dispatcher to handleViewAction", function(done){
		expect(Dispatcher.handleViewAction).toHaveBeenCalled();
		done();
	});	

	it("it calls Dispatcher to handleViewAction with", function(done){
		expect(Dispatcher.handleViewAction).toHaveBeenCalledWith({
			type: ActionTypes.REDIRECT,
			route: "newRoute"
		});
		done();
	});
});