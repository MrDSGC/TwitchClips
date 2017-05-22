import React from 'react';
import FontAwesome from 'react-fontawesome';


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

      </div>
      <div className="footer">
        <ul className="footer-list">
          <li className="f-list-item">
            <a href="https://github.com/mrdsgc" target="_blank" className="fa fa-github"><span className="f-label">GitHub</span></a>
          </li>
          <li className="f-list-item">
            <a href="https://www.linkedin.com/in/dcheng47" target="_blank" className="fa fa-linkedin"><span className="f-label">LinkedIn</span></a>
          </li>
          <li className="f-list-item">
            <a href="http://www.danielscheng.com" target="_blank" className="fa fa-id-card"><span className="f-label">Portfolio</span></a>
          </li>
        </ul>
      </div>
    </div>
    )
  };

}

export default GameNav;
