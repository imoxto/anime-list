import { Request, Response } from 'express';
import passport from 'passport';
import { authenticate } from '../middlewares';
import { Users } from '../models';
import { handleError, handleSuccess } from '../utils';

const userController = {
	async signUp(req: Request, res: Response) {
		try {
			let user: any = await Users.register(
				new Users({ username: req.body.username }),
				req.body.password
			);
			if (user) {
				if (req.body.firstname) user.firstname = req.body.firstname;
				if (req.body.lastname) user.lastname = req.body.lastname;
				if (req.body.birthday) user.birthday = req.body.birthday;

				user = await user.save();
				passport.authenticate('local')(req, res, () => {
					handleSuccess(
						res,
						// eslint-disable-next-line no-underscore-dangle
						{ token: authenticate.getToken({ _id: user._id }), user },
						'Registration success!'
					);
				});
			} else {
				throw new Error('Something went wrong!');
			}
		} catch (error) {
			handleError(res, 500, 'Something went wrong!', error);
		}
	},
	async login(req: Request, res: Response) {
		passport.authenticate('local')(req, res, () => {
			if (req.user) {
				handleSuccess(
					res,
					// eslint-disable-next-line no-underscore-dangle
					{ token: authenticate.getToken({ _id: req.user._id }), user: req.user },
					'login success!'
				);
			}
		});
	},

	async update(req: Request, res: Response) {
		res.json(req.user);
	},
};

export default userController;
