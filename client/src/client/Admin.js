import React from 'react'
import { renderRoutes } from 'react-router-config'

const Backend = ({ route }) => {
  return (
    <div className="container">
    Admin
      {renderRoutes(route.routes)}
    </div>
  )
}


export default {
  component: Backend
}