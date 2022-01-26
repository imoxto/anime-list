import express from 'express';
import { animeController } from '../controllers';
import { authenticate } from '../middlewares';
import UserListRouter from './userList';

const AnimeRouter = express.Router();

AnimeRouter.use('/list', UserListRouter);
AnimeRouter.use('/:animeId/list', UserListRouter);

AnimeRouter.post(
	'/',
	authenticate.verifyUser,
	authenticate.verifyAccess(4),
	animeController.create
);
AnimeRouter.get('/', animeController.find);
AnimeRouter.get('/:animeId', animeController.findOne);
AnimeRouter.put(
	'/:animeId',
	authenticate.verifyUser,
	authenticate.verifyAccess(4),
	animeController.updateOne
);

export default AnimeRouter;
