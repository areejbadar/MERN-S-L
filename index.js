const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://areejbadar11:Areej11%40@cluster0.0uqkrah.mongodb.net/')

mongoose.connect('mongodb://localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true })

app.post('/add', (req, res => {
    const task = req.body.task;
}))
app.listen(3001, () => {
    console.log('server is running');
})
