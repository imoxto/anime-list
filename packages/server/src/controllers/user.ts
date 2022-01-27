import { Request, Response } from 'express';
import passport from 'passport';
import { pick } from 'lodash';
import { authenticate } from '../middlewares';
import { ULists, Users } from '../models';
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
			let list;
			if (req.user && (req.user.access === 5 || req.user.username === req.params.username)) {
				user = await Users.findOne({ username: req.params.username });
				// eslint-disable-next-line no-underscore-dangle
				if (user) list = await ULists.findOne({ user: user._id });
				handleSuccess(res, { ...user, list: list ? list.animes : undefined });
			} else {
				user = await Users.findOne({
					username: req.params.username,
					visibility: { $ne: 'Unlisted' },
				});
				// eslint-disable-next-line no-underscore-dangle
				if (user && user.visibility === 'Public') {
					handleSuccess(res, {
						...user,
						list,
					});
				} else if (user && user.visibility === 'Private') {
					handleSuccess(res, {
						...pick(user, ['username', 'visibility', 'description', 'status']),
						list,
					});
				}
			}
		} catch (error) {
			handleError(res, 404, error.message, error);
		}
	},
};
