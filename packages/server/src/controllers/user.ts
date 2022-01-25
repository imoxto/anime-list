import { Request, Response } from 'express';
import passport from 'passport';
import { authenticate } from '../middlewares';
import { Users } from '../models';
import { handleError, handleSuccess } from '../utils';

export default {
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
				if (req.body.visibility) user.visibility = req.body.visibility;

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

	async updateOne(req: Request, res: Response) {
		try {
			const result = await Users.updateOne(
				{ username: req.params.username },
				{ $set: { ...req.body } }
			);
			const user = await Users.findOne({ username: req.params.username });
			handleSuccess(res, { result, user });
		} catch (error) {
			handleError(res, 500, error.message, error);
		}
	},

	async find(req: Request, res: Response) {
		try {
			let users;
			if (req.user && req.user.access === 5) {
				users = await Users.find(req.query);
				handleSuccess(res, users);
			} else {
				users = await Users.find({ ...req.query, visibility: { $eq: 'Public' } });
				const privateUsers = await Users.find(
					{ ...req.query, visibility: { $eq: 'Private' } },
					{ username: 1, visibility: 1, description: 1, status: 1 }
				);
				handleSuccess(res, [...users, ...privateUsers]);
			}
		} catch (error) {
			handleError(res, 404, error.message, error);
		}
	},

	async findOne(req: Request, res: Response) {
		try {
			let user;
			if (req.user && req.user.access === 5) {
				user = await Users.findOne({ username: req.params.username });
			} else {
				user = await Users.find({ username: req.params.username, visibility: { $ne: 'Unlisted' } });
			}
			handleSuccess(res, user);
		} catch (error) {
			handleError(res, 404, error.message, error);
		}
	},
};
