const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor

roteador.options('/', (req, res) => {
    res.set('Acess-Control-Allow-Methods', 'GET')
    res.set('Acess-Control-Allow-hEADERS', 'Content-Type')
    res.status(204)
    res.end()
})

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar()
    resposta.status(200)
    const serializador = new SerializadorFornecedor(
        resposta.getHeader('Content-Type')
    )
    resposta.send(
        serializador.serializar(resultados)
    )
})

module.exports = roteador