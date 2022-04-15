const roteador = require('express').Router({mergeParams: true})
const Tabela = require('./TabelaProduto')
const Produto = require('./Produto')

roteador.get('/', async (req, res) => {
    const produtos = await Tabela.listar(req.fornecedor.id)
    res.send(
        JSON.stringify(produtos)
    )
})

roteador.post('/', async (req, res, next) => {
    try{
        const idFornecedor = req.fornecedor.id
        const body = req.body
        const dados = Object.assign({}, body, {fornecedor: idFornecedor})
        const produto = new Produto(dados)
        await produto.criar()
        res.status(201)
        res.send(produto)
    } catch (e){
        next(e)
    }
})

roteador.delete('/:idProduto', async(req, res) => {
    const dados = {
        id: req.params.idProduto,
        fornecedor: req.fornecedor.id
    }

    const produto = new Produto(dados)
    await produto.apagar()
    res.status(204)
    res.end()
})

module.exports = roteador;
