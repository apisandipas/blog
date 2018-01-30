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
    <nav className="navbar is-white">
      <div className="navbar-brand">
        <Link className="navbar-item brand-text" to="/">  
          NERDPress          
        </Link>
        <div className="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">  
            Home
          </Link>
          <Link className="navbar-item" to="/archives">  
            Archives
          </Link>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/login">  
            Login
          </Link>
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