// @flow
import { getRules } from '../../api/rules'

type RulesPayload = {
  roundsToWin: number,
  shapeRules: { kind: string, beats: string }[]
}

type RulesLoadSuccessAction = {
  type: 'RULES_LOAD_SUCCESS',
  payload: RulesPayload
}

export type RulesAction = RulesLoadSuccessAction

export const actionTypes = {
  RULES_LOAD_SUCCESS: 'RULES_LOAD_SUCCESS'
}

const onLoadRulesSuccess = (rules: RulesPayload): RulesLoadSuccessAction => ({
  type: actionTypes.RULES_LOAD_SUCCESS,
  payload: rules
})

export const loadRules = () => async (dispatch: Function, getState: Function) => {
  try {
    const { rules: existingRules } = getState()

    if (existingRules.shapes.length) {  // already loaded
      return
    }

    const rules = await getRules()
    dispatch(onLoadRulesSuccess(rules))
  } catch (error) {
    // handle error
  }
}
