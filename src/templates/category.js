import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostListing from '../components/PostListing'

export default class CategoryTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props
    const { category } = pageContext
    return (
      <Layout
        location={this.props.location}
        metadata={this.props.data.site.siteMetadata}
      >
        <div className="category-container">
          <Helmet title={`Posts marked with category "${category}"`} />
          <h2>Posts marked with category {category}</h2>
          <PostListing posts={data.allMarkdownRemark.edges} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            category
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
