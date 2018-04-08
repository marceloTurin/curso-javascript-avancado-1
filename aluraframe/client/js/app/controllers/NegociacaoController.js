class NegociacaoController {


	//Criação do contrutor onde é criado o atributo de instancia com o this
	constructor(){
		//Criação da variavel $ que liga o querySelector ao document
		let $ = document.querySelector.bind(document);

		//Selecão dos input do formulário
		this.inputData = $("#data");
		this.inputQuantidade = $("#quantidade");
		this.inputValor = $("#valor");
	}

	adiciona(event){
		event.preventDefault();
		console.log(this.inputData.value);
		console.log(this.inputValor.value);
		console.log(this.inputQuantidade.value);
	}
}