import express from 'express';
import userController from '../controllers/user';

const UserRouter = express.Router();

UserRouter.post('/signup', userController.signUp);
UserRouter.get('/', (_, res) => {
	res.status(200).json({ data: 'Hello World!' });
});

export default UserRouter;
