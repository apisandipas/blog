import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Header from '../../components/admin/Header'

class Backend extends Component {

  componentDidMount(){
  }

  render () {
    const { route, history } = this.props
    return (
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="/admin.css" /> 
        </Helmet>
        <Header history={history}/>
        {renderRoutes(route.routes)}
      </div>
    )
  }
  
}


export default {
  component: connect(null, null)(Backend),
  // loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}