import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount() {

    $('.nav-list').children().each(function(){
      $(this).addClass('fadeIn');
    })
  }

  hideNav(){
    var this2 = this;
    $('.nav-container').removeClass('fadeIn').addClass('fadeOut');
    setTimeout(function(){
      this2.props.hideNav()
    },500)
  }
  render(){
    return(
      <div>
        <div className="nav-container animated-fast fadeIn ">
          <div className="main-nav">
          <div className="nav-list">
              <li className="animated-fast wow fadeInLeft" data-wow-delay=".1s"  onClick={this.hideNav.bind(this)}>X</li>
              <li className="animated-fast wow fadeInLeft" data-wow-delay=".3s"><Link onClick={this.hideNav.bind(this)} to='/'>Home</Link></li>
            
              <li className="animated-fast wow fadeInLeft" data-wow-delay="1s" onClick={this.hideNav.bind(this)}>X</li>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
