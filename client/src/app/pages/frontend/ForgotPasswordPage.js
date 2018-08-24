import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { forgotPassword } from 'actions/authActions'
import { validEmail } from 'helpers'

class ForgotPasswordPage extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    console.log('values!!', values)
    this.props.forgotPassword(values)
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
    const { handleSubmit, error, message } = this.props

    return (
      <div>
        <Helmet>
          <title>NERDPress | Forgot Password</title>
          <meta property="og:title" content="NERDPress | Forgot Password" />
        </Helmet>

        <section className="forgot-password-page">
          <h3 className="title">Forgot Password</h3>
          <p className="subtitle">Please enter your email for a password reset.</p>

          {error && (<div className="notification is-danger">{error}</div>)}
          {message && (<div className="notification is-alert">{message}</div>)}

          <div className="box">
            <form onSubmit={handleSubmit(this.handleSubmit)}>
              <Field
                name="email"
                component={this.renderField}
                type="email"
                placeholder="Your Email"
              />

              <input type="submit" value="Send Reset Email" className="btn" style={{width: '100%'}} />
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

  if (!values.email) errors.email = 'Please enter your email'
  if (!validEmail(values.email)) errors.email = "Please enter a valid email!"

  return errors
}

const mapStateToProps = (state) => {
  return {
    message: state.auth && state.auth.message
  }
}

export default {
  component: reduxForm({
    form: 'forgotPasswordForm',
    validate
  })(
    connect(mapStateToProps, { forgotPassword })(ForgotPasswordPage)
  )
}
