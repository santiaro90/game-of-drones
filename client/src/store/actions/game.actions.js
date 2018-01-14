// @flow
export const actionTypes = {
  INIT_GAME: 'GAME_INIT'
}

type InitGameAction = { type: 'GAME_INIT' }

export type GameAction =
  InitGameAction

export const initGame = (): InitGameAction => ({ type: actionTypes.INIT_GAME })
