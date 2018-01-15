// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { type StoreState} from '../store'

type WinnerMessageProps = {
  winner: string
}

class WinnerMessage extends Component<WinnerMessageProps> {
  render() {
    return (
      <Container text textAlign="center">
        <Header as="h1" textAlign="center" icon>
          <Icon name="trophy" color="yellow" size="massive" circular />
          <Header.Content>We have a winner!</Header.Content>
          <Header.Content>{this.props.winner} is the new EMPEROR!</Header.Content>
        </Header>

        <Link to="/">Go home</Link>
      </Container>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  // $FlowFixMe
  winner: state.game.players.winner.name
})

export default connect(mapStateToProps, (dispatch: *) => ({}))(WinnerMessage)
