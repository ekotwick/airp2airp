import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Paper from 'material-ui/Paper';
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
					<Col lg={12}>
						<div className='row input-output'>
							<Col lg={8}>
									<Header/>
									<Airport1 />
									<Airport2 />
							</Col>
							<Col lg={4}>
									<Distance />
							</Col>
						</div>
				</Col>
			</div>
		)}

}

const styles = {
	borderStyle: 'solid',
	borderColor: 'white',
}