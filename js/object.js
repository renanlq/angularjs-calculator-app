// Direct Creation
var pedro = {
	nome: "Pedro",
	idade: 80
};
console.log(pedro);

// Factory Function
var criarPessoa = function (pNome, pIdade) {
	return {
		nome: pNome,
		idade: pIdade
	}; 
};
var maria = criarPessoa("Maria", 20);
console.log(maria);

// Constructor Function
var Pessoa = function (pNome, pIdade) {
	this.nome = pNome;
	this.idade = pIdade;
};

var carlos = new Pessoa("Carlos", 25);
console.log(carlos);
// Ou
var andre = {};
Pessoa.call(andre, "Andre", 12);
console.log(andre);