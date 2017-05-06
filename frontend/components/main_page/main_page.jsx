import React from 'react';
import GameNav from '../nav_bar/game_nav'
import WatchWindowContainer from './watch_window_container'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div className='full-page'>
        <nav className='game-nav'>
          <GameNav />
        </nav>
        <div className'watch-window'>
          <WatchWindowContainer />
        </div>
      </div>

    )
  };
}

export default MainPage;
