import merge from 'lodash/merge';
import RECEIVE_GENRE from '../actions/twitch_actions'


const initialState =  {};

const GenreReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case 'RECEIVE_GENRE':
      return action.genre;
    default:
      return state;
  }
};

export default GenreReducer;
