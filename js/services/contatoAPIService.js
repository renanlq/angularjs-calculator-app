angular.module("listaTelefonica").factory("contatoAPI", function ($http, configValue, serialGenerator, $filter) {
	var _getContatos = function () {
		// Quando por requisição
		return $http.get("data/contatos.json");

		// Lista de objetos
		/*return [{id: 1, serial: serialGenerator.generate(), nome: "Renan Lemes Queiroz", telefone: "(61) 9999-6666", nascimento: "10/05/1989", data: new Date(), operadora: {codigo: 15, nome: $filter("uppercase")("Vivo"), categoria: "Celular", cor: "orange", preco: 2}},
			{id: 2, serial: serialGenerator.generate(), nome: "Pedro de Queiroz Filho", telefone: "(61) 3333-2222", nascimento: "11/03/1934", data: new Date(), operadora: {codigo: 41, nome: $filter("uppercase")("Tim"), categoria: "Celular", cor: "green", preco: 3}},
			{id: 3, serial: serialGenerator.generate(), nome: "Claudio Alves Queiroz", telefone: "(61) 98888-2222", nascimento: "29/11/1971", data: new Date(), operadora: {codigo: 25, nome: $filter("uppercase")("GVT"), categoria: "Fixa", cor: "grey", preco: 2}}];*/
	};

	var _getContato = function (pId) {
		// Quando por requisição
		//return $http.get(configValue.baseURL + "/contatos/"+ pId);

		// Lista de objetos
		var arrContatos = _getContatos();

		for (var i = arrContatos.length; i--;) {
		  if (arrContatos[i].id.toString() === pId) return arrContatos[i];
		}
	};

	var _saveContato = function (pContato) {
		return $http.post(configValue.baseURL + "/contatos", pContato);
	};

	return {
		getContatos: _getContatos,
		getContato: _getContato,
		saveContato: _saveContato
	};
});