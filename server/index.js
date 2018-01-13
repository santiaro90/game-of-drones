const express = require('express')

const config = require('./config')

const app = express()

app.use('/ping', (req, res) => {
  res.write('pong\n')
  res.status(200)

  res.end()
})

app.listen(config.PORT, () => console.log(`Started listening on port ${config.PORT}`))
