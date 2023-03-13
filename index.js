
import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente ('Ricardo', 11122233309)  // Objeto, 
const cliente2 = new Cliente ('Alice', 88822233309)

const contaCorrenteRicardo = new ContaCorrente (1001, cliente1);
    contaCorrenteRicardo.depositar (500);
const contaCorrenteAlice = new ContaCorrente (1002, cliente2);

    let valor = 200;
    contaCorrenteRicardo.transferir (valor, contaCorrenteAlice);
    console.log(contaCorrenteAlice);
    console.log(contaCorrenteRicardo);
    console.log('Total de Contas Criadas: ',ContaCorrente.numeroDeContas);

