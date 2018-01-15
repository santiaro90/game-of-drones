// @flow
import { detectGameWinner, type PlayerPayload } from './game.actions'

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

const getRoundWinner = (rules, round, players) => {
  const [player1, player2] = players

  const player1Selection = round.shapeSelections[player1.id]
  const player2Selection = round.shapeSelections[player2.id]

  const ruleToCompare = rules.shapes.find(r => r.kind === player1Selection)

  if (ruleToCompare.beats === player2Selection) {
    return player1.id
  } else if (ruleToCompare.kind === player2Selection) {
    return 'tied'
  } else {
    return player2.id
  }
}

const onFinishRound = (currentRound, winner) => ({
  type: actionTypes.ROUND_FINISH,
  payload: { currentRound, winner }
})

const finishRound = (currentRound: number) => (dispatch: Function, getState: Function) => {
  const { rules, rounds, game } = getState()
  const winner = getRoundWinner(rules, rounds[currentRound - 1], game.players.all)

  dispatch(onFinishRound(currentRound, winner))
  dispatch(detectGameWinner())
}

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
