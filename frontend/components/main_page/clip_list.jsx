import React from 'react';

class ClipList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTrendingClips();
  }

  clipList () {
    return (
      this.props.clips.map((clip, idx) => {
        const backgroundClip = {
          backgroundImage: `url('${clip.thumbnails.small}')`
        }
        return(
          <li className="clip" key={idx}>
            <div className="hover-graphic">
              <div className="clip-title">
                {clip.title}
              </div>
            </div>
              <div
                className='clip-list-img'
                style={backgroundClip}></div>
          </li>
        )
      })
    )
  }

  render () {
    return(
      <div className="clips-list-container">
        <div className="clips-genre">
          Trending
        </div>
        <ul className="clip-list">
          {this.clipList()}
        </ul>
      </div>
    )
  };
}

export default ClipList;
