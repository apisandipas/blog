import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/login">Login</a>
  )

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" to="/">NERDPress</Link>
          
      <ul className="navbar-nav">
        <li>{authButton}</li>        
      </ul>
    </nav>
  )
}

function mapStateToProps({ auth }) {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header)