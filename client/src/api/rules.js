import axios from 'axios'

const RULES_URL = `${process.env.REACT_APP_API_BASE_URL}/rules`

export const getRules = async () => {
  try {
    const response = await axios.get(RULES_URL)
    const { roundsToWin, shapeRules: sr } = response.data

    const shapeRules = sr.map(({ kind, beats }) => ({ kind, beats }))

    return Promise.resolve({ roundsToWin, shapeRules })
  } catch (e) {
    return Promise.reject(e.message)
  }
}
