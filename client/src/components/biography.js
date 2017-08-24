import React from 'react';
import '../css/bio.css';
import face from '../img/face.jpg';
import Particles from 'react-particles-js';
import $ from 'jquery';
class Biography extends React.Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div>
      <div className="bio-stage">
      <Particles style={{position:'absolute',top:'0'}} width="100%" height="100%" params={{
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#bdd9f4"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#fff"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/github.svg",
            "width": 200,
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
          "enable": false,
          "distance": 100,
          "color": "#ffffff",
          "opacity": 1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": .7,
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
            "size": 2,
            "duration": 5.434565434565435,
            "opacity": 2,
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
        <div className="bio-container">
        <div className="row">
        <div className="col-sm-6">
          <div className="bio-face animated-slow fadeIn">
          <img src={face}/>
          </div>
        </div>
        <div className="col-sm-6 animated fadeInLeft">
        <h1>Biography</h1>
        <div className="bio-text">Dex grew up playing guitar and piano since age of 10, he is one of those rare super talented “music by ear” musicians’ mastering electronic production / graphic art design / web development / software programming for the past 12 years or so . Self taught producer since age 15 using FL studios. He used to go by Dexxtron in highschool, you can hear the transformation and development of his production level from then to now through soundcloud. OXILO project started October 2016 with his long time friend and recent business college graduate, Adam Schifano. The first big break was illenium Feel Good OXILO Remix getting a youtube feature on pixl network and reaching 150k on soundcloud. We just purchased Pioneer nexus CDJS 2000s to get ready for the big stage. Got invited to become ½ of Tropix Duo in May with Dylan Christe and produced a couple of bangers, including getting invited to Las Vegas by the Chainsmokers because of our My Type remix, also being supported by them on all socials coming out August 31st. The most satisfying thing for Dex has been seeing people use his music for a variety of different videos on youtube. Dex is planning on releasing another original track in September 2017.
        <br /><br />
        People that Inspire OXILO: Lucian, Andrew Luce, Vanic, Marshmello, Louis the Child, Weathan, Mickey Valens, BKAYE, Oliver Heldens, Laidback Luke, Autograf, DROELOE, Steve Void, Skrillex, Alan Walker, Milk n Cooks, KSHMR
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
export default Biography;
