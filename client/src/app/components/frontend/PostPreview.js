import React from 'react';
import { Link } from 'react-router-dom'
import nl2br from 'react-nl2br'
import titleCase from 'title-case'
import dateFormat from 'dateformat'

const PostPreview = ({ post }) => {
  return (
    <div className="card article" key={post.id}>
      <div className="card-content">
        <h1 className="title article-title">
          <Link to={`/posts/${post.slug}`}>{titleCase(post.title)}</Link>
        </h1>
        <p className="subtitle is-6 article-subtitle">
          <a href="#">{post.user.name}</a> on {dateFormat(post.created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
        </p>
        <div className="content article-body">
          {nl2br(post.excerpt)}
        </div>
      </div>
    </div>
  )
}

export default PostPreview
