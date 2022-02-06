import { NextPage } from 'next';
import { LoginOrRegister } from '../components';

const Login: NextPage = () => {
	return <LoginOrRegister login={true} />;
};

export default Login;
