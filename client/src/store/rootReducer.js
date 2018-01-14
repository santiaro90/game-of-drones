// @flow
import { combineReducers, type CombinedReducer } from 'redux'

import game, { type Game } from './reducers/game.reducer'
import rounds, { type Round } from './reducers/rounds.reducer'
import rules, { type Rule } from './reducers/rules.reducer'

export type AppState = {
  game: Game,
  rounds: Round[],
  rules: Rule[],
}

const rootReducer: CombinedReducer<AppState, *> = combineReducers({
  game,
  rounds,
  rules
})

export default rootReducer
