import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'

import { Header as Heading } from 'semantic-ui-react'

class Header extends Component {
  handleSave(text) {
    if (text.length) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header>
        <h1>Todos</h1>
        <Heading as='h1'>Todos</Heading>
        <TodoTextInput
          newTodo
          onSave={::this.handleSave}
          placeholder="What needs to be done?" />
      </header>
    )
  }
}

export default Header
