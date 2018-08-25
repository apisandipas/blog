import React from 'react'
import Helmet from 'react-helmet'
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => {
  return (
    <div id="frontend" className="container">
      <Helmet>
      </Helmet>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default {
  component: App,
  // loadData: ({ dispatch }) => dispatch()
}
