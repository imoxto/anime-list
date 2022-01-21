import dotenv from 'dotenv';
import fs from 'fs';
import mongoose from 'mongoose';
import path from 'path';
import { blue } from 'colors';

const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '../../../.env/.env')));
Object.keys(envConfig).forEach((key) => {
	process.env[key] = envConfig[key];
});

mongoose
	.connect(process.env.mongoLocalUrl || 'mongodb://localhost:27017/animeList')
	.then(() => {
		console.log(blue('Successfully connected to mongodb'));
	})
	.catch((err) => {
		console.log(err);
	});
