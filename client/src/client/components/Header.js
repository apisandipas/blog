import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {

  const authButton = auth ? (
    <a href="/api/logout" className="navbar-item">Logout</a>
  ) : (
    <a href="/api/login" className="navbar-item">Login</a>
  )

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          NERDPress
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>        
      
          <li className="navbar-item">
            <Link to="/">Archives</Link>
          </li>        
            
        </div>

        <div className="navbar-end">
          <ul className="navbar-nav">
            <li>{authButton}</li>        
          </ul>
        </div>
      </div>
    </nav>
  )
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header)