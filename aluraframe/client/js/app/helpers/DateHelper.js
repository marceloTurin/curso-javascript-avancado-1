class DateHelper{


	constructor(){
		throw new Error('Essa classe não pode ser instanciada');
	}

	//Metodo estatico
	static dataParaTexto(data){

		//Exibe a data no formato dia/mês/ano
		return data.getDate() 
			+ '/' + (data.getMonth() + 1)
			+ '/' + data.getFullYear();
	}

	//Metodo estatico
	static textoParaData(texto){

		//Tranforma a String em um array dividindo os valores com o split quando o parametro for - 
		//A função map percorre cada item do array permetindo você fazer algo com o item
		//Com => criamos uma função Arrow Functions não precisando declarar a function 

		 return new Date (...texto.split('-').map((item,indice) => item - indice % 2));


		 //O mesmo exemplo usando replace com expressão regular trocando o - pela virgula
		 //let data = new Date(this._inputData.value.replace(/-/g, ','));
		 //console.log(typeof(this._inputData.value)); // Ver o tipo de valor da variavel
		

	}

	
}