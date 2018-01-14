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

export type GameAction =
  | InitGameAction

export const actionTypes = {
  GAME_INIT: 'GAME_INIT'
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
