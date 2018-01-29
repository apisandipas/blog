import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
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
        <div className="card article" key={post.id} style={{marginBottom: '50px'}}>
          <div className="card-content">
            <p className="title article-title">{titleCase(post.title)}</p>
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

  render() {
    return (
      <div>
        <Helmet>
          <title>React SSR | Home Page</title>
          <meta property="og:title" content="React SSR | Home Page" />
          <link href="/blog.scss" />
        </Helmet>
         
        <section className="articles">
          <div className="column is-8 is-offset-2">
            {this.renderPosts()}
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