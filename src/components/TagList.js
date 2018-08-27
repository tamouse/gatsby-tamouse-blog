import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

export default ({ tags }) => {
  if (tags.length < 1) {
    return null
  }

  return (
    <span>
      Tags:{' '}
      <ul style={{ listStyle: `none`, display: `inline` }}>
        {tags.map((tag, i) => (
          <li
            key={`${kebabCase(tag)}-${i}`}
            style={{ display: `inline-block`, marginLeft: 3 }}
          >
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
            {i < tags.length - 1 ? ', ' : ''}
          </li>
        ))}
      </ul>
    </span>
  )
}
