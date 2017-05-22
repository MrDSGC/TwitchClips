import merge from 'lodash/merge';
import RECEIVE_CLIP from '../actions/twitch_actions'

const initialState =  "";

const ClipReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case 'RECEIVE_CLIP':
      return action.clip
    default:
      return state;
  }
};

export default ClipReducer;
