import React, { Component } from 'react'

import ConversationBar from './ConversationBar'
import ConversationContent from './Content'
import ConversationSection from './ConversationSection'

class Conversation extends Component {
  render() {
    const { match, conversation } = this.props
    const { username } = match.params

    return (
      <ConversationSection>
        <ConversationBar username={username} match={match} />
        <ConversationContent
          match={match}
          conversation={conversation}
          username={username}
        />
      </ConversationSection>
    )
  }
}

export default Conversation
