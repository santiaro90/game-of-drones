// @flow
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

import Home from './home/home.component'
import PlayGround from './playground/playground.container'
import WinnerMessage from './winner/winner-message.component'

class App extends Component<*> {
  render() {
    return (
      <Container text>
        <Header as="h1" textAlign="center">
          Game of Drones
        </Header>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/playground" component={PlayGround} />
          <Route path="/winner" component={WinnerMessage} />
        </Switch>
      </Container>
    )
  }
}

export default App
