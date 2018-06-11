import React from 'react';
import './userInput.css';

const userInput = (props) => {
	const textColor = {
		color: 'gray',
		border: '2px solid black'
	};
	return <input 
			type='text' 
			style={textColor}
			className='center' 
			onChange={props.newName} 
			value={props.name} />
};

export default userInput;