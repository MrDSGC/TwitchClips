import merge from 'lodash/merge';
import RECEIVE_GAMES from '../actions/twitch_actions'

const initialState =  [];

const GamesReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case 'RECEIVE_GAMES':
      return action.games.top;
    default:
      return state;
  }
};

export default GamesReducer;
