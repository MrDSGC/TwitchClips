import React from 'react';

class ClipView extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div>
        {this.props.clip}
      </div>
    )
  };
}

export default ClipView;
