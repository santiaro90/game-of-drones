// @flow
import {
  actionTypes as gameActionTypes,
  type GameAction,
  type PlayerPayload
} from '../actions/game.actions'

import {
  actionTypes as roundActionTypes,
  type RoundAction
} from '../actions/rounds.actions'

export type Game = {
  players: {
    current?: PlayerPayload,
    next?: PlayerPayload,
    all: PlayerPayload[]
  },
  currentRound: number,
  started: boolean
}

const initialState: Game = {
  currentRound: 1,
  started: false,
  players: {
    all: []
  }
}

export default (state: Game = initialState, action: GameAction | RoundAction): Game => {
  switch (action.type) {
    case gameActionTypes.GAME_INIT: {
      const players: Player[] = action.payload.players

      return {
        started: true,
        currentRound: 1,
        players: {
          all: players,
          current: players[0],
          next: players[1]
        }
      }
    }

    case roundActionTypes.ROUND_SELECT_SHAPE: {
      const { player } = action.payload
      const nextPlayerIndex = state.players.all.indexOf(player) + 1

      if (nextPlayerIndex === state.players.all.length) {  // everyone's had their turns
        return state
      }

      return {
        ...state,
        players: {
          ...state.players,
          current: state.players.next,
          next: state.players.all[nextPlayerIndex]
        }
      }
    }

    case roundActionTypes.ROUND_FINISH: {
      const { winner } = action.payload

      const increaseWonCount = (player) => {
        const won = player.id === winner
        return won ? ({ ...player, roundsWon: player.roundsWon + 1 }) : player
      }

      return {
        ...state,
        currentRound: action.payload.currentRound + 1,
        players: {
          all: state.players.all.map(increaseWonCount),
          current: state.players.all[0],
          next: state.players.all[1]
        }
      }
    }

    default:
      return state
  }
}
