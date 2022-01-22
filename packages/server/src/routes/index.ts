import express from 'express';
import AnimeRouter from './anime';

import UserRouter from './user';

const RootRouter = express.Router();

RootRouter.get('/', (_, res) => {
	res.status(200).json({ data: 'Hello World!' });
});

RootRouter.use('/user', UserRouter);
RootRouter.use('/anime', AnimeRouter);

export default RootRouter;
