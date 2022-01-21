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
declare global {
	// eslint-disable-next-line no-unused-vars
	namespace Express {
		// eslint-disable-next-line no-unused-vars
		interface User {
			username: string;
			_id: string;
			profile?: any;
			access: accessLevels;
			// Add whatever you're missing
		}
	}
}

export interface User {
	firstname: string;
	lastname: string;
	email: string;
	facebookId: string;
	access: accessLevels;
	birthday: Date;
	description: string;
	flair: string;
}
