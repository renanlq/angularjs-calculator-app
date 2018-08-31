angular.module("listaTelefonica").config(function ($routeProvider) {
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos/contatos.html",
		controller: "listaTelefonicaCtrl",
		resolve: {
			listaContatos: function (contatoAPI) {
				return contatoAPI.getContatos();
			}
		}
	});

	$routeProvider.when("/novo", {
		templateUrl: "view/contatos/novo.html",
		controller: "novoContatoCtrl",
		resolve: {
			listaOperadoras: function (operadoraAPI) {
				return operadoraAPI.getOperadoras();
			}
		}
	});

	$routeProvider.when("/detalhes/:id", {
		templateUrl: "view/contatos/detalhes.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			detalhesContato: function (contatoAPI, $route) {
				return contatoAPI.getContato($route.current.params.id);
			}
		}
	});

	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});

	$routeProvider.otherwise({redirectTo: "/contatos"});
});