// @flow
export type PlayerPayload = { id?: string, name: string }

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
  const addId = player => ({ name: player.name, id: (id++).toString(10) })
  const playersWithId = players.map(addId)

  return {
    type: actionTypes.GAME_INIT,
    payload: { players: playersWithId }
  }
}
