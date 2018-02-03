import React from 'react'
import App from './App'
import HomePage from './pages/frontend/HomePage'
import PostPage from './pages/frontend/PostPage'
import LoginPage from './pages/frontend/LoginPage'
import RegisterPage from './pages/frontend/RegisterPage'
import NotFoundPage from './pages/frontend/NotFoundPage'

import Backend from './pages/admin/Backend'
import Dashboard from './pages/admin/Dashboard'

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
        path: '/'
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
      // {
      //   ...AdminPage,
      //   path: '/admin',
      // },
      {
        ...NotFoundPage
      }
    ],
  }
]