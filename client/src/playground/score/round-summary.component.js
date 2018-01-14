// @flow
import React from 'react'
import { Table } from 'semantic-ui-react'

import { type RoundProp } from './score.component'

type RoundSummaryProps = {
  rounds: RoundProp[],
}

const renderSingleRound = (round: RoundProp) => (
  <Table.Row key={round.roundNumber}>
    <Table.Cell>{round.roundNumber}</Table.Cell>
    <Table.Cell>{round.winner}</Table.Cell>
  </Table.Row>
)

const renderHeaderCell = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Round #</Table.HeaderCell>
      <Table.HeaderCell>Winner</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

const RoundSummary = (props: RoundSummaryProps) => (
  <Table>
    {renderHeaderCell()}

    <Table.Body>
      {props.rounds.map(renderSingleRound)}
    </Table.Body>
  </Table>
)

export default RoundSummary
