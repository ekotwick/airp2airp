'use strict';

import React from 'react';
import { getAirportSet } from '../reducers/SecondAirportSet';
import { getAirportCoords } from '../reducers/SecondCoordinates';
import { connect } from 'react-redux';

export function TextInput (props) {

	const textEnter = e => {
		let input = e.target.value.split(',')[0];
		let trie = props.airports;
		props.dispatchCoordinates(input, trie);
		props.dispatchAirportSet(input, trie);
	}

	const displayNames = () => {
		let names = props.secondAPSet;
		return names.map((name, i) => (
			<option key={i} value={name}>{name}</option>
		))
	}

	return (
		<div className='airport'>
			<input
				type='text' 
				className='form-control input' 
				placeholder='Enter second airport name' 
				onChange={ textEnter } 
				list='airportsSecond'
			/>
			<div />
			<datalist id='airportsSecond'>
				<select onChange= {textEnter}>
					{ displayNames() }
				</select>
			</datalist>
		</div>
	)
}

const mapStateToProps = state => ({
	airports: state.airports,
	secondAPSet: state.secondAPSet
});


const mapDispatchToProps = dispatch => {
	return {
		dispatchAirportSet: (input, trie) => {
			dispatch(getAirportSet(input, trie));
		},
		dispatchCoordinates: (input, trie) => {
			dispatch(getAirportCoords(input, trie));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);