import React from 'react'
import App from './App'
import HomePage from './components/pages/frontend/HomePage'
import PostPage from './components/pages/frontend/PostPage'
import LoginPage from './components/pages/frontend/LoginPage'
import RegisterPage from './components/pages/frontend/RegisterPage'
import NotFoundPage from './components/pages/frontend/NotFoundPage'

import Backend from './components/pages/admin/Backend'
import Dashboard from './components/pages/admin/Dashboard'

export default [
  {
    path: '/admin',
    ...Backend,
    routes: [
      {
        ...Dashboard
      }
    ]
  },
  {
    path: '/',
    ...App,
    routes: [
      {
        ...HomePage,
        exact: true,
        path: '/:page?'
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
