import { Request, Response } from 'express';
import passport from 'passport';
import { authenticate } from '../middlewares';
import { Users } from '../models';
import { handleError } from '../utils';

const userController = {
	async signUp(req: Request, res: Response) {
		console.log('here');
		try {
			let user: any = await Users.register(
				new Users({ username: req.body.username }),
				req.body.password
			);
			if (user) {
				if (req.body.firstname) user.firstname = req.body.firstname;
				if (req.body.lastname) user.lastname = req.body.lastname;

				user = user.save();
				passport.authenticate('local')(req, res, () => {
					res.json({
						message: 'Registration success!',
						// eslint-disable-next-line no-underscore-dangle
						token: authenticate.getToken({ _id: user._id }),
						user,
					});
				});
			} else {
				throw new Error('Something went wrong!');
			}
		} catch (error) {
			handleError(res, 500, 'Something went wrong!', error);
		}
	},
};

export default userController;
