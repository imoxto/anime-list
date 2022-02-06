import { useState } from 'react';
import { LoginForm, RegisterForm } from '../components';
import { LoginOrRegisterProps } from '../types';

const LoginOrRegister: React.FC<LoginOrRegisterProps> = (props = { login: true }) => {
	const [logingIn, setLogingIn] = useState(props.login);
	return (
		<>
			<h1 className="text-center bg-blue-200">{logingIn ? 'Login' : 'Register'}</h1>
			{logingIn ? <LoginForm /> : <RegisterForm />}
			<p>
				{logingIn ? "Don't" : 'Already'} have an account?{' '}
				{logingIn ? (
					<a onClick={() => setLogingIn(false)}>Sign Up!</a>
				) : (
					<a onClick={() => setLogingIn(true)}>Log In!</a>
				)}
			</p>
		</>
	);
};

export default LoginOrRegister;
