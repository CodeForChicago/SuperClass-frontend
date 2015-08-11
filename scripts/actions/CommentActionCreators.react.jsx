var Dispatcher = require('../dispatcher/SuperclassDispatcher.js');
var Constants = require('../constants/SuperclassConstants.js');
var ActionTypes = Constants.ActionTypes;
var WebAPIUtils = require('../utils/WebAPIUtils.js');

CommentActionCreators = {
	createComment: function(body, question_id) {
		Dispatcher.handleViewAction({
			type: ActionTypes.CREATE_COMMENT,
			body: body,
			question_id: question_id
		});
		WebAPIUtils.createComment(body, question_id);
	}
};

module.exports = CommentActionCreators;