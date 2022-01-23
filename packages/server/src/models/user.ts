import { PassportLocalModel } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { User } from '../types';

import { mongoose } from '../utils';

const UserSchema = new mongoose.Schema(
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
			default: 1,
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

UserSchema.plugin(passportLocalMongoose, { session: false });
const UserModel = mongoose.model<User, PassportLocalModel<any>>('User', UserSchema);
export default UserModel;
