const express = require('express')
const router = express.Router()
const persoonid = require('../services/persoonid')

router.get('/', async function(req, res, next) {
  try {
    res.json(await persoonid.getOne(req.query.q))
  } catch (err) {
    console.error(`Error while getting PERSOONID `, err.message)
    next(err)
  }
})

module.exports = router