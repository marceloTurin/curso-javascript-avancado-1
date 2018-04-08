class ListaNegociacoes{

	constructor() {
		this._negociacoes = [];
	}

	adicionaLista(negociacao){
		this._negociacoes.push(negociacao);
	}

	get negociacoes(){

		return this._negociacoes;
	}
}

