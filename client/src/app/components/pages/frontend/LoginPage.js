import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authActions'

class LoginPage extends Component {

  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    this.props.loginUser(values)
  }

  renderField(field) {
    return (
      <div className="field">
        <div className="control">
          <input 
            {...field.input}
            name={field.name}  
            type={field.type} 
            className="input is-large" 
            placeholder={field.placeholder} 
          />
          {field.meta.touched && field.meta.error
            ? (<div className="tag is-danger" style={{width: '100%'}}>{field.meta.error}</div>)
            : ''
          }
        </div>
      </div>
    )
    
  }
  
  render () {

    const { handleSubmit, auth, error } = this.props

    if (auth) {
      return <Redirect to='/admin' />
    }

    return (
      <div>
        <Helmet>
          <title>NERDPress | Login</title>
          <meta property="og:title" content="NERDPress | Login" />
        </Helmet>
         
        <section className="hero is-success is-fullheight">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                  <h3 className="title has-text-grey">Login</h3>
                  <p className="subtitle has-text-grey">Please login to proceed.</p>
                  
                  {error && (<div className="notification is-danger">{error}</div>)}
                  
                  <div className="box" style={{marginTop: '1rem'}}>
                    <form onSubmit={handleSubmit(this.handleSubmit)}>
                      <Field 
                        name="email" 
                        component={this.renderField} 
                        type="email" 
                        placeholder="Your Email" 
                      />

                      <Field 
                        name="password" 
                        component={this.renderField} 
                        type="password" 
                        placeholder="Your Password" 
                      />
      
                      <input type="submit" value="Login" className="button is-block is-info is-large" style={{width: '100%'}} />
                    </form>
                  </div>
                  <p className="has-text-grey">
                    <Link to="/register">Register</Link>
                    {/*  &nbsp;·&nbsp;<Link to="#">Forgot Password</Link> &nbsp;·&nbsp;*/}
                  </p>
                </div>
              </div>
            </div>
          </section>
         
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth && state.auth.token,
    error: state.auth && state.auth.error
  }
}

const validate = (values) => {
  const errors = {}

  if (!values.email) errors.email = "Please enter your email"

  if (!values.password) errors.password = "Please enter your password"  
    
  return errors
}

export default {
  component: reduxForm({
    form: 'loginForm',
    validate
  })(
    connect(mapStateToProps, { loginUser })(LoginPage)
  )
};