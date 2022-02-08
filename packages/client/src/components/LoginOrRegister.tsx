import { LoginForm, RegisterForm } from '../components';
import { LoginOrRegisterProps } from '../types';

const LoginOrRegister: React.FC<LoginOrRegisterProps> = (props) => {
	return (
		<div className="w-screen h-screen flex flex-col p-6 bg-gray-100 items-center justify-center fixed bg-opacity-70">
			<div className="w-96 h-96 rounded-md bg-white box shadow-sm flex flex-col p-4 center">
				<div className="flex flex-row small justify-end">
					<a
						className="block px-1 pb-0.5 mb-1 box rounded-full text-sm font-bold border border-l hover:border-black"
						onClick={props.deactivate}
					>
						{'\u00D7'}
					</a>
				</div>
				<h1 className="text-center font-bold pt-1 bg-blue-200">
					{props.login ? 'Login' : 'Register'}
				</h1>
				{props.login ? <LoginForm /> : <RegisterForm />}
				<p>
					{props.login ? "Don't" : 'Already'} have an account?{' '}
					{props.login ? (
						<a onClick={props.loginOrReg('Register')}>Sign Up!</a>
					) : (
						<a onClick={props.loginOrReg('Login')}>Log In!</a>
					)}
				</p>
			</div>
		</div>
	);
};

export default LoginOrRegister;
