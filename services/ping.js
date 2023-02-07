// const db = require('./db')
// const helper = require('../helper')
// const config = require('../config')

async function ping(req) {

  console.log(req)
  return {
    reQ: JSON.stringify(req, null, 2)
  }
}

module.exports = {
  ping
}