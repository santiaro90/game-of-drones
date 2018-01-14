// @flow
import { combineReducers, type CombinedReducer } from 'redux';

import game, { type Game } from './reducers/game.reducer'
import rules, { type Rule } from './reducers/rules.reducer'

export type AppState = {
  game: Game,
  rules: Rule[]
}

const rootReducer: CombinedReducer<AppState, {}> = combineReducers({ game, rules })

export default rootReducer
