import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

export default ({ categories }) => {
  if (categories.length < 1) {
    return null
  }

  return (
    <span>
      Categories:{' '}
      <ul style={{ listStyle: `none`, display: `inline` }}>
        {categories.map((category, i) => (
          <li
            key={`${kebabCase(category)}-${i}`}
            style={{ display: `inline-block`, marginLeft: 3 }}
          >
            <Link to={`/categories/${kebabCase(category)}/`}>{category}</Link>
            {i < categories.length - 1 ? ', ' : ''}
          </li>
        ))}
      </ul>
    </span>
  )
}
