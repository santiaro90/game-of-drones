// @flow
import { AnyAction, CombinedReducer, combineReducers } from 'redux';

import game, { type Game } from './reducers/game.reducer'

export type AppState = {
  game: Game
}

const rootReducer: CombinedReducer<AppState, AnyAction> = combineReducers({ game })

export default rootReducer
