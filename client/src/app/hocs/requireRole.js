import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default (ChildComponent, requiredRole) => {
  class RequireRole extends Component {
    render () {
      const { role } = this.props.auth
      // if an array of roles is oassed, check to see if useres role is in the array
      if (Array.isArray(requiredRole) && requiredRole.includes(role)
      // otherwise if the requiredRole is a string, check if it matches users role
      || (typeof requiredRole === "string") && (role === requiredRole)) {
        return <ChildComponent {...this.props} />
      }

      return <Redirect to="/" />
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth })
  return connect(mapStateToProps)(RequireRole)
}
