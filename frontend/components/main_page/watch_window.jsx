import React from 'react';
import ClipListContainer from './clips_list_container';
import ClipViewContainer from './clip_view_container';

const WatchWindow = () => (
  // <ClipViewContainer />
  <div className="window">
    <div className="clip-view-section">
    </div>
    <div className="clip-list-section">
      <ClipListContainer />
    </div>
  </div>
);

export default WatchWindow;
