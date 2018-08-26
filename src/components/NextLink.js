import React from 'react'
import { Link } from 'gatsby'

export default ({ next }) => (
  <li>
    <Link to={next.fields.slug} rel="next">
      {next.frontmatter.title} →
    </Link>
  </li>
)
