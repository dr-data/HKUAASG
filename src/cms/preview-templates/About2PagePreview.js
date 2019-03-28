import React from 'react'
import PropTypes from 'prop-types'
import About2PageTemplate from '../../components/About2PageTemplate'

const About2PagePreview = ({ entry, widgetFor }) => (
  <About2PageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
  />
)

About2PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default About2PagePreview
