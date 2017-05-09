import merge from 'lodash/merge';


const initialState =  {};

const ClipReducer = (state = initialState, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch(action.type) {
    default:
      return state;
  }
};

export default ClipReducer;
