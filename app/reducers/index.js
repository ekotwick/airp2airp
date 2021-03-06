import { combineReducers } from 'redux';

import airportReducer from './AirportData';
import firstAirportReducer from './FirstAirportSet';
import firstCoordsReducer from './FirstCoordinates';
import secondAirportReducer from './SecondAirportSet';
import secondCoordsReducer from './SecondCoordinates';

const rootReducer = combineReducers({ 
  airports: airportReducer,
  firstAPSet: firstAirportReducer,
  firstCoords: firstCoordsReducer,
  secondAPSet: secondAirportReducer,
  secondCoords: secondCoordsReducer
});

export default rootReducer;
