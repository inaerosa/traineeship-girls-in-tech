const express = require('express')
const app = express();
const dotenv = require ('dotenv')
dotenv.config();
const data = require('./data.json')
const PORT = process.env.PORT
app.use(express.json())

const establishments = [data]

app.get('/api', (req, res) => {
    res.json(establishments)
})


app.post('/api', (req, res) => {
    try{
        let establishment = req.body;
        console.log(establishment)
        establishments.push(establishment)
        res.status(200).send(establishment)
    } catch(err){
        res.status(500).send({message: `${err.message} - Error to POST establhisment`})
    }
})

app.put('/api/:id', (req, res) => {

})

app.delete('/api/:id', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})