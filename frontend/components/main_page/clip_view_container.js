import { connect } from 'react-redux';
import { fetchClip
       } from '../../actions/twitch_actions';

import ClipView from './clip_view';

const mapStateToProps = state => {
  return ({
    clip: state.clip,
    genre: state.genre
  })
};


export default connect(
  mapStateToProps,
  null
)(ClipView);
