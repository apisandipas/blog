import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class LoginPage extends Component {
  handleSubmit (values) {
    console.log(values)
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
                      <div className="field">
                        <div className="control">
                          <Field 
                            name="email" 
                            component="input" 
                            type="email" 
                            className="input is-large" 
                            placeholder="Your Email" 
                            autoFocus="true" 
                          />
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <Field 
                            name="password" 
                            component="input" 
                            type="password" 
                            className="input is-large" 
                            placeholder="Your Password" 
                          />
                        </div>
                      </div>
      
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