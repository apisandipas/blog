import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import requireAuth from '../components/hocs/requireAuth'

class AdminPage extends Component {

  render() {

    return (
      <div>
        <Helmet>
          <title>NERDPress | Admin Page</title>
          <meta property="og:title" content="NERDPress | Admin Page" />
        </Helmet>
         
        <section className="articles">
          <div className="column is-8 is-offset-2">
            <h1>Admin Page</h1>
          </div>
        </section>
         
      </div>
    );
  }
  
}

 

export default {
  component: connect(null, null)(
    requireAuth(AdminPage)
  ),
  // loadData: ({ dispatch }) => dispatch(fetchPosts())

};