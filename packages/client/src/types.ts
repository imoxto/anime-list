export interface IRegisterFormInputs {
	firstname?: string;
	lastname?: string;
	username: string;
	password: string;
	birthday: Date;
	email: string;
}

export interface ILoginFormInputs {
	username: string;
	password: string;
}

export interface LoginFormProps {
	onSubmit: (data: ILoginFormInputs) => void;
}
export interface RegisterFormProps {
	onSubmit: (data: IRegisterFormInputs) => void;
}

export interface LoginOrRegisterProps<FormInput> {
	login: boolean;
	loginOrReg: (str: 'Login' | 'Register') => () => void;
	submitHandler: (str: 'Login' | 'Register') => (data: FormInput) => void;
	activate?: () => void;
	deactivate?: () => void;
}

export interface NavLoginOrRegisterProps {
	onClick: (login: boolean) => () => void;
}
