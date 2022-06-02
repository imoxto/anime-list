import React, { useState } from 'react';
import Image from 'next/image';
import { UseFormRegister } from 'react-hook-form';

const PasswordField: React.FC<{
	reg: UseFormRegister<any>;
	style: string;
}> = ({ reg, style }) => {
	const [type, setType] = useState('password');

	return (
		<label className="password">
			<span
				className="px-1 border border-solid rounded-md hover:border-gray-500 cursor-pointer"
				onClick={() => setType(type === 'text' ? 'password' : 'text')}
			>
				<Image
					src={`/${type === 'text' ? 'hide' : 'show'}.svg`}
					alt={type === 'text' ? 'hide' : 'show'}
					width={12}
					height={12}
				/>
			</span>
			<input type={type} className={style} placeholder="Password" {...reg('password')} />
		</label>
	);
};

export default PasswordField;
