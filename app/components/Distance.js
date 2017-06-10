'use strict';

import React from 'react';
import { LatLon } from '../utils/distanceFinder';
import { connect } from 'react-redux';

export function Distance (props) {

	const displayDistance = () => {
		if (Object.keys(props.firstCoords).length && Object.keys(props.secondCoords).length) {
			console.log(props.firstCoords);
			console.log(props.secondCoords);
			let firstAP = new LatLon(props.firstCoords);
			let secondAP = new LatLon(props.secondCoords);
			return firstAP.distanceTo(secondAP);
		} else {
			console.log('no length');
		}
	}

	return (
		<pre>
			{ displayDistance() }
		</pre>
	)
}

const mapStateToProps = state => ({
	firstCoords: state.firstCoords,
	secondCoords: state.secondCoords
});

export default connect(mapStateToProps, null)(Distance);