import React from 'react';

const userOutput = (props) => {
	return (
		<div>
			<p>Hello There!</p>
			<p>{props.userName}</p>
		</div>
	)
};

export default userOutput;