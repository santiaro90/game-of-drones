// @flow
import {
  actionTypes as gameActionTypes,
  type GameAction
} from '../actions/game.actions'

import {
  actionTypes as roundActionTypes,
  type RoundAction
} from '../actions/rounds.actions'

export type Round = {
  roundNumber: number,
  winner: string,
  // mapping between player ids and shapes. Ex: { '1': 'rock', '2', 'paper' }
  shapeSelections: { [string]: string }
}

export default (state: Round[] = [], action: GameAction | RoundAction): Round[] => {
  switch (action.type) {
    case gameActionTypes.GAME_INIT: {
      // initialise playerId-shape mapping
      const { players } = action.payload
      // $FlowFixMe
      const shapeSelections = players.reduce((acc, p: *) => ({ ...acc, [p.id]: '' }), {})

      const firstRound: Round = { roundNumber: 1, winner: '', shapeSelections }
      return [firstRound]
    }

    case roundActionTypes.ROUND_SELECT_SHAPE: {
      const { currentRound, player, shape }: any = action.payload

      const round = state[currentRound - 1]  // rounds start at 1
      const updatedRound = {
        ...round,
        shapeSelections: { ...round.shapeSelections, [player.id]: shape.kind }
      }

      return [...state.slice(0, -1), updatedRound]
    }

    case roundActionTypes.ROUND_FINISH: {
      const { currentRound, winner } = action.payload

      const round = state[currentRound - 1]
      const cleanShapeSelections = Object
        .keys(round.shapeSelections)
        .reduce((acc, playerId) => ({ ...acc, [playerId]: '' }), {})

      const updatedRound = { ...round, winner }
      const nextRound = {
        roundNumber: currentRound + 1,
        winner: '',
        shapeSelections: cleanShapeSelections
      }

      return [...state.slice(0, currentRound - 1), updatedRound, nextRound]
    }

    default:
      return state
  }
}
