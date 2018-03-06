const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

const saltRounds = 10

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (user) {
     return res.send({ error: 'user already exists' })
    }

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    req.body.password = hash
	  await User.create(req.body)
  } catch (err) {
    return res.sendStatus(500)
  }

  res.sendStatus(201)
})

router.post('/login', async (req, res) => {
  try {
    const { username, password, remember } = req.body
    const user = await User.findOne({ username })
    if (!user) {
      return res.send({ error: 'user does not exist' })
    }

    const result = await bcrypt.compare(password, user.password)
    if (!result) {
      return res.send({ error: 'password does not match' })
    }

    req.session.userId = user._id
    if (remember) {
      req.session.cookie.maxAge = 60480000 // week
    } else {
      req.session.cookie.maxAge = false
    }

  } catch (err) {
    return res.sendStatus(500)
  }
  
  res.send({ error: '' })
})

router.get('/isLogedIn', (req, res) => {
  const { userId } = req.session
  res.send(!!userId)
})

router.get('/logout', (req, res) => {
  req.session.userId = false
  res.send(false)
})

module.exports = router