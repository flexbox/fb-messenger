import React from 'react'

const Topbar = props => {
  const loggedUser = { name: 'Alex' }

  return (
    <div className="top-bar">
      <i className="icon fab fa-facebook-messenger" />
      <a
        onClick={props.toggleModal}
        className={`username ${this.userPosition || 'left'}`}
      >
        {loggedUser.name}
      </a>
    </div>
  )
}

export default Topbar
