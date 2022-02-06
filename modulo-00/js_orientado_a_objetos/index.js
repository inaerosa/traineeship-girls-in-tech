class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

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
}

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

