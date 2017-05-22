import React from 'react';

class GameNav extends React.Component {
  constructor(props) {
    super(props)
    this.handleGenreChange = this.handleGenreChange.bind(this);
  }

  handleGenreChange(genre) {
    return () => this.props.receiveGenre(genre)
  }

  // <li className="game-item">
  //   <div>Add a Game or Channel</div>
  // </li>
  render () {
    return(
    <div className="nav-bar">
      <div className='game-title'>
        Twitch Klips
      </div>
      <ul className= "game-list">
        <li className="game-item"
            onClick={this.handleGenreChange('Trending')}>
          <div >Trending</div>
        </li>
        <li className="game-item"
            onClick={this.handleGenreChange('Dota 2')}>
          <div >Dota 2</div>
        </li>
        <li className="game-item"
            onClick={this.handleGenreChange('Counter-Strike: Global Offensive')}>
          <div>CS:GO</div>
        </li>
        <li className="game-item"
            onClick={this.handleGenreChange('Hearthstone')}>
          <div>HeartStone</div>
        </li>
        <li className="game-item"
            onClick={this.handleGenreChange('StarCraft II')}>
          <div>Starcraft 2</div>
        </li>
        <li className="game-item"
            onClick={this.handleGenreChange('League of Legends')}>
          <div>Leauge of Legends</div>
        </li>
      </ul>
      <div>
        portfolio
        github
        linkedin
      </div>
    </div>
    )
  };

}

export default GameNav;
