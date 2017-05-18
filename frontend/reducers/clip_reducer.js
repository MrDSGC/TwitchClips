import merge from 'lodash/merge';
import RECEIVE_CLIPS from '../actions/twitch_actions'

const initialState =  { clips: []};

const ClipReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_CLIPS:
      return {clips: action.clips}
    default:
      return state;
  }
};

export default ClipReducer;
