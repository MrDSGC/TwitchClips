import {combineReducers} from 'redux';
import clipsReducer from './clips_reducer.js'
import clipReducer from './clip_reducer.js'
import genreReducer from './genre_reducer.js'
import genreSourceReducer from './genre_source_reducer.js'
import gamesReducer from './games_reducer.js'
import channelsReducer from './channels_reducer.js'


export default combineReducers({
  clips: clipsReducer,
  genre: genreReducer,
  clip: clipReducer,
  games: gamesReducer,
  channels: channelsReducer,
  genreSource: genreSourceReducer
});
