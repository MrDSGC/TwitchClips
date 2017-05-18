import merge from 'lodash/merge';
import RECEIVE_CLIPS from '../actions/twitch_actions'

const initialState =  { };

const ClipReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  console.log(action);
  switch(action.type) {
    case 'RECEIVE_CLIPS':
    console.log(action);
      return action.clips.clips;
    default:
      return state;
  }
};

export default ClipReducer;
