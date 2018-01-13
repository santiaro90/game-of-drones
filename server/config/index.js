const config = {
  ENV: process.env.NODE_ENV,
  IS_DEV: process.env.NODE_ENV === 'development',
  IS_PROD: process.env.NODE_ENV === 'production'
}

if (!config.IS_PROD) {
  const { join } = require('path')
  const CONFIG_PATH = join(__dirname, `.env.${config.ENV}`)
  require('dotenv').config({ path: CONFIG_PATH })
}

module.exports = Object.assign(config, {
  PORT: process.env.PORT
})
