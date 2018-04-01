//Criação da Classe Negociacao

// atributos com _ não pode ser aessado fora da classe
class Negociacao {
	//Criação do construtor onde colocamos os atributos da classe
	constructor(data,quantidade,valor){
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;
	}

	//Metodo que calcula o volume
	getVolume(){
		return this._quantidade * this._valor;
	}

	//Retorna a data
	getData(){
		return this._data;
	}

	//Retorna a quantidade
	getQuantidade(){
		return this._quantidade;
	}

	//Retorna o valor
	getValor(){
		return this._valor;
	}
}