const router = require('express').Router()

router.use('/rules', require('./rules'))

module.exports = router
