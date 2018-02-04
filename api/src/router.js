import express  from 'express'
import passport from 'passport'
// import requireLogin from './middleware/require-login'
import postsController from './controllers/PostsController'
import usersController from './controllers/UsersController'
import authController from './controllers/authController'

const router = express.Router()

const requireLogin = passport.authenticate('local', { session: false })
const requireToken = passport.authenticate('jwt', { session: false })

router.post('/login', 
  requireLogin,
  authController.login
)
router.get('/logout', authController.logout)
router.post('/register', authController.register)
router.get('/current-user', 
  requireToken, 
  authController.currentUser
)

router.get('/users', requireToken, usersController.index)
router.get('/users/:id', usersController.show)
router.post('/users', usersController.add)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.delete)

router.get('/posts', postsController.index)
router.get('/posts/:slug', postsController.show)
router.post('/posts', postsController.add)
router.put('/posts/:slug', postsController.update)
router.delete('/posts/:slug', postsController.delete)

export default router

