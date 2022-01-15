import express from 'express';
import UserRouter from './users';

const RootRouter = express.Router();

RootRouter.get('/', (_, res) => {
	res.status(200).json({ data: 'Hello World!' });
});

RootRouter.use('/users', UserRouter);

export default RootRouter;
