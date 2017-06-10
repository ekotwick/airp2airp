'use strict';

const SET_FIRST_AIRPORT = 'SET_FIRST_AIRPORT';

const reducer = (state='', action) => {
	switch(action.type) {
		case SET_FIRST_AIRPORT:
			return action.text
	}
	return state;
}

export const setFirstAirport = text => ({
	type: SET_FIRST_AIRPORT,
	text
});

// export const dispatchFirstAPInput = input => 
// 	dispatch(setFirstAirport(input));

export default reducer;