// @flow
import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

import { type PlayerProp } from './score.component'

type ScoreSummaryProps = {
  players: PlayerProp[],
}

const renderScoreForPlayer = (player: PlayerProp) => (
  <Segment key={player.id} circular>
    <Header as="h3">
      {player.name}
      <Header.Subheader>{player.roundsWon}</Header.Subheader>
    </Header>
  </Segment>
)

const ScoreSummary = (props: ScoreSummaryProps) => (
  <Container>
    {props.players.map(renderScoreForPlayer)}
  </Container>
)

export default ScoreSummary
