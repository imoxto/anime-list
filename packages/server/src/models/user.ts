import { PassportLocalModel } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { IUser } from '../types';

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
		profileImage: String,
		access: {
			type: Number,
			default: 1,
			min: 0,
			max: 5,
		},
		birthday: {
			type: Date,
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
const UserModel = mongoose.model<IUser, PassportLocalModel<any>>('User', UserSchema);
// UserModel.syncIndexes()
export default UserModel;
