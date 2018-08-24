import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { resetPassword } from 'actions/authActions'

class ResetPasswordPage extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    const token = this.props.location.search.split('=')[1]
    values.token = token
    this.props.resetPassword(values)
  }

  renderField (field) {
    return (
      <div className="field">
        <div className="control">
          <input
            {...field.input}
            name={field.name}
            type={field.type}
            className="input"
            placeholder={field.placeholder}
          />
          {field.meta.touched && field.meta.error
            && (
              <div className="tag error" style={{width: '100%'}}>
                {field.meta.error}
              </div>
            )
          }
        </div>
      </div>
    )
  }

  render () {
    const { handleSubmit, error, doRedirect } = this.props

    if (doRedirect) return <Redirect to='/login' />

    return (
      <div>
        <Helmet>
          <title>NERDPress | Reset Password</title>
          <meta property="og:title" content="NERDPress | Reset Password" />
        </Helmet>

        <section className="reset-password-page">
          <h3 className="title">Reset Password</h3>
          <p className="subtitle">Please enter your new password below.</p>

          {error && (<div className="notification is-danger">{error}</div>)}

          <div className="box">
            <form onSubmit={handleSubmit(this.handleSubmit)}>
              <Field
                name="password"
                component={this.renderField}
                type="password"
                placeholder="Your new password"
              />
              <Field
                name="passwordConfirm"
                component={this.renderField}
                type="password"
                placeholder="Confirm your new password"
              />

              <input type="submit" value="Reset Password" className="btn" style={{width: '100%'}} />
            </form>
          </div>
          <p className="has-text-grey">
            <Link to="/register">Register</Link> {' '}·{' '}
            <Link to="/">Return Home</Link>
          </p>
        </section>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {}
  if (!values.password) errors.password = 'Please enter a password!'
  if (!values.passwordConfirm) errors.passwordConfirm = 'Please enter a password confirmation!'
  if (values.password !== values.passwordConfirm) errors.passwordConfirm = 'Passwords do not match!'
  return errors
}

const mapStateToProps = (state) => {
  return {
    doRedirect: state.auth && state.auth.message
  }
}

export default {
  component: reduxForm({
    form: 'resetPasswordForm',
    validate
  })(
    connect(mapStateToProps, { resetPassword })(ResetPasswordPage)
  )
}
