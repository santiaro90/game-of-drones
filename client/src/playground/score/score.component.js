// @flow
import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import ScoreSummary from './score-summary.component'
import RoundSummary from './round-summary.component'

export type PlayerProp = { id?: string, name: string, roundsWon?: number }
export type RoundProp = { roundNumber: number, winner: string }
type ScoreProps = {
  players: PlayerProp[],
  rounds: RoundProp[]
}

const Score = (props: ScoreProps) => (
  <Container textAlign="center">
    <Header as="h2">Score</Header>
    <ScoreSummary players={props.players} />
    <RoundSummary rounds={props.rounds} />
  </Container>
)

export default Score
