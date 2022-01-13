import express from 'express';

const RootRouter = express.Router();

RootRouter.get('/', (_, res) => {
	res.status(200).json({ data: 'Hello World!' });
});

export default RootRouter;
