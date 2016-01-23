var LessonStore = require('../../../scripts/stores/LessonStore.js');
//var LessonStoreSpy = jasmine.createSpyObj('LessonStore', ['loadLessons', 'loadLesson','createLesson']);

describe("LessonStore", function(){
	
	// Test LessonStore.getLesson();
	var getting_lesson = LessonStore.getLesson();
	expect(getting_lesson).toEqual({ title: "", link: "", creator: "", summary: "" });

});