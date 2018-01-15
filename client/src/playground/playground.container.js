// @flow
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Header, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { type StoreState } from '../store'

import PlayersForm from './players-form/players-form.component'
import Score from './score/score.component'
import ShapeSelection from './shape-selection/shape-selection.component'

import { initGame } from '../store/actions/game.actions'
import { selectShapeForPlayer } from '../store/actions/rounds.actions'

type PlayerProp = { id?: string, name: string, roundsWon?: number }
type ShapeProp = { kind: string }
type RoundProp = { roundNumber: number, winner: string }
type PlayGroundProps = {
  initGame: (players: PlayerProp[]) => void,
  selectShape: (round: number, currentPlayer: PlayerProp, shape: ShapeProp) => void,
  game: {
    players: {
      all: PlayerProp[],
      current: PlayerProp
    },
    round: number,
    started: boolean,
    finished: boolean
  },
  shapes: ShapeProp[],
  rounds: RoundProp[]
}

class PlayGround extends Component<PlayGroundProps> {
  startGame = (players: PlayerProp[]) => {
    this.props.initGame(players)
  }

  selectShape = (shape: ShapeProp) => {
    const { players, round } = this.props.game
    this.props.selectShape(round, players.current, shape)
  }

  renderCurrentRound = () => {
    const { started, finished, round } = this.props.game
    return started && !finished ?
      <Header>
        <Header.Subheader>Round {round}</Header.Subheader>
      </Header> :
      null
  }

  renderPlayersRegistrationForm = () => {
    const { started } = this.props.game

    return started ? null : (
      <Grid.Column width={8} textAlign="center">
        <PlayersForm onStart={this.startGame} />
      </Grid.Column>
    )
  }

  renderScore = () => {
    const { game, rounds } = this.props
    const roundsWithWinner = rounds.map((round) => {
      const winner = game.players.all.find(p => p.id === round.winner) || null
      return { ...round, winner: winner ? winner.name : round.winner }
    })

    return (
      <Grid.Column width={4} key="playground-results">
        <Score players={game.players.all} rounds={roundsWithWinner} />
      </Grid.Column>
    )
  }

  renderShapeSelector = () => {
    const { game, shapes } = this.props

    return (
      <Grid.Column width={8} key="playground-selection">
        <ShapeSelection
          key={game.players.current.id}
          player={game.players.current.name}
          options={shapes}
          onShapeSelected={this.selectShape} />
      </Grid.Column>
    )
  }

  renderPlayGround = () => {
    const { started } = this.props.game
    return !started ? null : [this.renderShapeSelector(), this.renderScore()]
  }

  render() {
    const { started, finished } = this.props.game
    const columns = started ? 2 : 1

    return finished ? (
      <Redirect to="/winner" />
    ) : (
      <Grid columns={columns} divided>
        <Grid.Row centered>
          {this.renderCurrentRound()}
        </Grid.Row>
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
    started: state.game.started,
    finished: state.game.finished
  },
  shapes: state.rules.shapes.map(({ kind }) => ({ kind })),
  rounds: state.rounds.map(({ roundNumber, winner }) => ({ roundNumber, winner }))
})

const mapDispatchToProps = (dispatch: Function) => ({
  initGame: (players) => dispatch(initGame(players)),
  selectShape: (round, player, shape) => dispatch(selectShapeForPlayer(round, player, shape)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayGround)
