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

router.put('/edit', async (req, res) => {
  try {
    const { _id } = req.body
    delete req.body._id
    await Item.updateOne({ _id }, { ...req.body })
  } catch (err) {
    return res.sendStatus(500)
  }

  res.sendStatus(204)
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

router.delete('/deleteSelected', async (req, res) => {
  try {
    const { userId } = req.session
    await Item.deleteMany({ userId, selected: true })
  } catch (err) {
    return send.sendStatus(500)
  }

  res.sendStatus(204)
})

module.exports = router