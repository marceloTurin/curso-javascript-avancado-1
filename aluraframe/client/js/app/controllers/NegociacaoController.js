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
		

		//let helper = new DateHelper(); //Intancia a classe de DataHelper na variavel helper

		// Chama o metodo estatico textoParaData sem a necessidade de instancia o new da classe 
		let data = DateHelper.textoParaData(this._inputData.value); 


		

		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
			);

		console.log(negociacao);

		//Exibe o texto em formato dia/mês/ano passando o date da classe negociacao
		console.log(DateHelper.dataParaTexto(negociacao.data));

		
		
	
	}
}