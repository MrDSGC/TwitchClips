import React from 'react';

class ClipList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTrendingClips()
  }

  render () {
    return(
      <div>

      </div>
    )
  };
}

export default ClipList;
