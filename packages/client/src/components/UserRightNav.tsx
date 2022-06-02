import React, { useContext } from 'react';
import { UserContext } from '../contexts';

const UserRightNav = () => {
	const UserContextState = useContext(UserContext);
	return (
		<div className="w-full block ml-4 lg:flex lg:items-right lg:w-auto">
			<a
				href="/user"
				className="p-4 ml-2 block border border-gray-500 hover:text-gray-200 hover:border-gray-600"
			>
				{UserContextState && UserContextState[0].user?.username}
			</a>
		</div>
	);
};

export default UserRightNav;
