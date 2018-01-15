// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { loadRules } from '../store/actions/rules.actions'
import { resetGame } from '../store/actions/game.actions'

type HomeProps = {
  resetGame: () => void,
  loadRules: () => void
}

class Home extends Component<HomeProps> {
  componentWillMount() {
    this.props.resetGame()
    this.props.loadRules()
  }

  render() {
    return (
      <Container textAlign="center">
        <Header as="h2" textAlign="center">Home</Header>

        <Container textAlign="justified" text>
          <p>
            In Game of Drones there are two players trying to conquer each
            other. Players take turns to make their move, choosing Paper, Rock
            or Scissors. Each move beats another, just like the game “Paper,
            rock, scissors”, like so:
          </p>

          <ul>
            <li>Paper beats Rock</li>
            <li>Rock beats scissors</li>
            <li>Scissors beat Paper</li>
          </ul>

          <p>
            The first player to beat the other player 3 times wins the battle.
          </p>
        </Container>

        <Button as={Link} to="/playground" primary>Play now!</Button>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  resetGame: () => dispatch(resetGame()),
  loadRules: () => dispatch(loadRules())
})

export default connect(state => state, mapDispatchToProps)(Home)
