import React from 'react'
import config from '../../../data/config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <div class="columns content has-text-centered">
            <div class="column is-half">Apply Free Membership</div>
            <div class="column is-half">Facebook</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
