class NegociacaoController {


	//Criação do contrutor onde é criado o atributo de instancia com o this
	constructor(){
		//Criação da variavel $ que liga o querySelector ao document
		let $ = document.querySelector.bind(document);

		//Selecão dos input do formulário
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		this._listaNegociacoes = new ListaNegociacoes();
	}

	adiciona(event){
		event.preventDefault();
		
		//Adiciona as negociacoes na Lista de Negociações
		this._listaNegociacoes.adicionaLista(this._criaNegociacao());

		//Limpa o formulário
		this._limpaFormulario();
		console.log(this._listaNegociacoes.negociacoes);
	}

	//Pega as informações do formulario e cria uma negociação
	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
			);

	}

	//Limpa o formulário depois de inserir
	_limpaFormulario(){
		this._inputData.value = '';
		this._inputValor.value = 0.0;
		this._inputQuantidade.value = 1;
		this._inputData.focus();
	}
}