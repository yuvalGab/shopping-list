const mongoose = require('mongoose')
const db = require('../utils/db')

var itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item