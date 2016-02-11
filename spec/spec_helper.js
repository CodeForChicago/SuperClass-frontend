var _objects;
var _methods;
function storageMock() {
    var storage = {};

    return {
      setItem: function(key, value) {
        storage[key] = value || '';
      },
      getItem: function(key) {
        return storage[key] || null;
      },
      removeItem: function(key) {
        delete storage[key];
      },
      get length() {
        return Object.keys(storage).length;
      },
      key: function(i) {
        var keys = Object.keys(storage);
        return keys[i] || null;
      }
    };
}

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
	},

	sessionStorageMock: {
		init: function() {
			global.sessionStorage = storageMock();
			return sessionStorage
		},
		destroy: function() {
			global.sessionStorage = null;
			return null
		}
	}
};

module.exports = Spec_Helper;
