import React from 'react'
import App from './App'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...PostPage,
        path: '/posts/:slug'
      },
      {
        ...LoginPage,
        path: '/login',
      },
      {
        ...RegisterPage,
        path: '/register',
      },
      {
        ...NotFoundPage
      }
    ],
  }
]