import React from 'react';
import { connect } from 'react-redux';

import Airport1 from './Airport1';
import Airport2 from './Airport2';
import Distance from './Distance';
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
					<Airport1 />
					<br/>
					<Airport2 />
					<br/>
					<Distance />
				</div>
			</div>
	)}
}
