angular.module("listaTelefonica").directive("uiPhone", function () {
	return {
		require: "ngModel",
		link: function (pScope, pElement, pAttributes, pController) {
			var _formatNumber = function (pNumber) {
				pNumber = pNumber.replace(/[^0-9]+/g, "");
				//(61) 98888-2222
				if (pNumber.length > 2) {
					pNumber = "(" + pNumber.substring(0, 2) + ") " + pNumber.substring(2);
				};
				if (pNumber.length > 9) {
					pNumber = pNumber.substring(0, 9) + "-" + pNumber.substring(9, 14);
				};
				if (pNumber.length > 14) {
					pNumber = pNumber.replace("-", "").substring(0, 10) + "-" + pNumber.substring(10, 14);
				};

				return pNumber;
			};

			pElement.bind("keyup", function () {
				pController.$setViewValue(_formatNumber(pController.$viewValue));
				pController.$render();
			});

			pController.$parsers.push(function (pValue) {
				if (pValue.length >= 14 && pValue.length < 16) {
					return pValue;
				}
			});
		}
	};
});