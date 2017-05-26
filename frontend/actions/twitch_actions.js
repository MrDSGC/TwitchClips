import * as APIUtil from '../util/twitch_api_util';

export const RECEIVE_GENRE = 'RECEIVE_GENRE'; //this does not work
export const RECEIVE_CLIPS = 'RECEIVE_CLIPS';  //this does not work
export const RECEIVE_CLIP = 'RECEIVE_CLIP';  //this does not work
export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';  //this does not work
export const RECEIVE_TOP_GAMES = 'RECEIVE_TOP_GAMES';  //this does not work
export const RECEIVE_GAMES = 'RECEIVE_GAMES';  //this does not work

export const receiveClips = clips => ({
  type: RECEIVE_CLIPS,
  clips
});

export const receiveClip = clip => ({
  type: RECEIVE_CLIP,
  clip
});

export const receiveGenre = genre => ({
  type: RECEIVE_GENRE,
  genre
});

export const receiveChannels = channels => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveTopGames = games => ({
  type: RECEIVE_TOP_GAMES,
  games
});
export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});

export const fetchGameClips = game => dispatch => (
  APIUtil.getGameClips(game)
    .then(clips => dispatch(receiveClips(clips)))
);

export const fetchTrendingClips = () => dispatch => (
  APIUtil.getTrendingClips()
    .then(clips => dispatch(receiveClips(clips)))
);

export const fetchChannelClips = channel => dispatch => (
  APIUtil.getChannelClip(channel)
    .then(clips => dispatch(receiveClips(clips)))
);

export const fetchChannels = query => dispatch => (
  APIUtil.queryChannel(query)
    .then(channels => dispatch(receiveChannels(channels)))
);

export const fetchGames = query => dispatch => (
  APIUtil.queryGame(query)
    .then(games => dispatch(receiveGames(games)))
);

export const fetchTopGames = () => dispatch => (
  APIUtil.topGames()
    .then(games => dispatch(receiveTopGames(games)))
);
