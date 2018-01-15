const express = require('express')
const path = require('path')

const config = require('./config')
const middleware = require('./middleware')
const db = require('./db')

const run = async () => {
  await db.init()

  const models = require('./models')  // models get created on module load

  await models.seed()

  const api = require('./api')
  const app = express()

  middleware.init(app)

  app.use(api)

  const APP_PATH = path.resolve(__dirname, '../', 'client/build')
  app.use('/', express.static(APP_PATH))
  app.get('*', (req, res) => res.sendFile(`${APP_PATH}/index.html`))

  app.listen(config.server.PORT, () => console.log(`Started listening on port ${config.server.PORT}`))
}

run().catch(e => console.error(e.stack))
