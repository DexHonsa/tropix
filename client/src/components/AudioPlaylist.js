/* eslint react/prop-types: 0 */
import React from 'react';
import { Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';
import JPlaylist, { connect, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle } from 'react-jplaylist';

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
      title: 'Teflon Sega - Press Play and Escape (OXILO Remix)',
      artist: 'Oxilo',
      sources: {
        mp3: 'http://dexhonsa.com/Teflon%20Sega%20-%20Press%20Play%20and%20Escape%20(OXILO%20Remix).mp3'

      },
      poster:'http://dexhonsa.com/teflon3.jpg',
      free: true,
    },
    {
      title: 'Gryffin & Illenium-Feel Good ft. Daya (OXILO Remix)',
      artist: 'Oxilo',
      sources: {
        mp3: 'http://dexhonsa.com/Gryffin%20&%20Illenium-Feel%20Good%20ft.%20Daya%20(OXILO%20Remix).mp3',

      },
      poster:'http://dexhonsa.com/feelgood.jpg',
      free: true,
    },
    {
      title: 'Time Well Wasted',
      artist: 'Oxilo',
      sources: {
        mp3: 'http://dexhonsa.com/Oxilo%20-%20Time%20Well%20Wasted%20.mp3'

      },
      poster: 'http://dexhonsa.com/timeWellWasted.jpg',
      free: true,
    },
  ],
};

export default connect(AudioPlaylist, options, jPlaylistOptions);
