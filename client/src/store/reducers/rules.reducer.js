// @flow
import {
  actionTypes as rulesActionTypes,
  type RulesAction
} from '../actions/rules.actions'

export type ShapeRule = {
  kind: string,
  beats: string
}

export type RulesState = {
  roundsToWin: number,
  shapes: ShapeRule[]
}

const initialState: RulesState = {
  roundsToWin: 0,
  shapes: []
}

export default (state: RulesState = initialState, action: RulesAction): RulesState => {
  switch (action.type) {
    case rulesActionTypes.RULES_LOAD_SUCCESS: {
      const { roundsToWin, shapeRules } = action.payload
      return { roundsToWin, shapes: shapeRules }
    }

    default:
      return state
  }
}
