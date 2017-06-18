'use strict';

const AIRPORT_SET_ONE = 'AIRPORT_SET_ONE';

const reducer = (state=[], action) => {
  switch(action.type) {
    case AIRPORT_SET_ONE:
      return action.set
  }
  return state;
}

export const setFirstAirportSet = set => ({
  type: AIRPORT_SET_ONE,
  set
});

export const getAirportSet = (input, trie) => 
  dispatch => {
    let names = trie.autocomplete(input);
    dispatch(setFirstAirportSet(names));
  }

export default reducer;