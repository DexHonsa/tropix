import React from 'react';
import PDF from '../img/PressKitFull.pdf';

class EPK extends React.Component {
  render(){
    return(
      <div style={{'height':'99vh','position':'relative'}}>

      <embed src={PDF} width="100%" height="100%"/>
      </div>
    );
  }
}
export default EPK;
