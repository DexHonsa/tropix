import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { browserHistory, IndexRoute } from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers } from 'redux';
import RootReducer from './rootreducer';
import { initialState as jPlayerInitialState, reducer as jPlayers } from 'react-jplayer';
import { initialState as jPlaylistInitialState, reducer as jPlaylists } from 'react-jplaylist';

import Main from './components/main';

import './css/bootstrap.min.css';
import './index.css';
import './css/jplayer.css';
import './css/font-awesome.min.css';
import './css/animate.css';
import './css/style.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import 'react-jplaylist/src/less/skins/sleek.less';

import 'react-jplaylist/src/less/controls/iconControls.less';

import AudioPlaylist from './components/AudioPlaylist';


const store = createStore(combineReducers({
  jPlayers,
  jPlaylists,
}), {
  jPlayers: jPlayerInitialState(AudioPlaylist),
  jPlaylists: jPlaylistInitialState(AudioPlaylist),
});






ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="/home" component={Main} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));
