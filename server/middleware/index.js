const init = (app) => {
  app.use(require('./logger'))
  app.use(require('./body-parser').json)
  app.use(require('./body-parser').urlencoded)
  app.use(require('./cors'))
}

module.exports = { init }
