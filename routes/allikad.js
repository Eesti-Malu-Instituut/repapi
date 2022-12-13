const express = require('express')
const router = express.Router()
const allikad = require('../services/allikad')

router.get('/', async function(req, res, next) {
  try {
    res.json(await allikad.getMultiple(req.query.page))
  } catch (err) {
    console.error(`Error while getting ALLIKAD `, err.message)
    next(err)
  }
})

module.exports = router