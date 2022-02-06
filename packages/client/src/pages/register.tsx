import { NextPage } from 'next';
import { LoginOrRegister } from '../components';

const Register: NextPage = () => {
	return <LoginOrRegister login={false} />;
};

export default Register;
