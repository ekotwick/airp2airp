'use strict';

const SET_FIRST_COORDINATES = 'SET_FIRST_COORDINATES';

const reducer = (state={}, action) => {
  switch(action.type) {
    case SET_FIRST_COORDINATES:
      return action.coordinates
  }
  return state;
}

export const setFirstCoordinates = coordinates => ({
  type: SET_FIRST_COORDINATES,
  coordinates
});

export const getAirportCoords = (input, trie) => 
  dispatch => {
    let node = trie.getNode(input);
    if (node.completesName()) { // we only want to dispatch to the store when the string input represents a name of an aiport;
      let coordinates = node.getData().coordinates;
      dispatch(setFirstCoordinates(coordinates))
    } else {
      return
    }
  }

export default reducer;