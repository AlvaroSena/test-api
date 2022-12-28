const { Client } = require('faunadb')
require('dotenv').config()

const fuana = new Client({
  secret: process.env.FAUNADB_KEY
})

module.exports = fuana