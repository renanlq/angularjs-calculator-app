	angular.module("listaTelefonica").provider("serialGenerator", function (configConstant) {
	var _length = configConstant.baseSerialLength;

	this.getLength = function () {
		return _length;
	};

	this.setLength = function (pLength) {
		_length = pLength;
	};

	this.$get = function () {
		return {
			generate: function () {
				var serial = "";
				while (serial.length < _length) {
					serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
				}
				return serial;
			}
		}
	};
 });