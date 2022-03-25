const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require(`./erros/DadosNaoFornecidos`)
const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
const formatosAceitos = require('./Serializador').formatosAceitos
const SerializadorErro = require('./Serializador').SerializadorErro

app.use(bodyParser.json())

app.use((req, res, next) => {
    let formatoRequisitado = req.header('Accept')

    if(formatoRequisitado === '*/*'){
        formatoRequisitado = 'application/json'
    }
    
    if (formatosAceitos.indexOf(formatoRequisitado) === -1){
        res.status(406)
        res.end()
        return
    }

    res.setHeader('Content-Type', formatoRequisitado);
    next()
})

const roteador = require('./rotas/fornecedores')

app.use('/api/fornecedores', roteador)

app.use((err, req, res, next) => {
    let status = 500

    if(err instanceof NaoEncontrado){
        status = 404
    } else{
        status = 400
    }
    if (err instanceof CampoInvalido || err instanceof DadosNaoFornecidos){
       status = 400
    }

    if (err instanceof ValorNaoSuportado){
        status = 406
    }

    const Serializador = new SerializadorErro(res.getHeader('Content-Type'))

    res.status(status)
    res.send(
        Serializador.serializar({
            mensagem: err.message, 
            id: err.idErro
        })
    )
})

app.listen(config.get('api.porta'), () => console.log('A API está funcionando!'))