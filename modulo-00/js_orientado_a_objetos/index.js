import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 123455);
const cliente2 = new Cliente("Alice", 454687431);

const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1002);

conta1.depositar(500);
conta1.transferir(200, conta2);

console.log(conta2)