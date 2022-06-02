import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';

import React from 'react';
import { IUserContextValue } from '../types';

const defUserContextVal: IUserContextValue = {
	user: undefined,
	token: '',
};

export const UserContext = createContext<
	null | [IUserContextValue, Dispatch<SetStateAction<IUserContextValue>>]
>(null);

export const UserProvider: FC = ({ children }) => {
	const userStateArray = useState<IUserContextValue>(defUserContextVal);
	useEffect(() => {
		const userDataInString = localStorage.getItem('user');
		userDataInString && userStateArray[1](JSON.parse(userDataInString));
	}, []);
	return <UserContext.Provider value={userStateArray}>{children}</UserContext.Provider>;
};
