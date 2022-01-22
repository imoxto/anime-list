import express from 'express';
import userController from '../controllers/user';
import { authenticate } from '../middlewares';

const UserRouter = express.Router();

UserRouter.post('/signup', userController.signUp);
UserRouter.post('/login', userController.login);
UserRouter.put(
	'/:username',
	authenticate.verifyUser,
	authenticate.verifyAccess(0, true),
	userController.update
).get('/:username', authenticate.verifyUser, userController.findOne);
UserRouter.get('/', authenticate.verifyUser, userController.find);

export default UserRouter;
