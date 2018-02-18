import React from 'react'
import Avatar from '../Layout/Avatar'
import Icon from '../Layout/Icon'

const Threads = ({ showSettings, newMessage, selectUser, users }) => (
  <div className="threads">
    <div className="thread-bar">
      <h2>
        <a onClick={showSettings}>
          <Icon name="cog" />
        </a>
        Messenger
        <a onClick={newMessage}>
          <Icon name="edit" />
        </a>
      </h2>
    </div>
    <ul className="thread-list">
      {users.map((user, i) => (
        <li key={i} onClick={() => selectUser(user)}>
          <Avatar user={user} size="large" />
          <div className="user-name">
            <span>{`${user.name.first} ${user.name.last}`}</span>
            <small>message preview</small>
          </div>
        </li>
      ))}
    </ul>
  </div>
)

export default Threads
