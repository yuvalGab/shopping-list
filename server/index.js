const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(express.static('../client/build'))

app.listen(3000, () => {
  console.log('shopping list server running on port 3000...')
})