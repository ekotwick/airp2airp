'use strict';

import React from 'react';
import { setFirstAirport } from '../reducers/Airport1';
import { connect } from 'react-redux';

export function TextInput (props) {

	const textEnter = e => {
		props.dispatchFirstAPInput(e.target.value);
	}

	return (
		<input
			type='text' 
			className='form-control input' 
			placeholder='Enter Airport Name' 
			onChange={ textEnter } 
			list='languages'
		/>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		dispatchFirstAPInput: input => {
			dispatch(setFirstAirport(input));
		}
	};
};

export default connect(null, mapDispatchToProps)(TextInput);