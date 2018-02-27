const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const userRouter = require('./routers/user')

app.use(bodyParser.json())
app.use(express.static('../client/build'))
app.use('/api/user', userRouter)

app.all('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
})

app.listen(3001, () => {
  console.log('shopping list server running on port 3001...')
})