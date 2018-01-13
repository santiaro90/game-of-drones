const cors = require('cors')

const config = require('../config')

module.exports = cors({
  optionsSuccessStatus: 200,
  origin: config.cors.ALLOW_ORIGIN
})
