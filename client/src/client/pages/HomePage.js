import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import nl2br from 'react-nl2br'
import titleCase from 'title-case'
import dateFormat from 'dateformat'
import { fetchPosts } from "../actions/index"

class HomePage extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return this.props.posts.map(post => {
      return (
        <div className="card article" key={post.id}>
          <div className="card-content">
            <p className="title article-title">
              <Link to={`/posts/${post.id}`}>{titleCase(post.title)}</Link>
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

  renderPagination () {
    return (
      <nav className="pagination" role="navigation" aria-label="pagination" style={{marginTop: '25px'}}>
        <a className="pagination-previous">Previous</a>
        <a className="pagination-next">Next page</a>
      </nav>
    )
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>NERDPress | Home Page</title>
          <meta property="og:title" content="NERDPress | Home Page" />
        </Helmet>
         
        <section className="articles">
          <div className="column is-8 is-offset-2">
            {this.renderPosts()}
            {this.renderPagination()}
          </div>
        </section>
         
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default {
  component: connect(mapStateToProps, { fetchPosts })(HomePage),
  loadData: ({ dispatch }) => dispatch(fetchPosts())

};