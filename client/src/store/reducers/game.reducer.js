// @flow
import {
  actionTypes as gameActionTypes,
  type GameAction
} from '../actions/game.actions'

type Rule = {
  kind: string,
  beats: string
}

type Player = {
  id: ?string,
  name: string
}

export type Game = {
  players: Player[],
  currentRound: number,
  rules: Rule[],
  started: boolean
}

const initialState: Game = {
  players: [],
  currentRound: 1,
  rules: [],
  started: false
}

export default (state: Game = initialState, { type, payload }: GameAction) => {
  switch (type) {
    case gameActionTypes.INIT_GAME:
      return { ...state, players: payload.players, started: true }
    default:
      return state
  }
}
