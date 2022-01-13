import express from 'express';
import Color from 'colors';
import { logger } from './middlewares';
import './config';
import RootRouter from './routes';

const PORT = process.env.PORT || 3000;

// testing lerna-link

const app = express();
app.use(express.json());
app.use(logger);

app.use(RootRouter);

app.listen(PORT, () => {
	console.log(Color.blue(`Server listening on port ${PORT}`));
});
