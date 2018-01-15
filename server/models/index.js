const mongoose = require('mongoose')

require('./rules')

const seed = async () => {
  const Rules = mongoose.model('Rules')
  await Rules.remove({})

  const ruleSet = new Rules({
    roundsToWin: 3,
    shapeRules: [
      { kind: 'rock', beats: 'scissors' },
      { kind: 'paper', beats: 'rock' },
      { kind: 'scissors', beats: 'paper' }
    ]
  })

  return await ruleSet.save()
}

module.exports = { seed }
