import React from 'react'
import { Link } from 'gatsby'

export default ({ headerStyle, title }) => (
  <h1 style={headerStyle}>
    <Link
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
      }}
      to={'/'}
    >
      {title}
    </Link>
  </h1>
)
