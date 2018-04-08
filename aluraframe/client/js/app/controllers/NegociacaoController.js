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
		//A função map percorre cada item do array permetindo você fazer algo com o item
		//Com => criamos uma função Arrow Functions não precisando declarar a function 

		let data = new Date(...
			this._inputData.value
			.split('-')  
			.map((item,indice) => item - indice % 2)
		);

		//O mesmo exemplo usando replace com expressão regular trocando o - pela virgula
		//let data = new Date(this._inputData.value.replace(/-/g, ','));


		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
			);

		console.log(negociacao);

		//Exibe a data no formato 21/08/1997
		let diaMesAno = negociacao.data.getDate() 
		+ '/' + (negociacao.data.getMonth() + 1)
		+ '/' + negociacao.data.getFullYear();
		console.log(diaMesAno);
	}
}