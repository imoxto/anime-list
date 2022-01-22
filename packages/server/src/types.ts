import { ObjectId } from 'mongoose';

export interface ErrorApiResponse {
	status: 'error';
	message: String;
	data: Error;
}
export interface SuccessApiResponse<data> {
	status: 'success';
	message: String;
	data: data;
}
export type ApiResponse<Data> = SuccessApiResponse<Data> | ErrorApiResponse;

export type accessLevels = 0 | 1 | 2 | 3 | 4 | 5;
export type visibility = 'Public' | 'Private' | 'Unlisted';
declare global {
	// eslint-disable-next-line no-unused-vars
	namespace Express {
		// eslint-disable-next-line no-unused-vars
		interface User {
			_id: ObjectId;
			username: string;
			firstname: string;
			lastname: string;
			email?: string;
			facebookId?: string;
			access: accessLevels;
			birthday: Date;
			description: string;
			flair: string;
			visibility: string;
			status: string;
		}
	}
}

export interface User {
	_id: ObjectId;
	username: string;
	firstname: string;
	lastname: string;
	email?: string;
	facebookId?: string;
	access: accessLevels;
	birthday: Date;
	description: string;
	flair: string;
	visibility: string;
	status: string;
}
