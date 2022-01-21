import { Response } from 'express';
import { ErrorApiResponse, SuccessApiResponse } from '../types';

const handleError = (
	res: Response<ErrorApiResponse>,
	statusCode?: number,
	message?: string,
	err?: Error
) => {
	res.status(statusCode || 500).json({
		status: 'error',
		message: message || 'Something went wrong, please try again!',
		data: err || new Error('Something went wrong, please try again!'),
	});
};

const handleSuccess = (
	res: Response<SuccessApiResponse<any>>,
	data: any,
	message?: string,
	statusCode?: number
) => {
	res.status(statusCode || 200).json({
		status: 'success',
		message: message || 'success',
		data,
	});
};

export { handleError, handleSuccess };
