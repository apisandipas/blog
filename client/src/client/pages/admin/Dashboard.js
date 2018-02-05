import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import requireAuth from '../../components/hocs/requireAuth'

class Dashboard extends Component {

  render() {

    return (
      <div>
        <Helmet>
          <title>Admin</title>
          <meta property="og:title" content="Admin" />
        </Helmet>
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><Link to="/admin">Admin</Link></li>
                  <li className="is-active"><Link to="/admin" aria-current="page">Dashboard</Link></li>
                </ul>
              </nav>
              <section className="hero is-info welcome is-small">
                <div className="hero-body">
                  <div className="container">
                    <h1 className="title">
                      Hello, {this.props.user.name}.
                    </h1>
                    <h2 className="subtitle">
                      I hope you are having a great day!
                    </h2>
                  </div>
                </div>
              </section>
              <section className="info-tiles">
                <div className="tile is-ancestor has-text-centered">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">439k</p>
                      <p className="subtitle">Users</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">59k</p>
                      <p className="subtitle">Products</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">3.4k</p>
                      <p className="subtitle">Open Orders</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="title">19</p>
                      <p className="subtitle">Exceptions</p>
                    </article>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
    </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default {
  component: connect(mapStateToProps, null)(
    requireAuth(Dashboard)
  ),
  loadData({ dispatch }) {

  }
};