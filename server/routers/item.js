const express = require('express')
const router = express.Router()
const Item = require('../models/item')

router.get('/getAll', async (req, res) => {
  let list = []
  try {
    const { userId } = req.session
    list = await Item.find({ userId })
  } catch (err) {
    return res.sendStatus(500)
  }

  res.send({ error: '', data: list })
})

router.post('/add', async (req, res) => {
  try {
    const { userId } = req.session
    await Item.create({ ...req.body, userId })
  } catch (err) {
    return res.sendStatus(500)
  }

  res.sendStatus(201)
})

router.put('/edit', (req, res) => {
  res.send(true)
})

router.delete('/deleteOne/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Item.deleteOne({ _id: id })
  } catch (err) {
    return res.sendStatus(500)
  }

 res.sendStatus(204)
})

router.delete('/deleteSelected', (req, res) => {
  res.send(true)
})

module.exports = router