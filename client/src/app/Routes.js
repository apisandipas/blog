import App from './App'
import HomePage from './pages/frontend/HomePage'
import PostPage from './pages/frontend/PostPage'
import LoginPage from './pages/frontend/LoginPage'
import RegisterPage from './pages/frontend/RegisterPage'
import NotFoundPage from './pages/frontend/NotFoundPage'
import ForgotPasswordPage from './pages/frontend/ForgotPasswordPage'
import ResetPasswordPage from './pages/frontend/ResetPasswordPage'

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
        ...PostPage,
        path: '/posts/:slug'
      },
      {
        ...LoginPage,
        path: '/login'
      },
      {
        ...RegisterPage,
        path: '/register'
      },
      {
        ...ForgotPasswordPage,
        path: '/forgot-password'
      },
      {
        ...ResetPasswordPage,
        path: '/reset-password'
      },
      {
        ...HomePage,
        exact: true,
        path: '/'
      },
      {
        ...HomePage,
        path: '/page/:page?'
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
