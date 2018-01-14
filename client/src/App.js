// @flow
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'

import Home from './home/home.component'
import PlayGround from './playground/playground.container'

class App extends Component<*> {
  render() {
    return (
      <Container text>
        <Header as="h1" textAlign="center">
          Game of Drones
        </Header>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/playground" exact={true} component={PlayGround} />
        </Switch>
      </Container>
    )
  }
}

export default App
