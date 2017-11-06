import React from 'react';
import {connect} from 'react-redux';

import ReactLoading from 'react-loading';
import $ from 'jquery';
import Header from './header';
import teflon from '../img/teflon.png';
import feel from '../img/feel_good.png';
import time from '../img/time_well_wasted.png';
import need from '../img/need_somebody.png';
import Particles from 'react-particles-js';

import '../js/script.js';

class Main extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(function() {
      $('.loading').removeClass('fadeIn').addClass('fadeOut');
    }, 0)

  }
  playMusic(e, id) {
    var attr = e.target.id;

    console.log(attr);
    if (attr != '') {

      if ($('#AudioPlaylist').hasClass('jp-state-playing')) {
        if ($('#' + attr + ' i').hasClass('fa-pause')) {
          $('#' + attr + ' i').removeClass('fa-pause').addClass('fa-play');
          setTimeout(function() {
            $('.jp-play').click();
          }, 1)

        } else {
          $('.play-icon').removeClass('fa-pause').addClass('fa-play');
          $('#' + attr + ' i').addClass('fa-pause').removeClass('fa-play');
          setTimeout(function() {
            $('.jp-playlist li:nth-child(' + id + ')').children('.jp-media-link').click();
          }, 100)
        }

      } else {
        $('.play-icon').removeClass('fa-play').addClass('fa-play');
        $('#' + attr + ' i').removeClass('fa-play').addClass('fa-pause');
        setTimeout(function() {
          $('.jp-playlist li:nth-child(' + id + ')').children('.jp-media-link').click();
        }, 1)
      }
    }
  }
  scrollDown(id) {
    var id = id
    $("html, body").animate({
      scrollTop: $('#' + id).offset().top
    }, 1000);
  }
  render() {

    return (
      <div>

        <div className="loading wow animated">
          <ReactLoading type="bars" color="#488ce6" width="25px"/>
        </div>

        <div>
          <div className="main-stage parallax--bg">
            <div onClick={() => this.scrollDown('section-1')} className="scroll-down-btn wow animated fadeInUp" data-wow-delay="1.5s">
              <i className="fa fa-angle-down"></i>
            </div>
            <div className="main-bg animated-slow fadeIn wow" data-wow-delay=".5s"/>

          </div>
          <div id="section-1" className="section-a need-somebody">
            <div onClick={() => this.scrollDown('section-2')} className="scroll-down-btn wow animated fadeInUp white-scroll" data-wow-delay="0s">
              <i className="fa fa-angle-down"></i>
            </div>
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={need}/>
                  <div onClick={(e) => this.playMusic(e, 1)} className="disc-play" id="need">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>TELYKast - There For You (Tropix Remix)</h1><br/>
                    Tropix’s new There for you Remix is a up tempo future bass feel good song! Telykast has provided Tropix with pitch perfect vocals that compliment a unforgettable melody. There for you Tropix (Remix) has already reached #1 on New and Hot Dance/EDM SoundCloud charts! So sit back and enjoy the trumpets!
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div id="section-2" className="section-a">
            <div onClick={() => this.scrollDown('section-3')} className="scroll-down-btn wow animated fadeInUp white-scroll" data-wow-delay="0s">
              <i className="fa fa-angle-down"></i>
            </div>
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={teflon}/>
                  <div onClick={(e) => this.playMusic(e, 2)} className="disc-play" id="teflon">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>Win and Woo x Bryce Fox - Chicago (Tropix Remix)</h1><br/>
                    Chicago Tropix remix is contagious! Fun to dance to, or jam out in the car. This awe inspiring song came from Win and Woo. Chicago is a future bass / melodic remix. The song features skips and  soft drops that carry well into a main sustained drop. Check it out now!
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div id="section-3" className="section-a feel-good">
          <div onClick={() => this.scrollDown('section-4')} className="scroll-down-btn wow animated fadeInUp white-scroll" data-wow-delay="0s">
            <i className="fa fa-angle-down"></i>
          </div>
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={feel}/>
                  <div onClick={(e) => this.playMusic(e, 3)} className="disc-play" id="feel">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>The Chainsmokers - My Type (Tropix Remix)</h1><br/>
My Type Tropix remix got the attention of the chainsmokers themselves, resulting inviting us out to a private backstage meet and greet before their show at the Encore Beach Club in Las Vegas. This is many of our fan’s favorite, go check out the dirty drop on this banger and you will be convinced as well!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="section-4" className="section-a time-well-wasted">
            <Particles style={{
              position: 'absolute',
              top: '0'
            }} width="100%" height="100%" params={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#fff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 1,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 0.959040959040959,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2.3976023976023977,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 15.782952832645451,
                  "color": "#000000",
                  "opacity": 0.007891476416322726,
                  "width": 0.15782952832645453
                },
                "move": {
                  "enable": true,
                  "speed": 1.5782952832645452,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 167.83216783216784,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 300,
                    "size": 5,
                    "duration": 5.434565434565435,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}/>
            <div className="container">
              <div className="row">
                <div className="disc-img animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <img src={time}/>
                  <div onClick={(e) => this.playMusic(e, 4)} className="disc-play" id="time">
                    <i className="fa fa-play play-icon"></i>
                  </div>
                </div>
                <div className="disc-title animate-fast fadeInUp wow col-sm-12 col-md-6 col-lg-6">
                  <div>
                    <h1>Cheat Codes feat. Demi Lovato - No Promises (Tropix Remix)</h1><br/>
                    No Promises Tropix Remix is Tropix’s most played track on soundcloud. It gained a lot of popularity after being featured in a Nest HQ playlist (Skrillex Curated Website). This fast paced future bass track takes the listener on a hell of a ride. The build up is sensational, and fits perfectly for the drop. Check out this song now!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default(Main);
