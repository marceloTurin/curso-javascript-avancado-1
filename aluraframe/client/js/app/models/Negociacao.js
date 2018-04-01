//Criação da Classe Negociacao
class Negociacao {
	//Criação do construtor onde colocamos os atributos da classe
	constructor(data,quantidade,valor){
		this.data = data;
		this.quantidade = quantidade;
		this.valor = valor;
	}

	//Metodo que calcula o volume
	obtemVolume(){
		return this.quantidade * this.valor;
	}
}