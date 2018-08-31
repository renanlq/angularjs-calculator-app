angular.module("listaTelefonica").filter("name", function () {
	return function (pInput) {
		var listaDeNomes = pInput.split(" ");
		var listaDeNomesFormatada = listaDeNomes.map(function (pNome) {
			if (/(da|de|do)/.test(pNome)) return pNome;
			return pNome.charAt(0).toUpperCase() + pNome.substring(1).toLowerCase();
		});
		return listaDeNomesFormatada.join(" ");
	};
});