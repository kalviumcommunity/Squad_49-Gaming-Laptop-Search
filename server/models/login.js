const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    Username:String,
    Password:String
})

const logins = mongoose.model('logins',loginSchema)
module.exports = logins