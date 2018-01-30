import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

class RegisterPage extends Component {
  
  render() {
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
                    <form>
                      <div className="field">
                        <div className="control">
                          <input className="input is-large" type="text" placeholder="Your Name" autoFocus="true" />
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <input className="input is-large" type="email" placeholder="Your Email" />
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <input className="input is-large" type="password" placeholder="Your Password" />
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <input className="input is-large" type="password" placeholder="Confirm Password" />
                        </div>
                      </div>
      
                      <a className="button is-block is-info is-large">Register</a>
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

export default {
  component: RegisterPage
};