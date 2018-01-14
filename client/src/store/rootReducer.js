// @flow
import { combineReducers, type CombinedReducer } from 'redux';

import game, { type Game } from './reducers/game.reducer'

export type AppState = {
  game: Game
}

const rootReducer: CombinedReducer<AppState, {}> = combineReducers({ game })

export default rootReducer
