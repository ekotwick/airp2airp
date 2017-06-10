'use strict';

import React from 'react';
import { setFirstAirport } from '../reducers/Airport1';
import { connect } from 'react-redux';

export function TextInput (props) {

	const textEnter = e => {
		props.dispatchFirstAPInput(e.target.value);
	}

	const displayNames = () => {
		console.log('thing')
		let array = ['string', 'strong', 'strung', 'strings', 'stringify', 'stringent', 'lies', 'list', 'lists', 'listed', 'listen', 'listless', 'apple', 'super'];
		return array.map((str, i) => (
			<option key={i} value={str}>{str}</option>
		))
	}

	return (
		<div>
			<input
				type='text' 
				className='form-control input' 
				placeholder='Enter Airport Name' 
				onChange={ textEnter } 
				list='airports'
			/>
			<div />
			<datalist id='airports'>
				<select>
					{ displayNames() }
				</select>
			</datalist>
		</div>
	)
}

const mapStateToProps = state => ({
	compatibilityFlag: state.compatibilityFlag
});


const mapDispatchToProps = dispatch => {
	return {
		dispatchFirstAPInput: input => {
			dispatch(setFirstAirport(input));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);