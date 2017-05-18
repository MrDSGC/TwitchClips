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
          
        </div>
      </div>
    )
  };
}

export default ClipView;
