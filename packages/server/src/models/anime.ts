import { PassportLocalModel } from 'mongoose';
import { mongoose } from '../utils';

const Anime = new mongoose.Schema(
	{
		titles: [{ type: String }],
		type: { type: String, default: 'TV' },
		episodes: { type: Number, default: 0 },
		status: { type: String, default: 'Not yet aired' },
		aired: { type: String, default: 'Unknown' },
		premiered: { type: String, default: 'Unknown' },
		producers: [{ type: String }],
		licensors: [{ type: String }],
		studios: [{ type: String }],
		source: { type: String, default: 'Manga' },
		genres: [{ type: String }],
		themes: [{ type: String }],
		demographic: { type: String, default: 'Shounen' },
		duration: { type: Number, default: 23 },
		rating: { type: Number, default: 17 },
		score: { type: Number, default: 0, max: 10, min: 0 },
		scoredUsers: { type: Number, default: 0 },
		members: { type: Number, default: 0 },
		favorites: { type: Number, default: 0 },
		externalLinks: [{ type: String }],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<string, any, PassportLocalModel<any>>('Anime', Anime);
