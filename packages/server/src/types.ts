import { ObjectId } from 'mongoose';

// Api Responses
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

// user related types/interfaces
export type userAccess = 0 | 1 | 2 | 3 | 4 | 5;
export type userVisibility = 'Public' | 'Private' | 'Unlisted';
export type userStatus = 'Active' | 'Muted' | 'Banned' | 'Inactive';
export interface IUser {
	_id: ObjectId;
	username: string;
	firstname: string;
	lastname: string;
	email?: string;
	facebookId?: string;
	profileImage?: string;
	access: userAccess;
	birthday: Date;
	description: string;
	flair: string;
	visibility: userVisibility;
	status: userStatus;
	listId: ObjectId;
}

// anime related types/interfaces
export type animeType = 'TV' | 'Movie' | 'OVA' | 'ONA' | 'Special';
export type animeSource = 'Manga' | 'Light Novel' | 'Original' | 'Game' | 'Novel' | 'Other';
export type demographic = 'Shonen' | 'Shoujo' | 'Seinen' | 'Josei';
export interface IAnime {
	titles: string[];
	type: animeType;
	episodes: number;
	status: { type: String; default: 'Not yet aired' };
	aired: string;
	premiered: string;
	producers: string[];
	licensors: string[];
	studios: string[];
	source: animeSource;
	genres: string[];
	themes: string[];
	demographic: demographic;
	duration: number;
	rating: number;
	score: number; // total score
	scoredUsers: number;
	members: number;
	favorites: number;
	externalLinks: string[];
}

// anime-list related types/interfaces
export type userAnimeStatus = 'Completed' | 'Watching' | 'Plan to Watch' | 'Dropped' | 'On Hold';
export interface userAnime {
	_id: ObjectId;
	score: number;
	review: string;
	status: userAnimeStatus;
}
export interface IUserList {
	user: ObjectId;
	animes: userAnime[];
}

// global declarations
declare global {
	// eslint-disable-next-line no-unused-vars
	namespace Express {
		// eslint-disable-next-line no-unused-vars
		interface User extends IUser {}
	}
}
