import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({testimonials}) => (
  <div>
    {testimonials.map((testimonial, id) => (
      <activity className='message' key={id}>
        <div className='message-body'>
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </activity>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
