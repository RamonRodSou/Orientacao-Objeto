import { Cliente } from "./Cliente.js";

export class ContaCorrente {

    static numeroDeContas = 0;
    agencia;

    _cliente; // ficou privado, mas eu quero atribuir valores a ele
    _saldo = 0; // Sempre que tiver um "underLine" no inicio da propriedade, quer dizer que é privado e nao devemos mexer.

    //#saldo = 0;  // hashTag Siginifica que o Saldo é Privado ,  https://github.com/tc39/proposal-class-fields#private-fields




    set cliente( novoValor ) { // " set " atribuindo valores ao cliente, proteção para caso tente mudar no codigo o cliente por algo que não seja outro cliente
        
        if( novoValor instanceof Cliente){ // se o novoValor for um Cliente " Ricardo, Alice ..."
            this._cliente = novoValor;

        }
    }

    get cliente () {

        return this._cliente;
    }

    get saldo () {

        return this._saldo;
    }

    constructor (agencia, cliente){

        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;  // para cada vez que for construir uma Classe, vai aumentar o numero de contas +1
    }



    sacar (valor) {
        if(this._saldo >= valor ) { //this se refere " Dessa"
            this._saldo -= valor;
            return valor;
        }else {
            console.log ("Você não tem Saldo Suficiente para o saque");
        }
    }

    depositar (valor) {

        if(valor <= 0 ) return ;  // se essa a oepração for verdadeira ele simplesmente vai sair da função e returnar o processo. u"usando o return na msm linha não precisa de chaves
        this._saldo += valor;
    }

    transferir (valor, conta){  // se chamar a conta dentro do metodo, vai alterarv ou adicionar, pq ela é um Objeto

        const valorSacado = this.sacar(valor); // Tira dessa conta
        conta.depositar(valorSacado);          // Coloca nessa conta
    }
}   