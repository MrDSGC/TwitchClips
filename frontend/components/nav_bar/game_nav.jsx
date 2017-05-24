import React from 'react';
import FontAwesome from 'react-fontawesome';


class GameNav extends React.Component {
  constructor(props) {
    super(props)
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.gamesList = this.gamesList.bind(this)
    this.channelsList = this.channelsList.bind(this)
  }

  componentDidMount() {
    this.props.fetchTopGames();
  }

  handleGenreChange(genre) {
    return () => this.props.receiveGenre(genre)
  }

  gamesList() {
    return (
      this.props.games.map( (game, idx) => {
        return(
          <li className="game-item"
            onClick={this.handleGenreChange(game.game.name)}
            key={idx}>
            <img src={game.game.box.small}></img>
            <div>
              {game.game.name}
            </div>
          </li>
        )
      })
    )
  }

  channelsList() {

  }

  render () {
    return(
    <div className="nav-bar">
      <div className='game-title'>
        Twitch Klips
      </div>
      <ul className= "game-list">
        <li className="game-item"
            onClick={this.handleGenreChange('Trending')}
            key={26}>
          <i class="fa fa-twitch" aria-hidden="true"></i>
          <div >Trending</div>
        </li>
        {this.gamesList()}
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
