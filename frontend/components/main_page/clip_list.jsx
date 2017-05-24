import React from 'react';

class ClipList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTrendingClips();
  }

  fetchClip(url) {
    return () => this.props.receiveClip(url);
  }
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      if(this.props.genre === 'Trending') {
        this.props.fetchTrendingClips();
      } else {
        this.props.fetchGameClips(this.props.genre);
        // this.props.fetchChannelClips(this.props.genre)
      }
    }
  }

  clipList () {
    return (
      this.props.clips.map((clip, idx) => {
        const backgroundClip = {
          backgroundImage: `url('${clip.thumbnails.small}')`
        }
        return(
          <li className="clip"
              key={idx}
              onClick={this.fetchClip(clip.embed_url)}>
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
          {this.props.genre}
        </div>
        <ul className="clip-list">
          {this.clipList()}
        </ul>
      </div>
    )
  };
}

export default ClipList;
