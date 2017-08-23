import React, {Component} from 'react';
import logo from './logo.svg';
import AudioPlaylist from './components/AudioPlaylist';
import Main from './components/main';
import Header from './components/header';
import $ from 'jquery';
import WOW from 'wowjs';




class App extends Component {

  componentDidMount(){
    new WOW.WOW().init();
    $('.jp-playlist').addClass('animated-fast');

    if($('.jp-playlist').hasClass('jp-hidden')){
      $('.jp-hidden').css('display', 'none');
    }
    $('.jp-toggle-playlist').click(function(){
      console.log('click');
      setTimeout(function(){
        if($('.jp-playlist').hasClass('jp-hidden')){
          $('.jp-playlist').addClass('animated-fast').removeClass('fadeIn').addClass('fadeOut');
          setTimeout(function(){
            $('.jp-hidden').css('display', 'none');
          },500)

        }else{
          $('.jp-playlist').css('display', 'block');
          $('.jp-playlist').addClass('animated-fast').addClass('fadeIn');
        }
      },1)

    })
  }
  render() {
    return (
      <div className="App">
        <Header />


        {this.props.children}
        <AudioPlaylist />
      </div>
    );
  }
}

export default App;
