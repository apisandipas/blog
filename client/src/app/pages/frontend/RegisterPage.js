import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link, Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'

class RegisterPage extends Component {
  
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (values) {
    console.log(values)
    this.props.registerUser(values)
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

  render() {
    const { handleSubmit, auth, error } = this.props
    
    if (auth) {
      return <Redirect to='/admin' />
    }
 
    return (
      <div>
        <Helmet>
          <title>NERDPress | Register</title>
          <meta property="og:title" content="NERDPress | Register" />
        </Helmet>
         
        <section className="hero is-success is-fullheight">
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                  <h3 className="title has-text-grey">Register</h3>
                  <p className="subtitle has-text-grey">Please register for an account.</p>
                 
                  {error && (<div className="notification is-danger">{error}</div>)}

                  <div className="box">
                    <form onSubmit={handleSubmit(this.handleSubmit)}>
                      <Field 
                        name="name" 
                        component={this.renderField} 
                        type="text" 
                        placeholder="Your Name" 
                      />

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

                      <Field 
                        name="passwordConfirm" 
                        component={this.renderField} 
                        type="password" 
                        placeholder="Confirm Password" 
                      />

                      <input type="submit" value="Register" className="button is-block is-info is-large" style={{width: '100%'}} />
                    </form>
                  </div>
                  <p className="has-text-grey">
                    <Link to="/login">Login</Link> &nbsp;·&nbsp;
                    {/*<Link to="#">Forgot PLinkssword</Link> &nbsp;·&nbsp;*/}
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
  // Validate name
  if (!values.name) errors.name = "Please enter your name!"

  // Validate Email
  if (!values.email) errors.email = "Please enter your email!"
  if (!validEmail(values.email)) errors.email = "Please enter a valid email!"

  if (!values.password) errors.password = "Please enter a password!"  
  if (!values.passwordConfirm) errors.passwordConfirm = "Please enter a password confirmation!"  

  if (values.password !== values.passwordConfirm) errors.passwordConfirm = "Passwords do not match!"

  return errors
}

function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {
  component: reduxForm({
    form: 'registrationForm',
    validate
  })(
    connect(mapStateToProps, { registerUser })(RegisterPage)
  )
};