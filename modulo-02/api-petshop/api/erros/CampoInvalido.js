class Campoinvalido extends Error {
    constructor(campo){
        const mensagem = `O campo '${campo}' esta invalido`
        super(mensagem)
        this.name = 'Campo Invalido'
        this.idErro = 1
    }
}

module.exports = Campoinvalido