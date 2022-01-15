import { DataTypes, Model } from 'sequelize';
import { sequelize, syncModel } from '../utils';

class User extends Model {}

User.init(
	{
		// Model attributes are defined here
		firstName: {
			type: DataTypes.STRING,
			defaultValue: '',
		},
		lastName: {
			type: DataTypes.STRING,
			defaultValue: '',
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize, // We need to pass the connection instance
		modelName: 'User', // We need to choose the model name
	}
);

syncModel(User);
// the defined model is the class itself
console.log(User === sequelize.models.User); // true

export default User;
