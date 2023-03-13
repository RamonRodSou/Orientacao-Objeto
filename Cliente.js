
export class Cliente  { // Propriedade, Atributos e Campus mode ou uma instancia
    nome;
    _cpf;

    get cpf () {
       return this._cpf;
    }

    constructor(nome, cpf) {

        this.nome = nome;
        this._cpf = cpf;
    }

}

