import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numero_contas = 0;

    set cliente(nome){
        if (nome instanceof Cliente){
            this._cliente = nome;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;
        ContaCorrente.numero_contas++;
    }

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor < 0) return;         
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valor_sacado = this.sacar(valor);
        conta.depositar(valor_sacado);
    }
}