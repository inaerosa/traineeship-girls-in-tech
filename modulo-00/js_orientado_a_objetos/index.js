import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 123455;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 454687431;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(100)

const valor_sacado = contaCorrenteRicardo.sacar(50)
console.log(valor_sacado)

console.log(contaCorrenteRicardo)