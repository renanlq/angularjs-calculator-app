angular.module("listaTelefonica").directive("uiDate", function ($filter) {
	return {
		require: "ngModel",
		link: function (pScope, pElement, pAttributes, pController) {
			var _formatDate = function (pDate) {
				pDate = pDate.replace(/[^0-9]+/g, "");
				if (pDate.length > 2) {
					pDate = pDate.substring(0, 2) + "/" + pDate.substring(2);
				};
				if (pDate.length > 5) {
					pDate = pDate.substring(0, 5) + "/" + pDate.substring(5, 9);
				};

				return pDate;
			};

			pElement.bind("keyup", function () {
				pController.$setViewValue(_formatDate(pController.$viewValue));
				pController.$render();
			});

			pController.$parsers.push(function (pValue) {
				if (pValue.length === 10) {
					var dateArray = pValue.split("/");
					return new Date(dateArray[2], dateArray[1]-1, dateArray[0]);
				}	
			});

			pController.$formatters.push(function (pValue) {
				return $filter("date")(pValue, "dd/MM/yyyy");
			});
		}
	};

});