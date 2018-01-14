// @flow
import React, { Component } from 'react'
import {
  Divider,
  Form,
  Message,
  type InputOnChangeData
} from 'semantic-ui-react'

type FormProps = {
  onStart: ({ id?: string, name: string, roundsWon?: number }[]) => void
}

type FormState = {
  error: string,
  player1: string,
  player2: string
}

class PlayersForm extends Component<FormProps, FormState> {
  state = {
    error: '',
    player1: '',
    player2: ''
  }

  changePlayerName = (e: SyntheticInputEvent<>, { name, value }: InputOnChangeData) => {
    this.setState({ [name]: value, error: '' })
  }

  namesAreValid = () => {
    const { player1, player2 } = this.state
    const namesAreNotEmpty = player1 && player2
    const namesAreDifferent = player1.toLowerCase() !== player2.toLowerCase()

    return namesAreNotEmpty && namesAreDifferent
  }

  registerPlayers = () => {
    if (this.namesAreValid()) {
      const players = [{ name: this.state.player1 }, { name: this.state.player2 }]
      this.props.onStart(players)
    } else {
      this.setState({ error: 'Both names are required and must be different' })
    }
  }

  renderErrorMessage = (errorMsg: string) => !!errorMsg ?
    <Message error content={errorMsg} header="Oops!" /> :
    null

  render() {
    const { error } = this.state
    const hasError = !!error

    return (
      <Form error={hasError} onSubmit={this.registerPlayers}>
        <Form.Input name="player1" placeholder="Player 1" onChange={this.changePlayerName} />
        <Divider horizontal>vs</Divider>
        <Form.Input name="player2" placeholder="Player 2" onChange={this.changePlayerName} />

        {this.renderErrorMessage(error)}

        <Form.Button positive content="Start" />
      </Form>
    )
  }
}

export default PlayersForm
