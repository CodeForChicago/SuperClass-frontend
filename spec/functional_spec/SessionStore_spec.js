var sessionStorageMock = require('../spec_helper.js').sessionStorageMock;

sessionStorageMock.init();
var SessionStore = require('../../scripts/stores/SessionStore.js');

describe ("SessionStore", function() {
	it("Does not have an individual logged in", function(done) {
		expect(SessionStore.getEmail()).toEqual(null);
		done();
	});
			
});

sessionStorageMock.destroy();
