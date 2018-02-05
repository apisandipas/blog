import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import nl2br from 'react-nl2br'
import titleCase from 'title-case'
import dateFormat from 'dateformat'
import { fetchPost } from "../../actions/postActions"

class PostPage extends Component {
  componentDidMount () {
    const {slug} = this.props.match.params
    this.props.fetchPost(slug)
  }

  render() {
    const { post } = this.props
    const user = post.user

    return (
      <div>
        <Helmet>
          <title>NERDPress | Post Page</title>
          <meta property="og:title" content="NERDPress | Post Page" />
        </Helmet>
         
        <section className="article">
          <div className="column is-8 is-offset-2">
            <div className="card">
              <div className="card-content">
                <p className="title article-title">
                  {titleCase(post.title)}
                </p>
                <p className="subtitle is-6 article-subtitle">
                  <a href="#">{user && user.name}</a> on {dateFormat(post.created_at, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                </p>
                <div className="content article-body">
                  {nl2br(post.body)}
                </div>
              </div>
            </div>
          </div>  
        </section>
         
      </div>
    );
  }
  
}

function mapStateToProps(state) {
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

};