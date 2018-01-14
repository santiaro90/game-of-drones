// @flow
import { type PlayerPayload } from './game.actions'

type SelectShapeAction = {
  type: 'ROUND_SELECT_SHAPE',
  payload: {
    currentRound: number,
    player: PlayerPayload,
    shape: string
  }
}

type FinishRoundAction = {
  type: 'ROUND_FINISH',
  payload: {
    currentRound: number,
    winner: string
  }
}

export type RoundAction =
  | SelectShapeAction
  | FinishRoundAction

export const actionTypes = {
  ROUND_SELECT_SHAPE: 'ROUND_SELECT_SHAPE',
  ROUND_FINISH: 'ROUND_FINISH'
}

const selectShape = (
  currentRound: number,
  player: PlayerPayload,
  shape: string
): SelectShapeAction => ({
    type: actionTypes.ROUND_SELECT_SHAPE,
    payload: { currentRound, player, shape }
})

const finishRound = (currentRound: number): FinishRoundAction => ({
  type: actionTypes.ROUND_FINISH,
  payload: { currentRound, winner: 'tie' }
})

export const selectShapeForPlayer = (
  currentRound: number,
  player: PlayerPayload,
  shape: string
) => (dispatch: Function, getState: Function) => {
  dispatch(selectShape(currentRound, player, shape))

  const { rounds, game } = getState()

  const { shapeSelections } = rounds[game.currentRound - 1]
  const allPlayersSelected = Object
    .keys(shapeSelections)
    .every(playerId => !!shapeSelections[playerId])  // check for empty selections

  if (allPlayersSelected) {
    dispatch(finishRound(currentRound))
  }
}
