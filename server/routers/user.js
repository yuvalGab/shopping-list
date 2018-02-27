const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
  res.send(true)
})

router.post('/login', (req, res) => {
  res.send(true)
})

module.exports = router