//Criação da Classe Negociacao

// atributos com _ não pode ser aessado fora da classe
class Negociacao {
	//Criação do construtor onde colocamos os atributos da classe
	constructor(data,quantidade,valor){
		this._data = data;
		this._quantidade = quantidade;
		this._valor = valor;
		//Congela a variavel instanciada para que não seja alterada os valores dos atributos
		Object.freeze(this);
	}

	//get é um metodo de leitura

	//Metodo que calcula o volume
	get volume(){
		return this._quantidade * this._valor;
	}

	//Retorna a data
	get data(){
		return this._data;
	}

	//Retorna a quantidade
	get quantidade(){
		return this._quantidade;
	}

	//Retorna o valor
	get valor(){
		return this._valor;
	}
}