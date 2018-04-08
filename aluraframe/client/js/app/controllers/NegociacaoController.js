class NegociacaoController {

	adiciona(event){
		event.preventDefault();
		
		//Criação da variavel $ que liga o querySelector ao document
		let $ = document.querySelector.bind(document);

		let inputData = $("#data");
		let inputQuantidade = $("#quantidade");
		let inputValor = $("#valor");

		console.log(inputData.value);
		console.log(inputValor.value);
		console.log(inputQuantidade.value);
	}
}