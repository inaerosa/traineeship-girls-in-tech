export class Conta{
    constructor(saldo_inicial, cliente, agencia){
        this._saldo = saldo_inicial;
        this._cliente = cliente;
        this._agencia = agencia;
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