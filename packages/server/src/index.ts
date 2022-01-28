import express from 'express';
import { blue } from 'colors';
import cors from 'cors';

import './config';
import { logger } from './middlewares';
import RootRouter from './routes';

const PORT = process.env.serverPort || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

app.use(RootRouter);

app.listen(PORT, () => {
	console.log(blue(`Server listening on port ${PORT}`));
});
