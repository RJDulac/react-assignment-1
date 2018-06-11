import React from 'react';
import './userInput.css';

const UserInput = (props) => {
	return <input type='text' className='center' onChange={props.newName} value={props.name} />
}

export default UserInput;