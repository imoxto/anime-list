import { mongoose } from '../utils';
import { IUserList } from '../types';

const UserListSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		animes: [
			{
				_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Anime', required: true },
				score: { type: Number, default: 0 },
				review: String,
				status: { type: String, default: 'Plan to Watch' },
			},
		],
	},
	{
		timestamps: true,
	}
);
const UserListModel = mongoose.model<IUserList>('UserList', UserListSchema);
UserListModel.syncIndexes();
export default UserListModel;
