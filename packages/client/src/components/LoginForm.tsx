import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ILoginFormInputs } from '../types';

const schema = yup
	.object({
		username: yup.string().required('Username is required!'),
		password: yup.string().required('Password is required!'),
	})
	.required();

const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<ILoginFormInputs>({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: ILoginFormInputs) => console.log(data);

	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)} onChange={watch}>
			<div className="flex flex-col fixed">
				<div className="flex flex-row">
					<p className="font-bold">Username: </p>
					<input {...register('username')} />
				</div>
				<p className="small text-sm">
					{errors.username ? '❌ ' + errors.username.message : '✔ no errors'}
				</p>
			</div>

			<div className="flex flex-col fixed">
				<div className="flex flex-row">
					<p className="font-bold">Password: </p>
					<input {...register('username')} />
				</div>
				<p className="small text-sm">
					{errors.password ? '❌ ' + errors.password.message : '✔ no errors'}
				</p>
			</div>

			<input className="fixed" type="submit" />
		</form>
	);
};

export default LoginForm;
