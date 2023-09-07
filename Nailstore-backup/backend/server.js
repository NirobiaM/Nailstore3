/*
    Ctrl + ~
    shortcut for opening the terminal window
*/
require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')

// mongo-related stuff
const mongoose = require('mongoose')
const userModel = require('./models/userModel.js')
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI)
    .then(()=>{console.log(`connected to mongoDB`)})
// tell the server to use cors
app.use(cors())
// tell the server to parse json automatically
app.use(express.json())

// cookie/jwt stuff


app.get('/', (req,res)=>{
    console.log('hi')
})

app.get('/signup', (req, res) => {
    let newUser = new userModel(req.query)
    newUser.save()
        .then(mdbRes => {
            console.log(`New user signed up`)
            res.status(200).json(mdbRes)
        })
        .catch(err => {
            console.log(`Something went wrong`)
            res.status(500).json(err)
        })
})

app.get('/login', (req, res) => {
    userModel.find(req.query)
        .then(()=>{
            console.log(`User logged in`)
            res.status(200).send('success')
        })
        .catch(err => {
            console.log(`Something went wrong`)
            res.status(500).json(err)
        })
})

const PORT = process.env.PORT || 4321

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
})