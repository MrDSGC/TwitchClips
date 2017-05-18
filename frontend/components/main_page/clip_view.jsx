import React from 'react';

class ClipView extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div>
        {this.props.clip}
        <div>
          details
        </div>
      </div>
    )
  };
}

export default ClipView;
