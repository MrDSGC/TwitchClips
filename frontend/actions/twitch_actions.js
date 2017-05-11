import * as APIUtil from '../util/twitch_api_util';

export const RECEIVE_CLIPS = 'RECEIVE_CLIPS';

export const receiveClips = clips => ({
  type: RECEIVE_CLIPS,
  clips
})

export const fetchGameClips = game => disptch => (
  APIUtil.getGameClips(game)
    .then(clips => dispatch(receiveClips(clips)))
)

export const fetchTrendingClips = () => dispatch => (
  APIUtil.getTrendingClips()
    .then(clips => dispatch(receiveClips(clips)))
)

export const fetchChannelClips
