const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor

roteador.get('/', async (req, res) => {
    const resultados = await TabelaFornecedor.listar()
    res.status(200)
    const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'))
    res.send(
        serializador.serializar(resultados)
    )
})

roteador.post('/', async (req, res, next) => {
    try{
        const dadosRecebidos = req.body
        const fornecedor = new Fornecedor(dadosRecebidos)
        await fornecedor.criar()
        res.status(201)
        const serializador = new SerializadorFornecedor(
            res.getHeader('Content-Type')
        )
        res.send(
            serializador.serializar(fornecedor)
        )
    } catch(e){
        next(e)
    }
    
})

roteador.get('/:idFornecedor', async (req, res, next) => {
    try{
        const id = req.params.idFornecedor;
        const fornecedor = new Fornecedor({ id : id})
        await fornecedor.carregar();
        res.status(200)
        const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'), ['email', 'dataCriacao', 'dataAtualizacao', 'versao'])
        res.send(
            serializador.serializar(fornecedor)
        )
    } catch (e){
        next(e)
    }
})

roteador.put('/:idFornecedor', async(req, res, prox) => {
    try{
        const id = req.params.idFornecedor;
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, {id:id})
        const fornecedor = new Fornecedor(dados)
        await fornecedor.atualizar()
        res.status(204)
        res.end()
    } catch (e){
        prox(e)
    }
    
})

roteador.delete('/:idFornecedor', async(req, res, next) => {
    try{
        const id = req.params.idFornecedor;
        const fornecedor = new Fornecedor({id:id})
        await fornecedor.carregar()
        await fornecedor.remover()
        res.status(204)
        res.end()
    } catch(e){
        next(e)
    }
})

module.exports = roteador