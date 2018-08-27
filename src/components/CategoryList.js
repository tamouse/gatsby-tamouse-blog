import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

export default ({ category }) => {
  return (
    <span>
      Category: <Link to={`/category/${kebabCase(category)}/`}>{category}</Link>
    </span>
  )
}
