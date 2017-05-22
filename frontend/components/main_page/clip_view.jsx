import React from 'react';

class ClipView extends React.Component {
  constructor(props) {
    super(props)
  }

  viewOutput() {
    if(this.props.clip === '') {
      return(
        <div>
          {this.props.genre}
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
