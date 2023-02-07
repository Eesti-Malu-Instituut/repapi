const express = require('express')
const router = express.Router()
const ping = require('../services/ping')

router.post('/', async function(req, res, next) {
  try {
    res.json(await ping.ping(req))
  } catch (err) {
    console.error(`Error while getting PING `, err.message)
    next(err)
  }
})

module.exports = router