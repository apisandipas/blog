import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class LoginPage extends Component {
  handleSubmit (values) {
    console.log(values)
  }

  renderField(field) {
    return (
      <div className="field">
        <div className="control">
          <input 
            name={field.name}  
            type={field.type} 
            className="input is-large" 
            placeholder={field.placeholder} 
          />
        </div>
      </div>
    )
    
  }
  
  render () {

    const { handleSubmit } = this.props

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
                  <div className="box">
                    <form onSubmit={handleSubmit(this.handleSubmit)}>
                      <Field 
                        name="Email" 
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

export default {
  component: reduxForm({
    form: 'loginPage'
  })(LoginPage)
};