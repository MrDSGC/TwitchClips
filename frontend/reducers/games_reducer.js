import merge from 'lodash/merge';
import RECEIVE_TOP_GAMES from '../actions/twitch_actions'
import RECEIVE_GAMES from '../actions/twitch_actions'

const initialState =  [];

const GamesReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case 'RECEIVE_TOP_GAMES':
      return action.games.top;
    case 'RECEIVE_GAMES':
      return action.games.games
    default:
      return state;
  }
};

export default GamesReducer;
