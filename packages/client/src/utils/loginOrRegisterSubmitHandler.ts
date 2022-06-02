import axios, { AxiosResponse } from 'axios';
import { ILoginFormInputs, IRegisterFormInputs } from '../types';

export default function loginOrRegisterSubmitHandler(
	str: 'Login' | 'Register',
	callbackOnSuccess?: (data: any) => void
) {
	return (data: ILoginFormInputs) => {
		axios
			.post(`${process.env.NEXT_PUBLIC_API_URL}user/${str === 'Login' ? 'login' : 'signup'}`, data)
			.then((res: AxiosResponse) => {
				if (res.data.status === 'success') {
					localStorage.setItem(
						'user',
						JSON.stringify({ user: res.data.data.user, token: res.data.data.token })
					);
					callbackOnSuccess &&
						callbackOnSuccess({ user: res.data.data.user, token: res.data.data.token });
				} else {
					console.log(res.data);
				}
			})
			.catch((err) => console.log(err));
	};
}
