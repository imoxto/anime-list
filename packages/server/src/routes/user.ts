import express from 'express';
import { userController } from '../controllers';
import { authenticate } from '../middlewares';

const UserRouter = express.Router();

UserRouter.post('/signup', userController.signUp);
UserRouter.post('/login', userController.login);
UserRouter.put(
	'/:username',
	authenticate.verifyUser,
	authenticate.verifyAccess(0, true),
	userController.updateOne
).get('/:username', authenticate.verifyUser, userController.findOne);
UserRouter.get('/', userController.find);

export default UserRouter;
