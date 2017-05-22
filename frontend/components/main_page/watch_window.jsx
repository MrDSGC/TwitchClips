import React from 'react';
import ClipListContainer from './clips_list_container';
import ClipViewContainer from './clip_view_container';

  const WatchWindow = () => (
  <div className="window">
    <div className="clip-view-section">
      <ClipViewContainer />
    </div>
    <div className="clip-list-section">
      <ClipListContainer />
    </div>
  </div>
);

export default WatchWindow;
