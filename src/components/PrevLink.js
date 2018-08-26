import React from 'react'
import { Link } from 'gatsby'

export default ({ previous }) => (
  <li>
    <Link to={previous.fields.slug} rel="prev">
      ← {previous.frontmatter.title}
    </Link>
  </li>
)
