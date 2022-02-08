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
	loginOrReg: (str: 'Login' | 'Register') => () => void;
	activate?: () => void;
	deactivate?: () => void;
}

export interface NavLoginOrRegisterProps {
	onClick: (login: boolean) => () => void;
}
