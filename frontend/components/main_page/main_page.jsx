import React from 'react';
import GameNavContainer from '../nav_bar/game_nav_container';
import WatchWindow from './watch_window';

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div className='full-page'>
        <nav className='game-nav'>
          <GameNavContainer />
        </nav>
        <div className='watch-window'>
          <WatchWindow />
        </div>
      </div>

    )
  };
}

export default MainPage;
