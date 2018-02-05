import express  from 'express'
import passport from 'passport'
import requireRole from './middleware/require-role'
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

router.get('/users', 
  requireToken, 
  requireRole('ADMIN'),
  usersController.index
)
router.get('/users/:id', 
  requireToken, 
  requireRole('ADMIN'),
  usersController.show
)
router.post('/users', 
  requireToken, 
  requireRole('ADMIN'),
  usersController.add
)
router.put('/users/:id',
  requireToken, 
  requireRole('ADMIN'), 
  usersController.update
)
router.delete('/users/:id', 
  requireToken, 
  requireRole('ADMIN'),
  usersController.delete
)

router.get('/posts', postsController.index)
router.get('/posts/:slug', postsController.show)
router.post('/posts', 
  requireToken, 
  requireRole('ADMIN'),
  postsController.add
)
router.put('/posts/:slug', 
  requireToken, 
  requireRole('ADMIN'),
  postsController.update
)
router.delete('/posts/:slug', 
  requireToken, 
  requireRole('ADMIN'),
  postsController.delete
)

export default router

