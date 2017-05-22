import {combineReducers} from 'redux';
import clipsReducer from './clips_reducer.js'
import clipReducer from './clip_reducer.js'
import genreReducer from './genre_reducer.js'


export default combineReducers({
  clips: clipsReducer,
  genre: genreReducer,
  clip: clipReducer
});
