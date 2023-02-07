// const db = require('./db')
// const helper = require('../helper')
// const config = require('../config')
var util = require('util')

async function ping(req) {

  console.log(req)
  return {
    reQ: util.inspect(req)
  }
}

module.exports = {
  ping
}