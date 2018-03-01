const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shopping_list')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('shopping_list db connected!')
})

module.exports = db