import {combineReducers} from 'redux';
import clipReducer from './clip_reducer.js'


export default combineReducers({
  clips: clipReducer
});
