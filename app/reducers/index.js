import { combineReducers } from 'redux';

import airportReducer from './AirportData';
import firstAirportReducer from './inputOne';

export default combineReducers({ 
	airports: airportReducer,
	firstAPSet: firstAirportReducer
});
