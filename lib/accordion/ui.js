angular.module("ui", []);

// Inicializando o módulo
angular.module("ui").run(function ($templateCache) {
	$templateCache.put("view/accordion.html" , '<div class="ui-accordion-title" ng-click="open();">{{title}}</div><div class="ui-accordion-content" ng-show="isOpened" ng-transclude></div>');
});

angular.module("ui").directive("uiAccordions", function () {
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

angular.module("ui").directive("uiAccordion", function () {
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