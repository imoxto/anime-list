import Router from 'next/router';

const NavBar: React.FC = () => {
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
			<div className="w-full block ml-4 lg:flex lg:items-right lg:w-auto">
				<button
					className="mr-4 bg-gray-700 hover:bg-gray-400 text-white rounded p-2"
					onClick={() => Router.push('/login')}
				>
					Login
				</button>
				<button
					className="mr-4 bg-gray-700 hover:bg-gray-400 text-white rounded p-2"
					onClick={() => Router.push('/register')}
				>
					Register
				</button>
			</div>
		</nav>
	);
};

export default NavBar;
