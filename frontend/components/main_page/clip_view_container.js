import { connect } from 'react-redux';
import { fetchClip, receiveClip
       } from '../../actions/twitch_actions';

import ClipView from './clip_view';

const mapStateToProps = state => {
  return ({
    clip: state.clip,
    genre: state.genre,
    clips: state.clips
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveClip: (url) => dispatch(receiveClip(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClipView);
