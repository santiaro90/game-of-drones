const express = require('express')

const config = require('./config')
const middleware = require('./middleware')
const db = require('./db')

const run = async () => {
  await db.init()
  const models = require('./models')  // models get created on module load

  await models.seed()

  const app = express()
  middleware.init(app)

  app.use('/ping', (req, res) => res.status(200).json({ message: 'pong' }))  // just to test if server's up
  app.listen(config.server.PORT, () => console.log(`Started listening on port ${config.server.PORT}`))
}

run().catch(e => console.error(e.stack))
