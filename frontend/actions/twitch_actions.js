import * as APIUtil from '../util/twitch_api_util';

export const RECEIVE_CLIPS = 'RECEIVE_CLIPS';  //this does not work

export const receiveClips = clips => ({
  type: RECEIVE_CLIPS,
  clips
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
