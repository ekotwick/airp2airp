'use strict';

// testing libraries
import { expect } from 'chai';

// action creators
import { setAirportData } from '../reducers/AirportData';
import { setFirstAirportSet } from '../reducers/FirstAirportSet';
import { setSecondAirportSet } from '../reducers/SecondAirportSet';
import { setFirstCoordinates } from '../reducers/FirstCoordinates';
import { setSecondCoordinates} from '../reducers/SecondCoordinates';

describe('AirportData', function() {
  it('should create an action for setting all airport data in the store', function() {
    const data = {};
    const expectedAction = {
      type: 'SET_AIRPORT_DATA',
      data
    };
    expect(setAirportData(data)).to.be.deep.equal(expectedAction);
  });
});

describe('FirstAirportSet', function() {
  it('should create an action for first set of airports for autocomplete', function() {
    const set = [];
    const expectedAction = {
      type: 'AIRPORT_SET_ONE',
      set
    };
    expect(setFirstAirportSet(set)).to.be.deep.equal(expectedAction);
  });
});

describe('SecondAirportSet', function() {
  it('should create an action for second set of airports for autocomplete', function() {
    const set = [];
    const expectedAction = {
      type: 'AIRPORT_SET_TWO',
      set
    };
    expect(setSecondAirportSet(set)).to.be.deep.equal(expectedAction);
  });
});

describe('FirstCoordinates', function() {
  it('should create an action for first airports coordinates', function() {
    const coordinates = {};
    const expectedAction = {
      type: 'SET_FIRST_COORDINATES',
      coordinates
    };
    expect(setFirstCoordinates(coordinates)).to.be.deep.equal(expectedAction);
  });
});

describe('SecondCoordinates', function() {
  it('should create an action for first airports coordinates', function() {
    const coordinates = {};
    const expectedAction = {
      type: 'SET_SECOND_COORDINATES',
      coordinates
    };
    expect(setSecondCoordinates(coordinates)).to.be.deep.equal(expectedAction);
  });
});