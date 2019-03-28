import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>HKUAASG 🇸🇬</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            {/* <SearchBox searchIndex={data.siteSearchIndex.index} /> */}
            <Link className='navbar-item' to='/about'>
                            About
            </Link>
            <Link className='navbar-item' to='/exco'>
                            Committee 
            </Link>
            <Link className='navbar-item' to='/blog'>
                            Blog
            </Link>
            <Link className='navbar-item' to='/membership'>
                            Membership
            </Link>
            <Link className='navbar-item' to='/activity'>
                            Activities
            </Link>
            <Link className='navbar-item' to='/usefullink'>
                            Useful Link
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
{/*                   <Link
                    className='button is-primary is-outlined'
                    to='mailto:hkuaasg@hku.hk'>
                            Contact Us
                  </Link> */}
                  <a href="mailto:hkuaasg@hku.hk" className='button is-primary is-outlined'>Contact Us</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)


export default NavBar
