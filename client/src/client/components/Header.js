import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../actions'

class Header extends Component {
  
  logOut(){
    this.props.logOut()
  }

  render () {
    const { auth } = this.props
    const authButton = auth && auth.token ? ([
          <Link className="navbar-item" to="/admin" key='admin'>  
            Admin
          </Link>,
          <a onClick={() => this.logOut()} className="navbar-item" key='logout'>Logout</a>
        ]
        
      ) : (
        [
        <Link className="navbar-item" to="/register" key='register'>  
          Register
        </Link>,
        <Link className="navbar-item" to="/login" key='login'>  
          Login
        </Link>
        ]
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
            {authButton}
          </div>
        </div>
      </nav>
    )
  }
 
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps, { logOut })(Header)