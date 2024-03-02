const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    Email:String,
    Password:String
})

const logins = mongoose.model('logins',loginSchema)
module.exports = logins