angular.module("iterate", []);
angular.module("iterate").service("iterate", function () {

	this.forEach = function (array, callback, scope) {
		for (var i = 0; i < array.length; i++) {
			callback.call(scope, i, array[i]); // passes back stuff we need
		}
	};
 });

/*
// forEach method, could be shipped as part of an Object Literal/Module
var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]); // passes back stuff we need
	}
};

// Usage:
// optionally change the scope as final parameter too, like ECMA5
var myNodeList = document.querySelectorAll('li');
forEach(myNodeList, function (index, value) {
	console.log(index, value); // passes index + value back!
});
*/