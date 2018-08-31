angular.module("listaTelefonica").directive("uiAlert", function () {
	return {
		templateUrl: "view/alert.html",
		replace: true,
		restrict: "AE",
		scope: {
			title: "@",
			message: "="
		},
		transclude: true
	};
});
// ou quando nome diferente topic: "@title", directive: "=message"

/*
Restrict, traz diretiva:
A - Restrita ao atributo do elemento, ex: <div ui-alert></div>
E - DRestrita ao elemento, ex: <ui-alert></ui-alert>
C - Restrita a classe do elemento, ex: <div class="ui-alert"></div>
M - Restrita ao comentatio do elemento, ex: <!-- directve: ui-alert -->
*/