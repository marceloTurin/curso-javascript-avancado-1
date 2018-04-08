class NegociacaoController {


	//Criação do contrutor onde é criado o atributo de instancia com o this
	constructor(){
		//Criação da variavel $ que liga o querySelector ao document
		let $ = document.querySelector.bind(document);

		//Selecão dos input do formulário
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
	}

	adiciona(event){
		event.preventDefault();
		
		console.log(typeof(this._inputData.value)); // Ver o tipo de valor da variavel
		console.log(this._inputData.value);

		//Tranforma a String em um array dividindo os valores com o split quando o parametro for - 
		let data = new Date(this._inputData.value.split('-'));

		//O mesmo exemplo usando replace com expressão regular trocando o - pela virgula
		let data = new Date(this._inputData.value.replace(/-/g, ','));

		console.log(data);



		let negociacao = new Negociacao{
			this._inputData.value,
			this._inputQuantidade.value,
			this._inputData.value
		}
	}
}