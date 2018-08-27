import React from 'react'
import rehypeReact from 'rehype-react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import PrevNextNav from '../components/PrevNextNav'
import Layout from '../components/layout'
import PostMeta from '../components/PostMeta'

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

    const categories = get(
      this.props,
      'data.markdownRemark.frontmatter.categories'
    )
    const tags = get(this.props, 'data.markdownRemark.frontmatter.tags')

    return (
      <Layout location={this.props.location} metadata={siteMetadata}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <PostMeta
          date={post.frontmatter.date}
          categories={categories}
          tags={tags}
        />
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
