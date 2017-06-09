import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import TextOutput from './TextOutput';
import Header from './Header';

export default class Home extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div className='container-fluid'>
				<Header />
				<div className='row'>
					<div className='col-lg-2'>
						<TextInput />
					</div>
					<div className='col-lg-9'>
						<TextOutput />
					</div>
				</div>
			</div>
	)}
}
