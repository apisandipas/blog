import express  from 'express';
import passport from 'passport'
import requireLogin from './middleware/require-login'
import postsController from './controllers/PostsController'
import usersController from './controllers/UsersController'
import authController from './controllers/authController'

const router = express.Router();

router.post('/login', 
  passport.authenticate('local'),
  authController.login
)
router.get('/logout', authController.logout);

router.get('/users', usersController.index);
router.get('/users/:id', usersController.show);
router.post('/users', usersController.add);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

router.get('/posts', requireLogin, postsController.index);
router.get('/posts/:id', postsController.show);
router.post('/posts', postsController.add);
router.put('/posts/:id', postsController.update);
router.delete('/posts/:id', postsController.delete);

export default router;

