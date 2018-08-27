import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostListing from '../components/PostListing'

export default class TagTemplate extends React.Component {
  render() {
    const { pageContext, data } = this.props
    const { tag } = pageContext
    return (
      <Layout
        location={this.props.location}
        metadata={this.props.data.site.siteMetadata}
      >
        <div className="tag-container">
          <Helmet title={`Posts tagged "${tag}"`} />
          <h2>Posts tagged with {tag}</h2>
          <PostListing posts={data.allMarkdownRemark.edges} />
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
