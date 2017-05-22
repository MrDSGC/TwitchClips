import React from 'react';

class ClipView extends React.Component {
  constructor(props) {
    super(props)
  }

  viewOutput() {
    if(this.props.clip === '') {
      return(
        <div className="welcome-page">
          <div className="welcome-items">
            Welcome to Twitch Klips!
          </div>
          <div className="welcome-items">
            Select Clips from any of the default games
          </div>
          <div className="welcome-items">
            Search option coming soon
          </div>
        </div>
      )
    } else {
      return(
        <iframe
          className="content"
          src={this.props.clip}
          width='900'
          height='500'
          frameBorder='0'
          scrolling='no'
          align='middle'
          allowFullScreen='true'></iframe>
      )
    }
  }

  render () {
    return(
      <div className="clip-view-window">
        {this.viewOutput()}
      </div>
    )
  };
}

export default ClipView;
