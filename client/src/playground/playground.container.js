// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header } from 'semantic-ui-react'

class PlayGround extends Component<{}> {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h2" textAlign="center">Playground</Header>

        <Button as={Link} to="/" primary>Go back</Button>
      </Container>
    )
  }
}

export default PlayGround
