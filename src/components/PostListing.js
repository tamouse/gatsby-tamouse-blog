import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography.js'
import { get } from 'lodash'
import PostMeta from './PostMeta'

export default ({ posts }) => (
  <React.Fragment>
    {posts.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      const date = get(node, 'frontmatter.date') || ''
      const category = get(node, 'frontmatter.category') || []
      const tags = get(node, 'frontmatter.tags') || []
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
          <PostMeta date={date} category={category} tags={tags} />
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })}
  </React.Fragment>
)
