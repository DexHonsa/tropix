/* eslint react/prop-types: 0 */
import React from 'react';
import { Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';
import JPlaylist, { connect, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle } from 'react-jplaylist';
import feel_good_art from '../img/feelgood.jpg';
import time_art from '../img/timeWellWasted.jpg';
import teflon_art from '../img/teflon3.jpg';
import need_art from '../img/XuitcaseCity_need_somebody.jpg';

import teflon_music from '../music/teflon.mp3';
import feel_good_music from '../music/feel_good.mp3';
import time_music from '../music/time.mp3';
import need_music from '../music/need.mp3';



const AudioPlaylist = () => (
  <JPlaylist className="jp-sleek">
    <Audio />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Previous><i className="fa fa-step-backward" /></Previous>
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <Next><i className="fa fa-step-forward" /></Next>
        <Repeat>
          <i className="fa">{/* Icon set in css*/}</i>
          <i className="fa fa-repeat" />
        </Repeat>
        <Shuffle><i className="fa fa-random" /></Shuffle>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa">{/* Icon set in css*/}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <div className="jp-playlist-container">
          <Playlist>
            <Remove />
            <MediaLink>
              <PlaylistTitle />
            </MediaLink>
          </Playlist>
          <TogglePlaylist><i className="fa fa-ellipsis-h" /></TogglePlaylist>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Download><i className="fa fa-download" /></Download>
        <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlaylist>
);

const options = {
  id: 'AudioPlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      title: 'TELYKast - There For You (Tropix Remix)',
      artist: 'Tropix',
      sources: {
        mp3: need_music

      },
      poster:need_art,
      free: true,
    },
    {
      title: 'Win and Woo x Bryce Fox - Chicago (Tropix Remix)',
      artist: 'Tropix',
      sources: {
        mp3: teflon_music

      },
      poster:teflon_art,
      free: true,
    },
    {
      title: 'The Chainsmokers - My Type (Tropix Remix)',
      artist: 'Tropix',
      sources: {
        mp3: feel_good_music,

      },
      poster:feel_good_art,
      free: true,
    },
    {
      title: 'Cheat Codes feat. Demi Lovato - No Promises (Tropix Remix)',
      artist: 'Tropix',
      sources: {
        mp3: time_music

      },
      poster: time_art,
      free: true,
    },
  ],
};

export default connect(AudioPlaylist, options, jPlaylistOptions);
