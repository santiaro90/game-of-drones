// @flow
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

import Home from './home/home.component'
import PlayGround from './playground/playground.container'

class App extends Component<{}> {
  render() {
    return (
      <div id="app">
        <Header as="h1" textAlign="center">Game of Drones</Header>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/play" exact={true} component={PlayGround} />
        </Switch>
      </div>
    )
  }
}

export default App;
