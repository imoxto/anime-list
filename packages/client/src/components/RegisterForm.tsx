import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { IRegisterFormInputs } from '../types';

const schema = yup
	.object({
		firstname: yup.string(),
		username: yup.string().required(),
		password: yup.string().required(),
		lastname: yup.string(),
		birthday: yup.date(),
	})
	.required();

const RegisterForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterFormInputs>({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: IRegisterFormInputs) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('firstname')} />
			<p>{errors.firstname?.message}</p>

			<input {...register('lastname')} />
			<p>{errors.lastname?.message}</p>

			<input {...register('username')} />
			<p>{errors.username?.message}</p>

			<input {...register('password')} />
			<p>{errors.password?.message}</p>

			<input type="date" {...register('birthday')} />
			<p>{errors.birthday?.message}</p>

			<input type="submit" />
		</form>
	);
};

export default RegisterForm;
