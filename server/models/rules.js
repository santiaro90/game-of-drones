const mongoose = require('mongoose')

const RulesSchema = new mongoose.Schema({
  roundsToWin: Number,
  shapeRules: [{
    kind: String,
    beats: String
  }]
})

mongoose.model('Rules', RulesSchema)
