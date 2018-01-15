// @flow
type Shape = 'rock' | 'paper' | 'scissors'
export type ShapeRule = {
  kind: Shape,
  beats: Shape
}

export type RulesState = {
  roundsToWin: number,
  shapes: ShapeRule[]
}

const initialState: RulesState = {
  roundsToWin: 3,
  shapes: [
    { kind: 'rock', beats: 'scissors' },
    { kind: 'paper', beats: 'rock' },
    { kind: 'scissors', beats: 'paper' }
  ]
}

export default (state: RulesState = initialState, action: *): RulesState => state
