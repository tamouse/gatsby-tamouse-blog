import React from 'react'
import { kebabCase } from 'lodash'
import Layout from '../components/layout.js'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'

const CategoryPage = ({
  location,
  data: { allMarkdownRemark: { group }, site: { siteMetadata } },
}) => (
  <Layout location={location} metadata={siteMetadata}>
    <Helmet title={siteMetadata.title} />
    <div>
      <h1>Categories</h1>
      <ul style={{ listStyle: `none` }}>
        {group.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
              {category.fieldValue} ({category.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default CategoryPage

export const pageQuery = graphql`
  query CategoryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { ne: false } } }
      sort: { fields: [frontmatter___category], order: ASC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
