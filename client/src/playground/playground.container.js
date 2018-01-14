// @flow
import React, { Component } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { type StoreState } from '../store'

import { initGame } from '../store/actions/game.actions'

type PlayGroundProps = {
  initGame: *,
  game: {
    round: number,
    started: boolean
  }
}

class PlayGround extends Component<PlayGroundProps> {
  componentDidMount() {
    this.props.initGame()
  }

  render() {
    return (
      <Container textAlign="center">
        <Header as="h2" textAlign="center">Playground</Header>

        <Button as={Link} to="/" primary>Go back</Button>
      </Container>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  game: {
    round: state.game.currentRound,
    started: state.game.started
  }
})

const mapDispatchToProps = (dispatch: *) => ({
  initGame: () => dispatch(initGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayGround)
