import { useContext } from 'react';
import { UserContext } from '../contexts';
import { NavLoginOrRegisterProps } from '../types';
import LoginRegRightNav from './LoginRegRightNav';
import UserRightNav from './UserRightNav';

const NavBar: React.FC<NavLoginOrRegisterProps> = ({ onClick }) => {
	const UserContextState = useContext(UserContext);
	return (
		<nav className="flex flex-warp items-center justify-between bg-gray-500 my-2 pt-4 px-5 font-bold">
			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<a
					href="/"
					className="p-4 ml-2 block border border-gray-500 hover:text-gray-200 hover:border-gray-600"
				>
					Home
				</a>
				<a
					href="/about"
					className="p-4 ml-2 block border border-gray-500 hover:text-gray-200 hover:border-gray-600"
				>
					About
				</a>
				<a
					href="/anime"
					className="p-4 ml-2 block border border-gray-500 hover:text-gray-200 hover:border-gray-600"
				>
					Animes
				</a>
			</div>
			{UserContextState && UserContextState[0].user ? (
				<UserRightNav />
			) : (
				<LoginRegRightNav onClick={onClick} />
			)}
		</nav>
	);
};

export default NavBar;
