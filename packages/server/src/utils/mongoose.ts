import mongoose from 'mongoose';
import { blue } from 'colors';

mongoose
	.connect(process.env.mongoLocalUrl || 'mongodb://localhost:27017/animeList')
	.then(() => {
		console.log(blue('Successfully connected to mongodb'));
	})
	.catch((err) => {
		console.log(err);
	});

export default mongoose;
