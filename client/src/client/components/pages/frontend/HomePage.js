import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import chunk from 'lodash.chunk'
import map from 'lodash.map'
import nl2br from 'react-nl2br'
import titleCase from 'title-case'
import dateFormat from 'dateformat'
import { fetchPosts } from "../../../actions/postActions"

class HomePage extends Component {

  constructor(props){
    super(props)

    this.state = {
      page: 1
    }
  }

  componentDidMount () {
    if (!this.props.posts.length) {
      const page = this.props.location.pathname.split('/')[1]
      this.props.fetchPosts(page || this.state.page)
    }
  }

  prevPage () {
    this.setState({
      page: this.state.page - 1
    }, () => {
      this.props.history.push(`/${this.state.page}`)
      this.props.fetchPosts(this.state.page)
    })
  }

  nextPage () {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.props.history.push(`/${this.state.page}`)
      this.props.fetchPosts(this.state.page)
    })
  }

  renderPosts (posts) {
    return map(posts, post => {
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

  render() {
    const posts_per_page = 10
    const postsArr = Object.values(this.props.posts)
    const posts = chunk(postsArr, posts_per_page)[this.state.page - 1]
    const numPages = this.props.pagination.pageCount

    return (
      <div>
        <Helmet>
          <title>NERDPress | Home Page</title>
          <meta property="og:title" content="NERDPress | Home Page" />
        </Helmet>

        <section className="articles">
          <div className="column is-8 is-offset-2">
            { posts ? (
                [,
                  this.renderPosts(posts),
                  this.renderPagination(numPages)
                ]
              ) : <div>LOADING...</div>}
          </div>
        </section>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    pagination: state.pagination
  }
}

export default {
  component: connect(mapStateToProps, { fetchPosts })(HomePage),
  loadData({ dispatch }, { params }) {
    console.log('page', params['0'].split('/')[1] || 1)
    dispatch(fetchPosts(params['0'].split('/')[1]))
  }
};
