import React from 'react'
import { Link } from 'react-router-dom'
const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <h1 >
        Not Found
      </h1>
      <br />
      <Link to='/'>&larr; Go Home</Link>
    </div>

  )
}

export default {
  component: NotFoundPage
}
