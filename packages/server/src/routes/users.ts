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
);
UserRouter.get('/', (_, res) => {
	res.status(200).json({ data: 'Hello World!' });
});

export default UserRouter;
