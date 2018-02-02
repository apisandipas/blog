import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class RegisterPage extends Component {

  handleSubmit (values) {

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
    const { handleSubmit } = this.props   
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
  component: reduxForm({
    form: 'registrationForm'
  })(RegisterPage)
};