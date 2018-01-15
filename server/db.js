const mongoose = require('mongoose')

const config = require('./config')

const init = () => {
  const MONGODB_URI = `${config.db.URL}:${config.db.PORT}/${config.db.NAME}`
  const connection = mongoose.connect(MONGODB_URI, { useMongoClient: true })

  if (config.IS_DEV) {
    mongoose.set('debug', true)
  }

  return connection
}

module.exports = { init }
