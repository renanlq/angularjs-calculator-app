angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, contatoAPI, detalhesContato) {
	$scope.titulo = "Detalhe do contato";

	/*contatoAPI.getContato($routeParams.id).success(function (contato) {
		$scope.contato = contato;
	});*/
	//$scope.contato = contatoAPI.getContato($routeParams.id);

	$scope.contato = detalhesContato;
});