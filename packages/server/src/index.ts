import express from 'express';
import { blue } from 'colors';

import './config';
import { logger } from './middlewares';
import RootRouter from './routes';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(logger);

app.use(RootRouter);

app.listen(PORT, () => {
	console.log(blue(`Server listening on port ${PORT}`));
});
