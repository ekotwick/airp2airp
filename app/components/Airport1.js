'use strict';

// react
import React from 'react';
import { connect } from 'react-redux';

// components
import { getAirportSet } from '../reducers/FirstAirportSet';
import { getAirportCoords } from '../reducers/FirstCoordinates';

export function Airport1 (props) {

  const textEnter = e => {
    let input = e.target.value.split(',')[0]; // the splitting is defensive: the autocomplete function returns a string of the form "name, location"; we don't want 'location' to cause any problems, so always ensure that it's lopped off
    let trie = props.airports;
    props.dispatchCoordinates(input, trie);
    props.dispatchAirportSet(input, trie);
  }

  const displayNames = () => { // this builds the drop down list/autocomplete
    let names = props.firstAPSet;
    return names.map((name, i) => (
      <option key={i} value={name}>{name}</option>
    ))
  }

  return (
    <div className='airport'>
      <input
        type='text' 
        className='form-control input' 
        placeholder='Enter first airport name' 
        onChange={ textEnter } 
        list='airportsFirst'
      />
      <div />
      <datalist id='airportsFirst'>
        <select onChange= {textEnter}>
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
    },
    dispatchCoordinates: (input, trie) => {
      dispatch(getAirportCoords(input, trie));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Airport1);