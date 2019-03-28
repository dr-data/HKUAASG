import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql} from 'gatsby'
import {HTMLContent} from '../components/Content'
import About2PageTemplate from '../components/About2PageTemplate'

const About2Page = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <About2PageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </div>
  )
}

About2Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About2Page

export const about2PageQuery = graphql`
  query About2Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`
