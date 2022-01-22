import { PassportLocalModel } from 'mongoose';
import { mongoose } from '../utils';

const Anime = new mongoose.Schema(
	{
		Titles: [{ type: String }],
		Type: { type: String, default: 'TV' },
		Episodes: { type: Number, default: 0 },
		Status: { type: String, default: 'Not yet aired' },
		Aired: { type: String, default: 'Unknown' },
		Premiered: { type: String, default: 'Unknown' },
		Producers: [{ type: String }],
		Licensors: [{ type: String }],
		Studios: [{ type: String }],
		Source: { type: String, default: 'Manga' },
		Genres: [{ type: String }],
		Themes: [{ type: String }],
		Demographic: { type: String, default: 'Shounen' },
		Duration: { type: Number, default: 23 },
		Rating: { type: Number, default: 17 },
		Score: { type: Number, default: 0, max: 10, min: 0 },
		ScoredUsers: { type: Number, default: 0 },
		Members: { type: Number, default: 0 },
		Favorites: { type: Number, default: 0 },
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<string, any, PassportLocalModel<any>>('Anime', Anime);
