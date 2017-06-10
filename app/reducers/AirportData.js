import axios from 'axios';

const SET_AIRPORT_DATA = 'SET_AIRPORT_DATA';

const reducer = (state=[], action) => {
	switch(action.type) {
		case SET_AIRPORT_DATA:
			return action.data;
	}
	return state;
}

export const setAirportData = data => ({
	type: SET_AIRPORT_DATA, data
});

export const getAirportData = () => 
	dispatch => 
		axios.get('/api/airports')
			.then(res => dispatch(setAirportData(res.data)));

export default reducer;