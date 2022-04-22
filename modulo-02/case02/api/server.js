const express = require('express')
const app = express()
const dotenv = require ('dotenv')
dotenv.config()

const PORT = process.env.PORT
app.use(express.json())


const routes = require('./routes/merchantRoutes')

app.use('/merchant', routes)

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})