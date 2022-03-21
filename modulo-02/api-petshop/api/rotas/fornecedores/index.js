const roteador = require('express').Router()

roteador.use('/api/fornecedores', (req, res) => {
    res.send('OK')
})

module.exports = roteador