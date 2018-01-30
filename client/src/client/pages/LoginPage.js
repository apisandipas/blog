import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
  
  render() {
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
                    <form>
                      <div className="field">
                        <div className="control">
                          <input className="input is-large" type="email" placeholder="Your Email" autoFocus="" />
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <input className="input is-large" type="password" placeholder="Your Password" />
                        </div>
                      </div>
      
                      <a className="button is-block is-info is-large">Login</a>
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
  component: LoginPage
};