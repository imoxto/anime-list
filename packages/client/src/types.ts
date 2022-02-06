export interface IRegisterFormInputs {
	firstname?: string;
	lastname?: string;
	username: string;
	password: string;
	birthday: Date;
}

export interface ILoginFormInputs {
	username: string;
	password: string;
}

export interface LoginOrRegisterProps {
	login: boolean;
}
