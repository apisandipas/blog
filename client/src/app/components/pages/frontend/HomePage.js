import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import nl2br from 'react-nl2br'
import titleCase from 'title-case'
import dateFormat from 'dateformat'
import { fetchPosts } from "../../../actions/postActions"
import Header from '../../../components/common/frontend/Header'

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
        <div className="card article" key={post.id}>
          <div className="card-content">
            <p className="title article-title">
              <Link to={`/posts/${post.slug}`}>{titleCase(post.title)}</Link>
            </p>
            <p className="subtitle is-6 article-subtitle">
              <a href="#">{post.user.name}</a> on {dateFormat(post.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
            </p>
            <div className="content article-body">
              {nl2br(post.excerpt)}
            </div>
          </div>
        </div>
      )

    })
  }

  renderPagination (numPages) {
    const currentPage = this.state.page

    return (
      <nav className="pagination" role="navigation" aria-label="pagination" style={{marginTop: '25px'}} key='nav'>
        { currentPage > 1
          ? <a className="pagination-previous" onClick={() => this.prevPage()}>Previous</a>
          : <a className="pagination-previous" style={{cursor: 'not-allowed'}}>Previous</a> }

        { currentPage < numPages
          ? <a className="pagination-next" onClick={() => this.nextPage()}>Next page</a>
          : <a className="pagination-previous" style={{cursor: 'not-allowed'}}>Next page</a> }

      </nav>
    )
  }

  render () {
    const posts = this.props.posts
    const numPages = this.props.pagination.pageCount
    return (
      <div>
        <Helmet>
          <title>NERDPress | Home Page</title>
          <meta property="og:title" content="NERDPress | Home Page" />
        </Helmet>

        <section className="articles">
          <div className="column is-8 is-offset-2">
            <Header onHomeClick={() => this.setPage(1)}/>

            {(this.state.page > numPages) && (
              <h1>
                Error! Cant seem to finc what your looking for?
                <Link to="/"> Go Home!</Link>
              </h1>
            )}

            { posts ? (
              [
                this.renderPosts(posts),
                this.renderPagination(numPages)
              ]
            ) : <div>LOADING...</div>}
          </div>
        </section>

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
