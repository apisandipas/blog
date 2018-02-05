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
        </div>
      </div>
    ) 
  }

  render() {
    const { handleSubmit, auth } = this.props
    
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
    auth: state.auth && state.auth.token
  }
}

export default {
  component: reduxForm({
    form: 'registrationForm'
  })(
    connect(mapStateToProps, { registerUser })(RegisterPage)
  )
};