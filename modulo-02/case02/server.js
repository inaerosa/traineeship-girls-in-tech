const express = require('express')
const app = express();
const PORT = process.dotenv.PORT || 3000  
const data = require('./data.json')

class Establishment {
    constructor (name, opening_hours, latitude, longitude, avg_ticket, total_employees, region, status, matriz){
        this.name = name,
        this.opening_hours = opening_hours,
        this.latitude = latitude,
        this.longitude = longitude, 
        this.avg_ticket = avg_ticket,
        this.total_employees = total_employees,
        this.region = region, 
        this.status = status, 
        this.matriz = matriz
    }
}

const establishments = []

app.get('/api', (req, res) => {
    res.json(data)
})

app.post('/api', (req, res) => {
})

app.put('/api/:id', (req, res) => {

})

app.delete('/api/:id', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})