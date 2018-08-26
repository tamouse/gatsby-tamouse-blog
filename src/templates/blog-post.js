import React from 'react'
import rehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import PrevNextNav from '../components/PrevNextNav'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import '../assets/extra.css'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {},
}).Compiler

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.markdownRemark')
    const siteMetadata = get(this.props, 'data.site.siteMetadata')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} metadata={siteMetadata}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date} &bull; Time to read: {post.timeToRead} minutes
        </p>
        <div>{renderAst(post.htmlAst)}</div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        <PrevNextNav previous={previous} next={next} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      htmlAst
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        categories
      }
    }
  }
`
