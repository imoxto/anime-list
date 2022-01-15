import { Sequelize } from 'sequelize';
import Color from 'colors';

const sequelize = new Sequelize(
	process.env.mySqlDb || 'test',
	process.env.mySqlUsername || 'root',
	process.env.mySqlPassword,
	{
		host: process.env.mySqlHost,
		dialect: 'mysql',
	}
);

const testConnection = async (connection: Sequelize) => {
	try {
		await connection.authenticate();
		console.log(Color.blue('Connected to database successfully!'));
	} catch (error) {
		// eslint-disable-next-line prefer-template
		console.error(Color.red('Unable to connect to the database: ' + error.message));
	}
};

testConnection(sequelize);

export default sequelize;
