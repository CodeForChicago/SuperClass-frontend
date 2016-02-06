var _objects;
var _methods;

var Spec_Helper = {
	resetter: {
		set: function(resetterPayload){
			_objects = resetterPayload.objects;
			_methods = resetterPayload.methods;
		},

		resetAll: function(){
			 for(var i=0; i < _objects.length; i++){
				var object = _objects[i];
				var method_list = _methods[i];

				for(var j=0; j < method_list.length; j++){
					object[method_list[j]].reset();
				}		
			}
		}
	}
};

module.exports = Spec_Helper;
