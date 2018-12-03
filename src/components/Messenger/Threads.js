import React from 'react'

const Threads = props => {
  const { users, showSettings } = props

  return (
    <div className="threads">
      <div className="thread-bar">
        <h2>
          <a onClick={showSettings}>
            <i className="icon fas fa-cog" />
          </a>
          Messenger
          <i className="icon fas fa-edit" />
        </h2>
      </div>
      <ul className="thread-list">
        {users.map((user, i) => (
          <li key={i} onClick={() => this.selectUser(user)}>
            <img
              src={`images/${user.username}_lg.jpg`}
              alt={`${user.username}`}
              className="avatar large"
            />
            <div className="user-name">
              <span>{`${user.name.first} ${user.name.last}`}</span>
              <small>message preview</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Threads
