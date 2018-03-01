const mongoose = require('mongoose')
const db = require('../utils/db')

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  fullName: String
})

const User = mongoose.model('User', userSchema)

module.exports = User