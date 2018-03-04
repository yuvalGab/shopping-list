const mongoose = require('mongoose')
const db = require('../utils/db')
require('mongoose-type-email')

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 12
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  fullName: {
    type: String,
    required: true,
    maxlength: 20
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User