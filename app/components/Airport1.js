'use strict';

import React from 'react';
import { getAirportSet } from '../reducers/inputOne';
import { connect } from 'react-redux';

// export class TextInput extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			input: '',
// 			currentAirports: []
// 		}

// 		this.textEnter = this.textEnter.bind(this);
// 		this.displayNames = this.displayNames.bind(this);
// 	}

// 	textEnter(e) {
// 		this.setState({input: e.target.value});
// 		this.props.dispatchFirstAPInput(e.target.value);
// 	}

// 	// componentWillReceiveProps(nextProps) => {

// 	// }

// 	displayNames() {
// 		let apTrie = this.props.airports;
// 		let input = this.state.input;
// 		if (!input) return <option key={0} value={''}>{''}</option>
// 		let names = apTrie.autocomplete(input);
// 		return names.map((name, i) => {
// 			<option key={i} value={name}>{name}</option>
// 		})
// 	}

// 	render() {
// 		let textEnter = this.textEnter;
// 		let displayNames = this.displayNames();

// 		return (
// 			<div>
// 				<input
// 					type='text' 
// 					className='form-control input' 
// 					placeholder='Enter Airport Name' 
// 					onChange={ textEnter } 
// 					list='airports'
// 				/>
// 				<div />
// 				<datalist id='airports'>
// 					<select>
// 						{ displayNames }
// 					</select>
// 				</datalist>
// 			</div>
// 		)
// 	}
// }

export function TextInput (props) {

	const textEnter = e => {
		// console.log(props.airports);
		// console.log(props.firstInput);
		let input = e.target.value;
		let trie = props.airports;
		props.dispatchAirportSet(input, trie);
	}

	const displayNames = () => {
		// console.log('thing')
		// let array = ['string', 'strong', 'strung', 'strings', 'stringify', 'stringent', 'lies', 'list', 'lists', 'listed', 'listen', 'listless', 'apple', 'super'];
		// return array.map((str, i) => (
		// 	<option key={i} value={str}>{str}</option>
		// ))
		// let apTrie = props.airports;
		// let input = props.firstInput;
		// if (!input) return <option key={0} value={''}>{''}</option>
		// let names = apTrie.autocomplete(input);
		// return names.map((name, i) => {
		// 	<option key={i} value={name}>{name}</option>
		// })
		let names = props.firstAPSet;
		return names.map((name, i) => (
			<option key={i} value={name}>{name}</option>
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
	airports: state.airports,
	firstAPSet: state.firstAPSet
});


const mapDispatchToProps = dispatch => {
	return {
		dispatchAirportSet: (input, trie) => {
			dispatch(getAirportSet(input, trie));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);