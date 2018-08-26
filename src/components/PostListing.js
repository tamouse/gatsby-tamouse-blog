import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography.js'
import { get } from 'lodash'

export default ({ posts }) => (
  <React.Fragment>
    {posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })}
  </React.Fragment>
)
