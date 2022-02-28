const connectToMongo = require('./db');
const express = require('express')
require("dotenv").config();
var cors= require('cors')
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())


app.use('/api/auth', require('./routes/auth.js'))

app.listen(process.env.PORT || port , () => {
  console.log(`BloodWarriorsIndia app listening on port ${port}`)
})