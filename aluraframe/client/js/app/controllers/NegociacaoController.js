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

		//Aula 3 Exercicio exemplo não funcional
		let numeros = [3,2,11,20,8,7];
		let novosNumeros = [];

		numeros.forEach(item => {
			if (item %2 != 0) {
				novosNumeros.push(item *2);
			}
			else{
				novosNumeros.push(item);
			}
		});

		//Aula 3 Exercicio exemplos funcionais
		let novosNumeros = numeros.map(item =>  item % 2 ? item * 2 : item);
		console.log(novosNumeros);

		let novosNumeros = numeros.map((item)=> (item%2 +1 ) * item);
		console.log(novosNumeros);


		console.log(novosNumeros);
		
		//Aula 3 Exercicios arrow
		var aprovados = avaliacoes
		.filter(prova => prova.nota >=7)
		.map(prova => prova.aluno.nome);
	}
}