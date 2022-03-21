const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')
const roteador = require('./rotas/fornecedores')

app.use(bodyParser.json())

app.get('/api/fornecedores', roteador)

app.listen(3000, () => console.log('A API está funcionando'))