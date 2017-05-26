import React from 'react';
import FontAwesome from 'react-fontawesome';


class GameNav extends React.Component {
  constructor(props) {
    super(props)

    this.state = { game: "", channel: "", top: true}
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.gamesList = this.gamesList.bind(this)
    this.channelsList = this.channelsList.bind(this)
    this.update = this.update.bind(this)
    this.handleGameSubmit = this.handleGameSubmit.bind(this)
    this.handleChannelSubmit = this.handleChannelSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchTopGames();
  }


  handleGenreChange(genre) {
    return () => this.props.receiveGenre(genre)
  }

  gamesList() {

    if(this.state.top) {
      return(
        <li className="game-item"
          onClick={this.handleGenreChange('Trending')}
          key={26}>
          <div className="trending">
            <i className="fa fa-twitch" aria-hidden="true"></i>
          </div>
          <div className="game-item-title">Trending</div>
        </li>
      )
      return (
        this.props.games.map( (game, idx) => {
          return(
            <li className="game-item"
              onClick={this.handleGenreChange(game.game.name)}
              key={idx}>
              <img className="logo" src={game.game.box.small}></img>
              <div className="game-item-title">
                {game.game.name}
              </div>
            </li>
          )
        })
      )
    } else {
      return(
        this.props.games.map( (game, idx) => {
          return(
            <li className="game-item"
              onClick={this.handleGenreChange(game.name)}
              key={idx}>
              <img className="logo" src={game.box.small}></img>
              <div className="game-item-title">
                {game.name}
              </div>
            </li>
          )
        })
      )
    }
  }

  channelsList() {
    return (
      this.props.channels.map( (channel, idx) => {
        return(
          <li className="game-item"
            onClick={this.handleGenreChange(game.game.name)}
            key={idx}>
            <img className="logo" src={game.game.box.small}></img>
            <div className="game-item-title">
              {game.game.name}
            </div>
          </li>
        )
      })
    )
  }

  handleGameSubmit(e) {
		e.preventDefault();
		const gameQuery = this.state.game;
		this.props.fetchGames(gameQuery);
    this.setState({top: false});
	}

  handleChannelSubmit(e) {
		e.preventDefault();
		const channelQuery = this.state.channel;
		this.props.fetchChannels(channelQuery);
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
    console.log(this.state);
  }

  gameSearchBar() {
    return(
      <form className="game-form"
        onSubmit={this.handleGameSubmit}>
        <input type="text"
          className="inputs"
          value={this.state.game}
          placeholder="Search Games"
          onChange={this.update("game")}/>
      </form>
    )
  }

  channelSearchBar() {
    <form className="channel-form"
          onSubmit={this.handleChannelSubmit}>
      <input type="text"
        className="inputs"
        value={this.state.channel}
        placeholder="Search Channels"
        onChange={this.update("channel")}/>
    </form>
  }

  // <div className="channel-search-bar">
  //
  // </div>
  //
  // <ul className="channel-list">
  //   {this.channelsList()}
  // </ul>
  render () {
    return(
    <div className="nav-bar">
      <div className='game-title'>
        Twitch Klips
      </div>

      <div className="game-search-bar">
        {this.gameSearchBar()}
      </div>

      <ul className= "game-list">
        {this.gamesList()}
      </ul>

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
