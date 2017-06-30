'use strict';

// react
import React from 'react';
import { connect } from 'react-redux';

// utils
import { LatLon } from '../utils/distanceFinder';

export function Distance (props) {

  const displayDistance = () => { // this function will return a number (i.e., nothing). in order for it to display a number, *both* coordinate values must be in the store; the if expression checks for that
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