angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, serialGenerator, $location, listaOperadoras) {
	$scope.titulo = "Novo contato";
	$scope.message = [];
	$scope.contatos = [];
	$scope.operadoras = [];

	// Quando por requisição
	console.log(listaOperadoras.data);
	$scope.operadoras = listaOperadoras.data;
	
	// Por lista de objeto
	//$scope.operadoras = listaOperadoras;

	$scope.adicionarContato = function(pContato) {
		pContato.serial = serialGenerator.generate();
		pContato.data = new Date();

		// Evitar LER o $scope dentro das controles!!! 
		//function() -> $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
		
		// Por parametro
		//function(pNome, pTelefone) -> $scope.contatos.push({nome: pNome, telefone: pTelefone});

		// Por objeto
		$scope.contatos.push(angular.copy(pContato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();

		// Utilizando AJAX
		/*contatoAPI.saveContato(pContato).success(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos(); //ou $scope.contatos.push(pContato);
		});*/

		$location.path("/contatos");
	};
});