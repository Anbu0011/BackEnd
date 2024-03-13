const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    Name : {
        type : String
    },
    Email : {
        type : String
    },
    Password : {
        type : String
    }
})

const LoginDetails = mongoose.model('LoginDetails', LoginSchema)

module.exports = { LoginDetails }