// @flow
type Shape = 'rock' | 'paper' | 'scissors'
export type Rule = {
  kind: Shape,
  beats: Shape
}

const initialState: Rule[] = [
  { kind: 'rock', beats: 'scissors'},
  { kind: 'paper', beats: 'rock'},
  { kind: 'scissors', beats: 'paper'}
]

export default (state: Rule[] = initialState, action: *): Rule[] => state
