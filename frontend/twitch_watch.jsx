import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';
import configureStore from './store/store';
import {getTrendingClips} from './util/twitch_api_util'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  window.store = store;
  store.getTrendingClips = getTrendingClips;

  const root = document.getElementById('root');
  Modal.setAppElement(root)
  ReactDOM.render(<Root store={store}/>, root);
});
