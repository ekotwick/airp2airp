'use strict';

const SET_SECOND_COORDINATES = 'SET_SECOND_COORDINATES';

const reducer = (state={}, action) => {
	switch(action.type) {
		case SET_SECOND_COORDINATES:
			return action.coordinates
	}
	return state;
}

export const setFirstCoordinates = coordinates => ({
	type: SET_SECOND_COORDINATES,
	coordinates
});

export const getAirportCoords = (input, trie) => 
	dispatch => {
		let node = trie.getNode(input);
		if (node.completesName()) {
			let coordinates = node.getData().coordinates;
			dispatch(setFirstCoordinates(coordinates))
		} else {
			return
		}
	}

export default reducer;