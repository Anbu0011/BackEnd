// login details in database

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const { LoginDetails } = require('./schema.js')

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


const app = express()
app.use(bodyParser.json())

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
app.listen(5000, function() {
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

