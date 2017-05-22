import { connect } from 'react-redux';
import { fetchGameClips,
         fetchTrendingClips,
         fetchChannelClips,
         receiveClip
       } from '../../actions/twitch_actions';

import ClipList from './clip_list';

const mapStateToProps = state => {
  return ({
    genre: state.genre,
    clips: state.clips
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGameClips: game => dispatch(fetchGameClips(game)),
    fetchTrendingClips: () => dispatch(fetchTrendingClips()),
    fetchChannelClips: channel => dispatch(fetchChannelClips(channel)),
    receiveClip: (url) => dispatch(receiveClip(url))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClipList);
