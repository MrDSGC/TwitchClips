import React from 'react';

const GameNav = () => (
  <div className="nav-bar">
    <div className='game-title'>
      Twitch Klips
    </div>
    <ul className= "game-list">
      <li className="game-item">
        <img src=''/>
        <div >Dota 2</div>
      </li>
      <li className="game-item">
        <div>CS:GO</div>
      </li>
      <li className="game-item">
        <div>HeartStone</div>
      </li>
      <li className="game-item">
        <div>Starcraft 2</div>
      </li>
      <li className="game-item">
        <div>Leauge of Legends</div>
      </li>
      <li className="game-item">
        <div>Add a Game or Channel</div>
      </li>
    </ul>
  </div>
)

export default GameNav;
