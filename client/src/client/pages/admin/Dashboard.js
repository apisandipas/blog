import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import requireAuth from '../../components/hocs/requireAuth'

class Dashboard extends Component {

  render() {

    return (
      <div>
        <Helmet>
          <title>Admin</title>
          <meta property="og:title" content="Admin" />
        </Helmet>
        <h1>Dashboard</h1> 
      </div>
    );
  }
  
}

 

export default {
  component: connect(null, null)(
    requireAuth(Dashboard)
  ),
  // loadData: ({ dispatch }) => dispatch(fetchPosts())

};