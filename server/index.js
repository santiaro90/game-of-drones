const express = require('express')

const config = require('./config')
const middleware = require('./middleware')
const initDb = require('./db')

const run = async () => {
  await initDb()
  const app = express()

  middleware.init(app)

  app.use('/ping', (req, res) => res.status(200).json({ message: 'pong' }))
  app.listen(config.server.PORT, () => console.log(`Started listening on port ${config.server.PORT}`))
}

run().catch(e => console.error(e.message))
