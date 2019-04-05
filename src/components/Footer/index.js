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
          <div className='columns content has-text-centered'>
            <div className='column is-half'>Apply Free Membership</div>
            <div className='column is-half'>HKUAA SG Facebook Group</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
