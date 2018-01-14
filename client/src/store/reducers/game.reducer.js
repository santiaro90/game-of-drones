// @flow
type Rule = {
  kind: string,
  beats: string
}

type Player = {
  id: string,
  name: string
}

export type Game = {
  players: Player[],
  currentRound: number,
  rules: Rule[]
}

const initialState: Game = {
  players: [],
  currentRound: 1,
  rules: []
}

export default (state: Game = initialState, action: any) => state
