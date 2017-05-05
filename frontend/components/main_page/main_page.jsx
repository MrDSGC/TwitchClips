import React from 'react';


class MainPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div className='full-page'>
        <nav className='game-nav'>

        </nav>
        <div className'watch-window'>
          { WatchWindow }
        </div>
      </div>

    )
  };
}

export default MainPage;
