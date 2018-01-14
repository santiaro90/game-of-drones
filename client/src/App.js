// @flow
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { type StoreState } from './store'

import Home from './home/home.component'
import PlayGround from './playground/playground.container'

type AppProps = {
  gameStarted: boolean,
  currentRound: number
}

class App extends Component<AppProps> {
  renderCurrentRound = () => this.props.gameStarted ?
    <Header.Subheader>Round {this.props.currentRound}</Header.Subheader> :
    null

  render() {
    return (
      <Container text>
      <Header as="h1" textAlign="center">
        Game of Drones
        {this.renderCurrentRound()}
      </Header>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/playground" exact={true} component={PlayGround} />
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = (state: StoreState): AppProps => ({
  gameStarted: state.game.started,
  currentRound: state.game.currentRound
})

export default connect(mapStateToProps)(App);
