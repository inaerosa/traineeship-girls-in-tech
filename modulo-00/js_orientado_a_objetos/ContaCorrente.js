import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    _saldo = 0;
    _cliente;

    agencia;

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
        this.agencia = agencia
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