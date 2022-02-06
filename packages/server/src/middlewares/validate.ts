import { BaseSchema } from 'yup';
import { Request, Response, NextFunction } from 'express';
import { ErrorApiResponse } from '../types';
import { logger, handleError } from '../utils';

const validate =
	(validationSchema: BaseSchema, checkQuery?: boolean) =>
	async (req: Request<any, any, any, any>, res: Response<ErrorApiResponse>, next: NextFunction) => {
		try {
			// throws an error if not valid
			const validatedData = await validationSchema.validate(checkQuery ? req.query : req.body);
			if (checkQuery) {
				req.query = validatedData;
			} else {
				req.body = validatedData;
			}
			next();
		} catch (err) {
			logger.error(err);
			handleError(res, 400, 'Bad Request');
		}
	};

export default validate;
