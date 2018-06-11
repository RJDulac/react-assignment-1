import React from 'react';
import './userOutput.css';

const userOutput = (props) => {
	return (
		<div className="centerParagraph">
			<p>Username: {props.name}</p>
			<p> Hello {props.name}</p>
		</div>
	);
};

export default userOutput;