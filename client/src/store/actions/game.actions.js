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

export type GameAction =
  | InitGameAction
  | ResetGameAction

export const actionTypes = {
  GAME_INIT: 'GAME_INIT',
  GAME_RESET: 'GAME_RESET'
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
