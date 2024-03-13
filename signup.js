// login details in database

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const { LoginDetails } = require('./schema.js')
const cors = require('cors')
/** 
 * Login Details
 * 
 * Adding new user/add-signup
 * post : user details
 * 
 * 
 * Database Schema
 * name,email,password
 * 
*/

const port = "https://backend-6xns.onrender.com"
const app = express()
app.use(bodyParser.json())
// const corsOptions =[
//     {
//         origin:'http://localhost:5000',
//     },
//     {
//         origin:'https://backend-6xns.onrender.com/'
//     }


// ]
app.use(cors())
async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://test:test@cluster0.4igf4wa.mongodb.net/LoginDB?retryWrites=true&w=majority&appName=Cluster0')
        console.log('DB connection established ;)')
       
    } catch(error) {
        console.log(error)
        console.log('Cloudn\'t establish connection :(')
    }
}

connectToDb()
app.listen(port || 5000, function() {
    console.log('Listening on port 5000...')
})



app.post('/add-signup', async function(request, response) {
    try {
        await LoginDetails.create({
            "Name" : request.body.Name,
            "Email" : request.body.Email,
            "Password" : request.body.Password
        })
        response.status(201).json({
            "status" : "success",
            "message" : "entry created"
        })
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : error
        })
    }
})

