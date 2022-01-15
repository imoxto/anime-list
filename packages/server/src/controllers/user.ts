import { Request, Response } from 'express';
import { User } from '../models';

const userController = {
	async signUp(req: Request, res: Response) {
		console.log('here');
		try {
			await User.create({
				username: req.body.username || 'x2Imouto',
				password: req.body.password || 'password',
			});
			res.json({
				data: 'Successfully created user',
			});
		} catch (err) {
			console.error(err);
		}
	},
};

export default userController;
