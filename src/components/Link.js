import React from 'react'

const Link = props => {
  const { href, children } = props

  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default Link
