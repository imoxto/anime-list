import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ILoginFormInputs } from '../types';

const schema = yup
	.object({
		username: yup.string().required(),
		password: yup.string().required(),
	})
	.required();

const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginFormInputs>({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: ILoginFormInputs) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('username')} />
			<p>{errors.username?.message}</p>

			<input {...register('password')} />
			<p>{errors.password?.message}</p>

			<input type="submit" />
		</form>
	);
};

export default LoginForm;
