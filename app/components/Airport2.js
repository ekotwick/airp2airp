'use strict';

import React from 'react';

export default function TextInput (props) {

	const textEnter = e => {
		props.setText(e.target.value);
	}

	return (
		<textarea 
			className='form-control input' 
			placeholder='Enter Airport Name' 
			onChange={ textEnter } 
		/>
	)
}