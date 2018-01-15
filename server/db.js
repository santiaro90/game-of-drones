const mongoose = require('mongoose')

const config = require('./config')

const DB_URI = `${config.db.URL}:${config.db.PORT}/${config.db.NAME}`

module.exports = () => {
  const connection = mongoose.connect(DB_URI)

  if (config.IS_DEV) {
    mongoose.set('debug', true)
  }

  return connection
}
