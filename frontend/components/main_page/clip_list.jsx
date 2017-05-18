import React from 'react';

class ClipList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchTrendingClips()
  }

  clipList () {
    return (
      this.props.clips.map((clip, idx) => {
        return(
          <li className="clip" key={idx}>
            <div className="clip-title">
              {clip.slug}
            </div>
            <img
              className="clip-thumbnail"
              src={clip.thumbnails.tiny}/>
          </li>
        )
      })
    )
  }

  render () {
    return(
      <div className="clips-list-container">
        <div className="right-button">
        </div>
        <ul className="clip-list">
          {this.clipList()}
        </ul>

        <div className="left-button">
        </div>
      </div>
    )
  };
}

export default ClipList;
