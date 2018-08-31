angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, listaContatos) {
	$scope.titulo = "Lista Telefonica";
	$scope.message = [];
	$scope.contatos = [];
	$scope.contato = {data: 1034218800000};

	// Quando por requisição
	$scope.contatos = listaContatos.data;
	
	// Por lista de objeto
	//$scope.contatos = listaContatos;

	$scope.apagarContatos = function(pContatos) {
		$scope.contatos = pContatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};

	$scope.isContatoSelecionado = function (pContatos) {
		return pContatos.some(function (contato) {
			return contato.selecionado;
		});
	};

	$scope.ordernarPor = function (pCampo) {
		$scope.criterioDaOrdenacao = pCampo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	$scope.classe = "clSelecionado";
});