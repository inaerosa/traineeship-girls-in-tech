const express = require('express')
const app = express()
const dotenv = require ('dotenv')
dotenv.config()
const data = require('./data.json')
const PORT = process.env.PORT
app.use(express.json())
let establishments = [data]
const Exception = require('./errors/Exception')

app.get('/api', (req, res) => {
    res.json(establishments)
})

app.get('/api/branch', (req, res) => {
    var filtrered = establishments.filter(merchant => merchant.branch == true)
    res.json(filtrered)
})

app.get('/api/headOffice', (req, res) => {
    var filtrered = establishments.filter(merchant => merchant.branch == false)
    res.json(filtrered)
})

app.get('/api/:id', (req, res) => {
    try{
        const {id} = req.params;
        const establhisment = establishments.find(establhisment => establhisment.id == id)
        res.status(200).json(establhisment)
    } catch(err){
        res.send(500).json(err.message)
    }
})

app.post('/api', (req, res) => {
    try{
        let establishment = req.body;
        establishments.push(establishment)
        res.status(200).send(establishment)
    } catch(err){
        res.status(500).send({message: `${err.message} - Error to POST establhisment`})
    }
})

app.put('/api/:id/status', (req, res) => {
    try{
        const {id} = req.params;
        const index = establishments.findIndex(merchant => merchant.id == Number(id))
        const {status} = req.body            
        if(index == -1){
            throw Exception.notFound('ID not found')
        }
        if (status != 'OPEN' && status != 'CLOSED'){
            throw Exception.invalidData('Status must be OPEN or CLOSED')
        }
        return res.json(establishments[index].status = status)
    } catch(err){
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})