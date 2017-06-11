'use strict';

import React from 'react';
import { LatLon } from '../utils/distanceFinder';
import { connect } from 'react-redux';

export function Distance (props) {

	const displayDistance = () => {
		if (Object.keys(props.firstCoords).length && Object.keys(props.secondCoords).length) {
			let firstAP = new LatLon(props.firstCoords);
			let secondAP = new LatLon(props.secondCoords);
			return firstAP.calculateDistance(secondAP).getDistance();
		} else {
			return
		}
	}

	return (
		<div className='output'>
			<pre>
				<span className='output'>
					{ displayDistance() }
				</span>
			</pre>
		</div>
	)
}

const mapStateToProps = state => ({
	firstCoords: state.firstCoords,
	secondCoords: state.secondCoords
});

export default connect(mapStateToProps, null)(Distance);