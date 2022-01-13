import { object, string, date } from 'yup';

const registerUser = object({
	name: string(),
	username: string().required(),
	birthday: date().required(),
	email: string().email('Not a valid email'),
	password: string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
})
	.strict()
	.noUnknown();

const testFunction = async (obj: any) => {
	const result = await registerUser.isValid(obj);
	return result;
};

const isPrime = (num: number) => {
	for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
	return num > 1;
};

export { registerUser, testFunction, isPrime };
