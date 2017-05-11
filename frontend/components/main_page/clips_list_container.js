import { connect } from 'react-redux';
import { fetchGameClips,
         fetchTrendingClips,
         fetchChannelClips
       } from '../../actions/twitch_actions';

import ClipList from './clip_list';

const mapStateToProps = state => {
  return ({
    clips: state.clips
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGameClips: game => dispatch(fetchGameClips(game)),
    fetchTrendingClips: () => dispatch(fetchTrendingClips()),
    fetchChannelClips: channel => dispatch(fetchChannelClips(channel))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClipList);
