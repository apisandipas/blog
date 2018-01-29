import express  from 'express';
import postsController from './controllers/PostsController'
import usersController from './controllers/UsersController'
import authController from './controllers/authController'

const router = express.Router();

router.post('/login', authController.login)

router.get('/users', usersController.index);
router.get('/users/:id', usersController.show);
router.post('/users', usersController.add);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

router.get('/posts', postsController.index);
router.get('/posts/:id', postsController.show);
router.post('/posts', postsController.add);
router.put('/posts/:id', postsController.update);
router.delete('/posts/:id', postsController.delete);

export default router;

