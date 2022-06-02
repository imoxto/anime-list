import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LoginOrRegister, Navbar } from '../components';
import { useContext, useEffect, useState } from 'react';
import { UserContext, UserProvider } from '../contexts';
import loginOrRegisterSubmitHandler from '../utils/loginOrRegisterSubmitHandler';

function MyApp({ Component, pageProps }: AppProps) {
	const [loginActivate, setLoginActivate] = useState(false);
	const [loginFlg, setLoginFlg] = useState(true);
	const UserStateContext = useContext(UserContext);

	const loginFlgControl = (str: 'Login' | 'Register') => () => setLoginFlg(str === 'Login');

	useEffect(() => {
		setLoginActivate(false);
	}, [UserStateContext]);

	return (
		<UserProvider>
			{loginActivate && (
				<LoginOrRegister
					login={loginFlg}
					loginOrReg={loginFlgControl}
					deactivate={() => setLoginActivate(false)}
					submitHandler={loginOrRegisterSubmitHandler}
				/>
			)}
			<Navbar
				onClick={(login) => {
					return () => {
						setLoginFlg(login);
						setLoginActivate(true);
					};
				}}
			/>
			<Component {...pageProps} />
		</UserProvider>
	);
}

export default MyApp;
