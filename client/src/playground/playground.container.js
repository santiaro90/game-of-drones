// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { type StoreState } from '../store'

import PlayersForm from './players-form/players-form.component'
import ShapeSelection from './shape-selection/shape-selection.component'

import { initGame, selectShapeForPlayer } from '../store/actions/game.actions'

type PlayerProp = { id?: string, name: string }
type ShapeProp = { kind: string }
type PlayGroundProps = {
  initGame: (players: PlayerProp[]) => void,
  selectShape: (currentPlayer: PlayerProp, shape: ShapeProp) => void,
  game: {
    players: {
      all: PlayerProp[],
      current: PlayerProp
    },
    round: number,
    started: boolean
  },
  shapes: ShapeProp[]
}

class PlayGround extends Component<PlayGroundProps> {
  startGame = (players: PlayerProp[]) => {
    this.props.initGame(players)
  }

  selectShape = (shape: ShapeProp) => {
    const { current } = this.props.game.players
    this.props.selectShape(current, shape)
  }

  renderPlayersRegistrationForm = () => {
    const { started } = this.props.game

    return started ? null : (
      <Grid.Column width={8} textAlign="center">
        <PlayersForm onStart={this.startGame} />
      </Grid.Column>
    )
  }

  renderPlayGround = () => {
    const { started, players } = this.props.game

    return !started ? null : ([
        <Grid.Column width={8} key="playground-selection">
          <ShapeSelection
            key={players.current.id}
            player={players.current.name}
            options={this.props.shapes}
            onShapeSelected={this.selectShape} />
        </Grid.Column>,
        <Grid.Column width={4} key="playground-results">
          <h2>Random shit</h2>
        </Grid.Column>
    ])
  }

  render() {
    const { started } = this.props.game
    const columns = started ? 2 : 1

    return (
      <Grid columns={columns} divided>
        <Grid.Row centered stretched>
          {this.renderPlayersRegistrationForm()}
          {this.renderPlayGround()}
        </Grid.Row>

        <Grid.Row centered>
          <Link to="/">Go home</Link>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  game: {
    players: state.game.players,
    round: state.game.currentRound,
    started: state.game.started
  },
  shapes: state.rules.map(({ kind }) => ({ kind }))
})

const mapDispatchToProps = (dispatch: *) => ({
  initGame: (players) => dispatch(initGame(players)),
  selectShape: (player, shape) => dispatch(selectShapeForPlayer(player, shape)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayGround)
