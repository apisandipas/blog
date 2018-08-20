import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { fetchPosts } from 'actions/postActions'
import Header from 'components/frontend/Header'
import Footer from 'components/frontend/Footer'
import Pagination from 'components/frontend/Pagination'
import PostPreview from 'components/frontend/PostPreview'

class HomePage extends Component {
  constructor (props) {
    super(props)
    const page = Number(props.location.pathname.split('/')[1]) || 1
    this.state = {
      page
    }
  }

  componentDidMount () {
    if (!this.props.posts.length) {
      this.props.fetchPosts(this.state.page)
    }
  }

  prevPage () {
    this.setState({
      page: Number(this.state.page) - 1
    }, this.setPage)
  }

  nextPage () {
    this.setState({
      page: Number(this.state.page) + 1
    }, this.setPage)
  }

  setPage (page = this.state.page) {
    this.props.history.push(`/${page}`)
    this.props.fetchPosts(page)
  }

  renderPosts (posts) {
    return posts.map(post => {
      return (
        <PostPreview post={post} key={post.id} />
      )
    })
  }

  render () {
    const posts = this.props.posts
    const numPages = this.props.pagination.pageCount
    const currentPage = this.state.page
    return (
      <div>
        <Helmet>
          <title>NERDPress | Home Page</title>
          <meta property="og:title" content="NERDPress | Home Page" />
        </Helmet>

        <Header onHomeClick={() => this.setPage(1)}/>

        {(this.state.page > numPages) && (
          <h1>
            Error! Can't seem to find what your looking for?
            <Link to="/" onClick={() => this.setPage(1)}> Go Home!</Link>
          </h1>
        )}

        <main className="site-body">
          <section className="articles">
            { posts && this.renderPosts(posts) }
          </section>

          <aside className="sidebar">
            <h3>Sidebar</h3>
            <p>Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. </p>
            <p>Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. </p>
            <p>Aperiam quos aut atque temporibus at. Saepe deserunt asperiores in voluptas sunt sit et possimus aut. Recusandae vero consequatur. </p>
          </aside>
        </main>

        <Pagination
          numPages={numPages}
          currentPage={currentPage}
          onPreviousClick={this.prevPage.bind(this)}
          onNextClick={this.nextPage.bind(this)}
        />

        <Footer />

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    posts: state.posts,
    pagination: state.pagination
  }
}

export default {
  component: connect(mapStateToProps, { fetchPosts })(HomePage),
  loadData: ({ dispatch }, { params }) => {
    const page = params[0].split('/')[1] || 1
    return dispatch(fetchPosts(page))
  }
}
