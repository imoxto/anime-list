import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IRegisterFormInputs, RegisterFormProps } from '../types';

const schema = yup
	.object({
		firstname: yup.string(),
		username: yup.string().required('Username is Required!'),
		password: yup.string().min(8, 'Too short password!').required('Password is Required!'),
		lastname: yup.string(),
		birthday: yup.date().required('Birthday is Required!'),
	})
	.required();

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterFormInputs>({
		resolver: yupResolver(schema),
	});

	return (
		<form className="flex flex-col py-2 mt-2" onSubmit={handleSubmit(props.onSubmit)}>
			<div className="flex flex-col p-1">
				<div className="flex flex-row justify-between">
					<p className="font-bold mr-2">Firstname: </p>
					<input
						className={
							'px-1 border border-solid ' +
							(errors.firstname ? 'border-red-600' : 'border-gray-300 hover:border-gray-400')
						}
						placeholder="Firstname"
						{...register('firstname')}
					/>
				</div>
			</div>

			<div className="flex flex-col p-1">
				<div className="flex flex-row justify-between">
					<p className="font-bold mr-2">Lastname: </p>
					<input
						className={
							'px-1 border border-solid ' +
							(errors.lastname ? 'border-red-600' : 'border-gray-300 hover:border-gray-400')
						}
						placeholder="Lastname"
						{...register('lastname')}
					/>
				</div>
			</div>

			<div className="flex flex-col p-1">
				<div className="flex flex-row justify-between">
					<p className="font-bold mr-2">Email: </p>
					<input
						className={
							'px-1 border border-solid ' +
							(errors.email ? 'border-red-600' : 'border-gray-300 hover:border-gray-400')
						}
						placeholder="email address"
						{...register('email')}
					/>
				</div>
			</div>

			<div className="flex flex-col p-1">
				<div className="flex flex-row justify-between">
					<p className="font-bold mr-2">Username: </p>
					<input
						className={
							'px-1 border border-solid ' +
							(errors.username ? 'border-red-600' : 'border-gray-300 hover:border-gray-400')
						}
						placeholder="Username"
						{...register('username')}
					/>
				</div>
			</div>

			<div className="flex flex-col p-1">
				<div className="flex flex-row justify-between">
					<p className="font-bold mr-2">Password: </p>
					<input
						className={
							'px-1 border border-solid ' +
							(errors.password ? 'border-red-600' : 'border-gray-300 hover:border-gray-400')
						}
						type="password"
						placeholder="Password"
						{...register('password')}
					/>
				</div>
			</div>

			<div className="flex flex-col p-1">
				<div className="flex flex-row justify-between">
					<p className="font-bold mr-2">Birthday: </p>
					<input
						type="date"
						className={
							'px-1 border border-solid ' +
							(errors.birthday ? 'border-red-600' : 'border-gray-300 hover:border-gray-400')
						}
						{...register('birthday')}
					/>
				</div>
			</div>

			<input className="m-3 p-1 border hover:bg-gray-200" type="submit" />
			<p id="LoginError" className="small text-sm text-red-600">
				{(errors.password && errors.password.message) ||
					(errors.username && errors.username.message) ||
					(errors.birthday && 'Invalid Birthdate!')}
			</p>
		</form>
	);
};

export default RegisterForm;
