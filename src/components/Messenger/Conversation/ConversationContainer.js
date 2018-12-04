import React, { Component } from 'react'

import * as api from '../../../api/message'
import Conversation from './Conversation'

class ConversationContainer extends Component {
  constructor(props) {
    super(props)

    // hint, add some state here
    this.state = {
      conversation: []
    }
  }

  _fetchConversation = username => {
    this.setState({
      conversation: []
    })
    // the following setTimeout is to simulate network latency in order to show a "loading" component
    setTimeout(() => {
      api._fetchConversation(username).then(messages => {
        this.setState({
          conversation: messages
        })
      })
    }, 1000)
  }

  componentDidMount() {
    // hint, you should fetch the threads here
    this._fetchConversation(this.props.match.params.username)
  }

  // https://reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps) {
    const needsToFetchUser =
      conversation.length &&
      !conversation.find(({ from, to }) => to === username || from === username)
    if (needsToFetchUser) {
      this._fetchConversation(this.props.match.params.username)
    }
  }

  render() {
    const { conversation } = this.state
    const { match } = this.props

    return (
      // hint, which component and props do you think we should return here?
      <Conversation
        match={match}
        conversation={conversation}
        username={username}
      />
    )
  }
}

export default ConversationContainer
