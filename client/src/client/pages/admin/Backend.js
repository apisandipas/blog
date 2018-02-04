import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { fetchCurrentUser } from '../../actions'
import Header from './Header'

class Backend extends Component {

  componentDidMount(){
    this.props.fetchCurrentUser()
  }

  render () {
    const { route } = this.props
    return (
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="/admin.css" /> 
        </Helmet>
        <Header/>
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <aside className="menu">
                <p className="menu-label">
                  General
                </p>
                <ul className="menu-list">
                  <li><a className="is-active">Dashboard</a></li>
                  <li><a>Customers</a></li>
                </ul>
                <p className="menu-label">
                  Administration
                </p>
                <ul className="menu-list">
                  <li><a>Team Settings</a></li>
                  <li>
                    <a>Manage Your Team</a>
                    <ul>
                      <li><a>Members</a></li>
                      <li><a>Plugins</a></li>
                      <li><a>Add a member</a></li>
                    </ul>
                  </li>
                  <li><a>Invitations</a></li>
                  <li><a>Cloud Storage Environment Settings</a></li>
                  <li><a>Authentication</a></li>
                </ul>
                <p className="menu-label">
                  Transactions
                </p>
                <ul className="menu-list">
                  <li><a>Payments</a></li>
                  <li><a>Transfers</a></li>
                  <li><a>Balance</a></li>
                </ul>
              </aside>
            </div>
            <div className="column is-9">
              {renderRoutes(route.routes)}
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}


export default {
  component: connect(null, { fetchCurrentUser })(Backend),
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}