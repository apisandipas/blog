import React from 'react'
import Helmet from 'react-helmet'
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => {
  return (
    <div className="container">
      <Helmet>
        {/* <link rel="stylesheet" type="text/css" href="/styles.css" /> */}
      </Helmet>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default {
  component: App,
  // loadData: ({ dispatch }) => dispatch()
}
