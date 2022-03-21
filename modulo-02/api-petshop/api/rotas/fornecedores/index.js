const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')

roteador.use('/api/fornecedores', async (req, res) => {
    const resultados = await TabelaFornecedor.listar();
    res.send(
        JSON.stringify(resultados)
    )
})

module.exports = roteador