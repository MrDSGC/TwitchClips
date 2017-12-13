import React from 'react';
import Modal from 'react-modal';

class ClipView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if(prevProps.clip == '') {
      this.props.receiveClip(this.props.clips[0].embed_url);
    }
  }

  viewOutput() {
    return(
      <iframe
        className="content"
        src={this.props.clip}
        frameBorder='0'
        scrolling='no'
        align='middle'
        allowFullScreen='true'></iframe>
    )
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
