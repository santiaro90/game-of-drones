// @flow
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PlayersForm from './players-form/players-form.component'

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
  startGame = (players) => {
    this.props.initGame(players)
  }

  renderPlayersRegistrationForm = () => {
    const { started } = this.props.game
    return started ? null : <PlayersForm onStart={this.startGame} />
  }

  renderPlayGround = () => {
    const { started } = this.props.game
    return started ? <h1>Playground</h1> : null
  }

  render() {
    return (
      <Container textAlign="center" text>
        {this.renderPlayersRegistrationForm()}
        {this.renderPlayGround()}

        <Link to="/">Go home</Link>
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
  initGame: (players) => dispatch(initGame(players))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayGround)
