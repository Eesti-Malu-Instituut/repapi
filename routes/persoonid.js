const express = require('express')
const router = express.Router()
const persoonid = require('../services/persoonid')

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await persoonid.getOne(req.params.id))
  } catch (err) {
    console.error(`Error while getting PERSOONID `, err.message)
    next(err)
  }
})
router.get('/', async function(req, res, next) {
  try {
    res.json(await persoonid.getMultiple(req.query.page))
  } catch (err) {
    console.error(`Error while getting PERSOONID `, err.message)
    next(err)
  }
})

module.exports = router