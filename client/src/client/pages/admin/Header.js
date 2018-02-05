import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../actions/authActions'

class Header extends Component {
  
  logOut(){
    this.props.logOut()
  }

  render () {
    return (
      <nav className="navbar is-white">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item brand-text" to="/admin">
              Admin          
            </Link>
            <div className="navbar-burger burger" data-target="navMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="admin.html">
                Dashboard
              </a>
              <a className="navbar-item" href="admin.html">
                Posts
              </a>
              <a className="navbar-item" href="admin.html">
                Users
              </a>
              <a className="navbar-item" href="admin.html">
                My Account
              </a>
            </div>
            <div className="navbar-end">
              <Link className="navbar-item" to='/'>&laquo; Back to Site</Link>
              <a className="navbar-item" onClick={() => this.logOut()}>Logout</a>
            </div>

          </div>
        </div>
      </nav>
    )
  }
  
}

export default connect(null, { logOut })(Header)