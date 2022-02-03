const Login: React.FC = () => {
	return (
		<div>
			<h1 className="m-3">Login</h1>
			<form action="" className="loginForm">
				<input type="text" name="username" />
				<input type="text" name="password" />
				<input type="button" name="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Login;
