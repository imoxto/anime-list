import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LoginOrRegister, Navbar } from '../components';
import { useState } from 'react';
import { ILoginFormInputs, IRegisterFormInputs } from '../types';
import axios, { AxiosResponse } from 'axios';

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
					submitHandler={(str) => {
						if (str === 'Login') {
							return (data: ILoginFormInputs) => {
								axios
									.post(`${process.env.NEXT_PUBLIC_API_URL}user/login`, data)
									.then((res: AxiosResponse) => {
										if (res.data.status === 'success') {
											localStorage.setItem('Auth', res.data.data.token);
										} else {
											console.log(res.data);
										}
									})
									.catch((err) => console.log(err));
							};
						} else {
							return (data: IRegisterFormInputs) => {
								axios
									.post(`${process.env.NEXT_PUBLIC_API_URL}user/signup`, data)
									.then((res: AxiosResponse) => {
										if (res.data.status === 'success') {
											localStorage.setItem('Auth', res.data.data.token);
										} else {
											console.log(res.data);
										}
									})
									.catch((err) => console.log(err.message));
							};
						}
					}}
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
