import merge from 'lodash/merge';
import RECEIVE_GENRE_SOURCE from '../actions/twitch_actions'


const initialState = "game";

const GenreSourceReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case 'RECEIVE_GENRE_SOURCE':
      return action.genreSource;
    default:
      return state;
  }
};

export default GenreSourceReducer;
