// @flow
export const actionTypes = {
  INIT_GAME: 'GAME_INIT'
}

type PlayerActionPayload = { id: ?string, name: string }[]

type InitGameAction = {
  type: 'GAME_INIT',
  payload: { players: PlayerActionPayload }
}

export type GameAction =
  InitGameAction

export const initGame = (players: PlayerActionPayload): InitGameAction => {
  const addId = player => ({ name: player.name, id: Date.now().toString() })
  const playersWithId = players.map(addId)

  return {
    type: actionTypes.INIT_GAME,
    payload: { players: playersWithId }
  }
}
