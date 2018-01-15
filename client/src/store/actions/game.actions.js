// @flow
export type PlayerPayload = {
  id?: string,
  name: string,
  roundsWon?: number
}

type InitGameAction = {
  type: 'GAME_INIT',
  payload: { players: PlayerPayload[] }
}

type ResetGameAction = {
  type: 'GAME_RESET'
}

type FinishGameAction = {
  type: 'GAME_FINISH',
  payload: { winner: PlayerPayload }
}

export type GameAction =
  | InitGameAction
  | ResetGameAction
  | FinishGameAction

export const actionTypes = {
  GAME_INIT: 'GAME_INIT',
  GAME_RESET: 'GAME_RESET',
  GAME_FINISH: 'GAME_FINISH'
}

let id = 1
export const initGame = (players: PlayerPayload[]): InitGameAction => {
  const initPlayer = player => ({
    name: player.name,
    id: (id++).toString(10),
    roundsWon: 0
  })

  const initialisedPlayers = players.map(initPlayer)

  return {
    type: actionTypes.GAME_INIT,
    payload: { players: initialisedPlayers }
  }
}

export const resetGame = (): ResetGameAction => ({ type: actionTypes.GAME_RESET })

const finishGame = (winner: PlayerPayload): FinishGameAction => ({
  type: actionTypes.GAME_FINISH,
  payload: { winner }
})

export const detectGameWinner = () => (dispatch: Function, getState: Function) => {
  const { game, rules } = getState()
  const winner = game.players.all.find(p => p.roundsWon === rules.roundsToWin)

  if (winner) {
    dispatch(finishGame(winner))
  }
}
