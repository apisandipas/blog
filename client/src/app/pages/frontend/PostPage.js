import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import nl2br from 'react-nl2br'
import titleCase from 'title-case'
import dateFormat from 'dateformat'
import { fetchPost } from 'actions/postActions'
import Header from 'components/frontend/Header'

class PostPage extends Component {
  componentDidMount () {
    const {slug} = this.props.match.params
    this.props.fetchPost(slug)
  }

  render () {
    const { post } = this.props
    const user = post.user

    return (
      <div>
        <Helmet>
          <title>NERDPress | Post Page</title>
          <meta property="og:title" content="NERDPress | Post Page" />
        </Helmet>

        <section className="single-article">
          <div className="column is-8 is-offset-2">
            <Header />

            <main className="site-body">
              <section className="article">
                <div className="card">

                  <h1 className="title article-title">
                    {titleCase(post.title)}
                  </h1>
                  <p className="subtitle is-6 article-subtitle">
                    <a href="#">{user && user.name}</a> on {dateFormat(post.created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
                  </p>
                  <div className="content article-body">
                    {nl2br(post.body)}
                  </div>

                </div>
              </section>

              <aside className="sidebar">
                <h3>Sidebar</h3>
                <p>Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. </p>
                <p>Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. </p>
                <p>Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. </p>
              </aside>
            </main>


          </div>
        </section>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post
  }
}

export default {
  component: connect(mapStateToProps, { fetchPost })(PostPage),
  loadData: ({ dispatch }, { path }) => {
    const slug = path.split('/')[2]
    return dispatch(fetchPost(slug))
  }
}
