const express = require('express')
const app = express()
const dotenv = require ('dotenv')
dotenv.config()
const data = require('./data.json')
const PORT = process.env.PORT
app.use(express.json())
let establishments = [data]

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


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})