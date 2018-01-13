const morgan = require('morgan')

const config = require('../config')

if (config.IS_DEV) {
  module.exports = morgan(config.logger.LOG_FORMAT)
} else {
  module.exports = (req, res, next) => next()  // no logging in prod/test
}
