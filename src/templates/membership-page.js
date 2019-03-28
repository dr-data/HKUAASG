import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import MembershipPageTemplate from '../components/MembershipPageTemplate'

const MembershipPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <MembershipPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      testimonials={frontmatter.testimonials}
    />
  )
}

MembershipPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MembershipPage

export const pageQuery = graphql`
  query MembershipPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        testimonials {
          author
          quote
        }
      }
    }
  }
`
