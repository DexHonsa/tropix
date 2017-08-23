import React from 'react';
import Nav from './nav';
import WOW from 'wowjs';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nav : false
    }
  }
  componentDidMount(){
    new WOW.WOW().init();
  }
  showNav(){
    this.setState({
      nav:true
    })
  }
  hideNav(){
    this.setState({
      nav:false
    })
  }
  render(){
    var nav;
    if(this.state.nav){
      nav = <Nav hideNav={this.hideNav.bind(this)} />
    }else{

    }
    return(
      <div>
      {nav}
      <div className="my-nav-container">
        <div onClick={this.showNav.bind(this)} className="menu-btn"><i className="fa fa-bars" /></div>
      </div>

      </div>
    );
  }
}

export default Header;
