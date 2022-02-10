import { Conta } from "./Conta/Conta.js";

export class ContaCorrente extends Conta{
    static numero_contas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numero_contas++;
    }

    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa)
    }
} 