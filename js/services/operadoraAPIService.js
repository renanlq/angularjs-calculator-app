angular.module("listaTelefonica").service("operadoraAPI", function ($http, configValue) {
	this.getOperadoras = function () {
		// Quando por requisição
		return $http.get("data/operadoras.json");

		// Lista de objetos
		/*return [{codigo: 11, nome: "Claro", categoria: "Celular", cor: "red", preco: 2},
			{codigo: 14, nome: "Oi", categoria: "Celular", cor: "green", preco: 2},
			{codigo: 15, nome: "Vivo", categoria: "Celular", cor: "orange", preco: 1},
			{codigo: 21, nome: "Embratel", categoria: "Fixo", cor: "darkblue", preco: 3},
			{codigo: 25, nome: "GVT", categoria: "Fixo", cor: "grey", preco: 3},
			{codigo: 41, nome: "Tim", categoria: "Celular", cor: "blue", preco: 1}];*/
	};
});