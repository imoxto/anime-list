import React, { FC } from 'react';

const LoginRegRightNav: FC<{ onClick: (login: boolean) => () => void }> = ({ onClick }) => {
	return (
		<div className="w-full block ml-4 lg:flex lg:items-right lg:w-auto">
			<button
				className="mr-4 bg-gray-700 hover:bg-gray-400 text-white rounded p-2"
				onClick={onClick(true)}
			>
				Login
			</button>
			<button
				className="mr-4 bg-gray-700 hover:bg-gray-400 text-white rounded p-2"
				onClick={onClick(false)}
			>
				Register
			</button>
		</div>
	);
};

export default LoginRegRightNav;
