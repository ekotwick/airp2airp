import { combineReducers } from 'redux';

import airportReducer from './AirportData';
import firstAPReducer from './Airport1';

export default combineReducers({ 
	airports: airportReducer,
	firstAirport: firstAPReducer
});
