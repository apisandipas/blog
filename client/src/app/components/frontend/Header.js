import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../../actions/authActions'

class Header extends Component {
  logOut () {
    this.props.logOut()
  }

  renderAuthLinks () {
    return this.props.isAuthenticated ? ([
      <Link className="navbar-item" to="/admin" key='admin'>
        Admin
      </Link>,
      <a onClick={() => this.logOut()} className="navbar-item" key='logout'>Logout</a>
    ]) : ([
      <Link className="navbar-item" to="/register" key='register'>
        Register
      </Link>,
      <Link className="navbar-item" to="/login" key='login'>
        Login
      </Link>
    ])
  }

  render () {
    return (
      <nav className="navbar" role="navigation">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <Link className="brand-text" to="/" onClick={this.props.onHomeClick}>
              NERDPress
            </Link>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/" onClick={this.props.onHomeClick}>
                Home
              </Link>
              <Link className="navbar-item" to="/archives">
                Archives
              </Link>
            </div>

            <div className="navbar-end">
              {this.renderAuthLinks()}
            </div>
          </div>
        </div>

      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: !!auth.token
  }
}

export default connect(mapStateToProps, { logOut })(Header)
