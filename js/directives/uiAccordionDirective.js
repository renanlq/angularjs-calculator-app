angular.module("listaTelefonica").directive("uiAccordions", function () {
	return {
		controller: function ($scope, $element, $attrs) {
			var accordions = [];

			this.registerAccordion = function (pAccordion) {
				accordions.push(pAccordion);
			};

			this.closeAll = function () {
				accordions.forEach(function (pAccordion) {
					pAccordion.isOpened = false;
				});
			};
		}
	}
});

angular.module("listaTelefonica").directive("uiAccordion", function () {
	return {
		templateUrl: "view/accordion.html",
		transclude: true,
		scope: {
			title: "@"
		},
		require: "^uiAccordions",
		link: function(pScope, pElement, pAttributes, pController) {
			pController.registerAccordion(pScope);
			pScope.open = function () {
				if (!pScope.isOpened) {
					pController.closeAll();
					pScope.isOpened = true;
				}
				else {
					pScope.isOpened = false;
				}
			};
		}
	};
});