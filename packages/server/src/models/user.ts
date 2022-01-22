import { PassportLocalModel } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { User } from '../types';

import { mongoose } from '../utils';

const UserModel = new mongoose.Schema(
	{
		firstname: {
			type: String,
			default: '',
		},
		lastname: {
			type: String,
			default: '',
		},
		email: String,
		facebookId: String,
		access: {
			type: Number,
			default: 0,
			min: 0,
			max: 5,
		},
		birthday: {
			type: Date,
			default: Date.now(),
		},
		description: {
			type: String,
			default: '',
		},
		flair: {
			type: String,
			default: '',
		},
		visibility: {
			type: String,
			default: 'Private',
		},
		status: {
			type: String,
			default: 'Active',
		},
	},
	{
		timestamps: true,
	}
);

UserModel.plugin(passportLocalMongoose, { session: false });

export default mongoose.model<User, any, PassportLocalModel<any>>('User', UserModel);
