class View {
    
    //Classe pai que recebe o elemento das classes filhas
    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){}

    update(model){
		this._elemento.innerHTML = this._template(model);
	}
}