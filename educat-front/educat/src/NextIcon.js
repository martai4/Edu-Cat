import './NextIcon.css';
import React from 'react';
import {Link } from 'react-router-dom';

export class NextIcon extends React.Component{

  render(){
      return (
          <div className='NextIcon'>
              {this.props.redirect && <Link to={this.props.redirect}><div className="arrow right"></div></Link>}
          </div>
      );
  }
}



export default NextIcon;
