export class Conta{
    constructor(saldo_inicial, cliente, agencia){
        this._saldo = saldo_inicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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

    get tipo(){
        return this._tipo;
    }

    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valor_sacado = taxa*valor;
        if (this._saldo >= valor_sacado){
            this._saldo -= valor_sacado;
            return valor_sacado;
        }
        return 0;
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