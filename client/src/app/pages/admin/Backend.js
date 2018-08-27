import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { renderRoutes } from 'react-router-config'
import Header from '../../components/admin/Header'

class Backend extends Component {

  componentDidMount(){
  }

  render () {
    const { route, history } = this.props
    return (
      <div id="admin">
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css" />
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
