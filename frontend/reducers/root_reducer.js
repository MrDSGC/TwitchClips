import {combineReducers} from 'redux';
import clipReducer from './clip_reducer.js'
import genreReducer from './genre_reducer.js'


export default combineReducers({
  clips: clipReducer,
  genre: genreReducer
});
