import { Request, Response } from 'express';
import { Animes } from '../models';
import { handleError, handleSuccess } from '../utils';

export default {
	async findOne(req: Request, res: Response) {
		try {
			// eslint-disable-next-line no-underscore-dangle
			const anime = await Animes.findOne({ _id: req.params.animeId });
			if (!anime) throw new Error('No anime found');
			handleSuccess(res, anime);
		} catch (error) {
			handleError(res, 404, error.message, error);
		}
	},
	async find(req: Request, res: Response) {
		try {
			// eslint-disable-next-line no-underscore-dangle
			const animes = await Animes.find(req.query);
			handleSuccess(res, animes);
		} catch (error) {
			handleError(res, 404, error.message, error);
		}
	},
	async updateOne(req: Request, res: Response) {
		try {
			const result = await Animes.updateOne({ _id: req.params.animeId }, { $set: { ...req.body } });
			const anime = await Animes.findOne({ _id: req.params.animeId });
			handleSuccess(res, { result, anime });
		} catch (error) {
			handleError(res, 500, error.message, error);
		}
	},
	async updateMany(req: Request, res: Response) {
		try {
			const result = await Animes.updateMany(req.query, { $set: { ...req.body } });
			const anime = await Animes.findOne({ _id: req.params.animeId });
			handleSuccess(res, { result, anime });
		} catch (error) {
			handleError(res, 500, error.message, error);
		}
	},
	async create(req: Request, res: Response) {
		try {
			const animes = await Animes.create(req.body);
			handleSuccess(res, { animes });
		} catch (error) {
			handleError(res, 500, error.message, error);
		}
	},
};
