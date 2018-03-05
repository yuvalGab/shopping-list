const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const app = express()
const checkAuth = require('./utils/checkAuth')
const userRouter = require('./routers/user')

app.use(bodyParser.json())
app.use(session({
  secret: 'shopping',
  resave: false,
  saveUninitialized: true
}))
app.use(express.static('../client/build'))
app.use(checkAuth)
app.use('/api/user', userRouter)

app.all('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'))
})

app.listen(3001, () => {
  console.log('shopping list server running on port 3001...')
})