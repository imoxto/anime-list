import React, { useState } from 'react';

const PasswordField: React.FC = () => {
	const [type, setType] = useState('password');

	return (
		<label className="password">
			<input type={type} className="password__input" placeholder="Password" />
			<span
				className="password__show"
				onClick={() => setType(type === 'text' ? 'password' : 'text')}
			>
				{type === 'text' ? 'Hide' : 'Show'}
			</span>
		</label>
	);
};

export default PasswordField;
