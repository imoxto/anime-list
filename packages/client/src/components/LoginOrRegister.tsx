import { useRouter } from 'next/router';
import { useContext } from 'react';
import { LoginForm, RegisterForm } from '../components';
import { UserContext } from '../contexts';
import { LoginOrRegisterProps } from '../types';

const LoginOrRegister: React.FC<LoginOrRegisterProps<any>> = (props) => {
	const router = useRouter();
	const userContextArr = useContext(UserContext);
	const onSuccess = (data: any) => {
		userContextArr && userContextArr[1](data);
		router.reload();
	};
	return (
		<div className="w-screen h-screen flex flex-col p-6 bg-gray-300 items-center justify-center fixed bg-opacity-70">
			<div className="w-96 h-96 rounded-md bg-white box shadow-sm flex flex-col p-4 center">
				<div className="flex flex-row small justify-end">
					<a
						className="cursor-pointer block px-1 pb-0.5 mb-1 box rounded-full text-sm font-bold border border-l hover:border-black"
						onClick={props.deactivate}
					>
						{'\u00D7'}
					</a>
				</div>
				<h1 className="text-center font-bold pt-1 bg-blue-200">
					{props.login ? 'Login' : 'Register'}
				</h1>
				{props.login ? (
					<LoginForm onSubmit={props.submitHandler('Login', onSuccess)} />
				) : (
					<RegisterForm onSubmit={props.submitHandler('Register', onSuccess)} />
				)}
			</div>
			<div className="w-96 h-6 rounded-sm bg-white box shadow-sm flex flex-col pl-2 center">
				<p>
					{props.login ? "Don't have an account? " : 'Already have an account? '}
					<a
						className="font-bold hover:text-blue-800 cursor-pointer"
						onClick={props.loginOrReg(props.login ? 'Register' : 'Login')}
					>
						{props.login ? 'Sign Up!' : 'Login!'}
					</a>
				</p>
			</div>
		</div>
	);
};

export default LoginOrRegister;
