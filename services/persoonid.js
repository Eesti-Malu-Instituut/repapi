const db = require('./db')
const helper = require('../helper')
const config = require('../config')

async function getOne(persoon) {
  const row = await db.query(
    `SELECT * FROM pub.nimekirjad WHERE persoon='${persoon}'`
  )
  const data = helper.emptyOrRows(row)
  const meta = {persoon}

  return {
    data,
    meta
  }
}

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage)
  const rows = await db.query(
    `SELECT * 
    FROM pub.nimekirjad LIMIT ${offset},${config.listPerPage}`
  )
  const data = helper.emptyOrRows(rows)
  const meta = {page}

  return {
    data,
    meta
  }
}

module.exports = {
  getOne,
  getMultiple
}