import React from 'react'
import PropTypes from 'prop-types'
import ExcoPageTemplate from '../../components/ExcoPageTemplate'

const ExcoPagePreview = ({ entry, widgetFor }) => (
  <ExcoPageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
  />
)

ExcoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ExcoPagePreview
