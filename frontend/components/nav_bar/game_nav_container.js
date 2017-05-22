import { connect } from 'react-redux';
import { receiveGenre
       } from '../../actions/twitch_actions';

import GameNav from './game_nav';

const mapStateToProps = state => {
  return ({
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    ReceiveGenre: genre => dispatch(ReceiveGenre(genre))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameNav);
