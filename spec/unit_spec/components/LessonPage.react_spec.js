// var proxyquire = require('proxyquire');
// //var React = jasmine.createSpyObj('react',['createClass']);
// ////var LessonStore = jasmine.createSpyObj('../../../scripts/stores/LessonStore.js');
// //var State = jasmine.createSpyObj('react-router').State;
// var LessonStore = jasmine.createSpyObj('LessonStore',['getLesson','addChangeListener','removeChangeListener','getErrors']);
// var LessonPage = proxyquire('../../../scripts/components/lessons/LessonPage.react.jsx',{/*'react':React,*/'../../../scripts/stores/LessonStore.js':LessonStore});

/////////////////////////////////
// The issue appears to be that the jsx stuff in the LessonPage.react.jsx
// file contains jsx code (the HTML tags), which this js file can't understand.
// There appear to be jasmine extensions that are meant to be compatible
// with this; see:
// https://www.npmjs.com/package/jasmine_react
//
// see also:
// https://stackoverflow.com/questions/31224663/jasmine-test-for-react-causes-webpack-build-to-fail
//
/////////////////////////////////

// it seems to me that the way we'll need to test this is to 
//beforeEach(function(){
//	React.createClass();
//});


//describe("LessonPage", function(){
//	describe("getInitialState", function(){
//		beforeEach(function(){
//			LessonPage.getInitialState();
//		});
//
//		it("calls LessonStore to get lessons", function(done){
//			expect(LessonStore.getLesson).toHaveBeenCalled();
//			done();
//		});
//	});
//})
