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
	submitHandler: (
		str: 'Login' | 'Register',
		callbackOnSuccess?: (data: any) => void
	) => (data: FormInput) => void;
	activate?: () => void;
	deactivate?: () => void;
}

export interface NavLoginOrRegisterProps {
	onClick: (login: boolean) => () => void;
}

export interface IUserContextValue {
	user: undefined | IUser;
	token: string;
}

// api copied
export type userAccess = 0 | 1 | 2 | 3 | 4 | 5;
export type userVisibility = 'Public' | 'Private' | 'Unlisted';
export type userStatus = 'Active' | 'Muted' | 'Banned' | 'Inactive';
export interface IUser {
	_id: string;
	username: string;
	firstname: string;
	lastname: string;
	email?: string;
	facebookId?: string;
	profileImage?: string;
	access: userAccess;
	birthday: Date;
	description: string;
	flair: string;
	visibility: userVisibility;
	status: userStatus;
	listId: string;
}
