import express from 'express';
import { handleSuccess } from '../utils';
import AnimeRouter from './anime';

import UserRouter from './user';

const RootRouter = express.Router();

RootRouter.get('/', (_, res) => {
	handleSuccess(res, 'Hello World!');
});

RootRouter.use('/user', UserRouter);
RootRouter.use('/anime', AnimeRouter);

export default RootRouter;
