// @flow
import {
  actionTypes as gameActionTypes,
  type GameAction
} from '../actions/game.actions'

type Player = {
  id?: string,
  name: string
}

export type Game = {
  players: {
    current?: Player,
    next?: Player,
    all: Player[]
  },
  currentRound: number,
  started: boolean
}

const initialState: Game = {
  currentRound: 1,
  started: true,
  players: {
    all: [{ id: '1', name: 'santiago' }, { id: '2', name: 'geral' }],
    current: { id: '1', name: 'santiago' },
    next: { id: '2', name: 'geral' },
  }
}

export default (state: Game = initialState, { type, payload }: GameAction): Game => {
  switch (type) {
    case gameActionTypes.INIT_GAME:
      return {
        started: true,
        currentRound: 1,
        players: {
          all: payload.players,
          current: payload.players[0],
          next: payload.players[1]
        }
      }
    default:
      return state
  }
}
