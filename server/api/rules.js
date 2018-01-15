const router = require('express').Router()

const Rules = require('mongoose').model('Rules')

router.get('/', async (req, res, next) => {
  try {
    const rules = await Rules.findOne()
    res.json(rules)
  } catch (e) {
    next(e)
  }
})

module.exports = router
