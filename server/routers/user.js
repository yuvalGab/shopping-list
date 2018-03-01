const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

const saltRounds = 10

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    req.body.password = hash
	  await User.create(req.body)
  } catch (err) {
    return res.sendStatus(500)
  }

  res.sendStatus(201)
})

router.post('/login', (req, res) => {
  res.send(true)
})

module.exports = router