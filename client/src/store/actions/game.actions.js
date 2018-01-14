// @flow
type PlayerPayload = { id?: string, name: string }

type InitGameAction = {
  type: 'GAME_INIT',
  payload: { players: PlayerPayload[] }
}

type SelectShapeAction = {
  type: 'GAME_SELECT_SHAPE',
  payload: {
    player: PlayerPayload,
    shape: string
  }
}

export type GameAction =
  | InitGameAction
  | SelectShapeAction

export const actionTypes = {
  INIT_GAME: 'GAME_INIT',
  GAME_SELECT_SHAPE: 'GAME_SELECT_SHAPE'
}

export const initGame = (players: PlayerPayload[]): InitGameAction => {
  const addId = player => ({ name: player.name, id: Date.now().toString() })
  const playersWithId = players.map(addId)

  return {
    type: actionTypes.INIT_GAME,
    payload: { players: playersWithId }
  }
}

export const selectShapeForPlayer = (player: PlayerPayload, shape: string): SelectShapeAction => {
  return {
    type: actionTypes.GAME_SELECT_SHAPE,
    payload: { player, shape }
  }
}
