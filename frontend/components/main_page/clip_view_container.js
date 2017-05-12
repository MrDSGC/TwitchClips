import { connect } from 'react-redux';
import { fetchGameClips,
         fetchTrendingClips,
         fetchChannelClips
       } from '../../actions/twitch_actions';

import ClipView from './clip_view';

const mapStateToProps = state => {
  return ({
    clip: state.clip
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClip: slug => dispatch(fetchClip(slug)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClipView);
