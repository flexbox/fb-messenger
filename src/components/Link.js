import React from 'react'

const Link = props => {
  return (
    <a target="_blank" href={props.href} rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

export default Link
