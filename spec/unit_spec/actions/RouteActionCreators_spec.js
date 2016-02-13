var proxyquire =  require('proxyquire');
var DispatcherMethods = ['handleViewAction'];
var Dispatcher = jasmine.createSpyObj('Dispatcher', DispatcherMethods);
var RouteActionCreators = proxyquire('../../../scripts/actions/RouteActionCreators.js', {'../dispatcher/SuperclassDispatcher.js': Dispatcher});
var Constants = require('../../../scripts/constants/SuperclassConstants.js');
var ActionTypes = Constants.ActionTypes;
var resetter = require('../../spec_helper.js').resetter;

resetter.set({
	objects: [Dispatcher],
	methods: [DispatcherMethods]
});

describe("RouteActionCreators", function(){
	var route = "newRoute";

	beforeEach(function(){
		resetter.resetAll();
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