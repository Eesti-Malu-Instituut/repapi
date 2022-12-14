const db = require('./db')
const helper = require('../helper')
const config = require('../config')

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage)
  const rows = await db.query(
    `SELECT id, allikas, kood, prioriteetPerenimi, prioriteetEesnimi, prioriteetIsanimi, prioriteetEmanimi, prioriteetSünd, prioriteetSurm, prioriteetKirje 
    FROM repis.allikad where isFilter=1 LIMIT ${offset},${config.listPerPage}`
  )
  const data = helper.emptyOrRows(rows)
  const meta = {page}

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}