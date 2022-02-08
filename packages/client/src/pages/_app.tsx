import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LoginOrRegister, Navbar } from '../components';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const [loginActivate, setLoginActivate] = useState(false);
	const [loginFlg, setLoginFlg] = useState(true);

	const loginFlgControl = (str: 'Login' | 'Register') => () => setLoginFlg(str === 'Login');

	return (
		<>
			{loginActivate && (
				<LoginOrRegister
					login={loginFlg}
					loginOrReg={loginFlgControl}
					deactivate={() => setLoginActivate(false)}
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
		</>
	);
}

export default MyApp;
