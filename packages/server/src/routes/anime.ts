import express from 'express';
import { animeController } from '../controllers';
import { authenticate } from '../middlewares';

const AnimeRouter = express.Router();

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
