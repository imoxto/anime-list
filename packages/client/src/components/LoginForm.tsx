import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ILoginFormInputs, LoginFormProps } from '../types';
import PasswordField from './PasswordField';

const schema = yup
	.object({
		username: yup.string().required('Username is required!'),
		password: yup.string().required('Password is required!'),
	})
	.required();

const LoginForm: React.FC<LoginFormProps> = (props) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<ILoginFormInputs>({
		resolver: yupResolver(schema),
	});

	return (
		<form
			className="flex flex-col py-2 mt-2"
			onSubmit={handleSubmit(props.onSubmit)}
			onChange={watch}
		>
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
					<PasswordField
						style={
							'px-1 border border-solid ' +
							(errors.password ? 'border-red-600' : 'border-gray-300 hover:border-gray-400')
						}
						reg={register}
					/>
				</div>
			</div>

			<input className="m-3 p-1 border hover:bg-gray-200 cursor-pointer" type="submit" />
			<p id="LoginError" className="small text-sm text-red-600">
				{(errors.password && errors.password.message) ||
					(errors.username && errors.username.message)}
			</p>
		</form>
	);
};

export default LoginForm;
