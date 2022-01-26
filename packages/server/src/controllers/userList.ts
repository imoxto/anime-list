/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { Animes, ULists } from '../models';
import { handleError, handleSuccess, logger } from '../utils';

export default {
	async addOrUpdate(req: Request, res: Response) {
		try {
			if (!req.user) {
				handleError(res, 401, 'Not Authenticated');
				return;
			}
			const animeId = req.params.animeId ? req.params.animeId : req.body._id || req.body.animeId;
			const anime = await Animes.findById(animeId);
			if (!anime) {
				handleError(res, 404, 'No Anime Found');
				return;
			}
			let uList = await ULists.findOne({ user: req.user._id });
			if (!uList) {
				uList = await ULists.create({ user: req.user._id, animes: { _id: animeId, ...req.body } });
			} else {
				const [uAnime] = uList.animes.filter((obj) => obj._id.toString() === animeId);
				if (uAnime) {
					if (req.body.score) uAnime.score = req.body.score;
					if (req.body.review) uAnime.review = req.body.review;
					if (req.body.status) uAnime.status = req.body.status;
				} else {
					uList.animes = uList.animes.concat([{ _id: animeId, ...req.body }]);
				}
				uList = await uList.save();
			}
			handleSuccess(res, uList);
		} catch (err) {
			logger.error(err);
			handleError(res, undefined, undefined, err);
		}
	},

	async delete(req: Request, res: Response) {
		try {
			if (!req.user) {
				handleError(res, 401, 'Not Authenticated');
				return;
			}
			const animeId = req.params.animeId ? req.params.animeId : req.body._id || req.body.animeId;
			const anime = await Animes.findById(animeId);
			if (!anime) {
				handleError(res, 404, 'No Anime Found');
				return;
			}
			let uList = await ULists.findOne({ user: req.user._id });
			if (uList) {
				if (uList.animes.length === 1 && uList.animes[0]._id.toString() === animeId) {
					const result = await uList.remove();
					handleSuccess(res, result, 'Removed');
				} else {
					uList.animes = uList.animes.filter((obj) => obj._id.toString() !== animeId);
					uList = await uList.save();
					handleSuccess(res, uList);
				}
			} else {
				handleError(res, 404, 'Nothing to Delete');
			}
		} catch (err) {
			logger.error(err);
			handleError(res, undefined, undefined, err);
		}
	},
};
