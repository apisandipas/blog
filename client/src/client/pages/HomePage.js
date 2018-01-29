import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { fetchPosts } from "../actions/index"

class HomePage extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    return this.props.posts.map(post => {
      return <li key={post.id}>{post.title}</li>
    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>React SSR | Home Page</title>
          <meta property="og:title" content="React SSR | Home Page"/>
        </Helmet>
         
        <div>
          {this.renderPosts()}
        </div>
         
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