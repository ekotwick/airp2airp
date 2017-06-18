'use strict';

const AIRPORT_SET_TWO = 'AIRPORT_SET_TWO';

const reducer = (state=[], action) => {
  switch(action.type) {
    case AIRPORT_SET_TWO:
      return action.set
  }
  return state;
}

export const setSecondAirportSet = set => ({
  type: AIRPORT_SET_TWO,
  set
});

export const getAirportSet = (input, trie) => 
  dispatch => {
    let names = trie.autocomplete(input);
    dispatch(setSecondAirportSet(names));
  }

export default reducer;