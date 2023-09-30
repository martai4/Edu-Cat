import './Header.css';
import React from 'react';
import './fonts/aliensAndCows_trial.ttf';

export class Header extends React.Component{
  render(){
    return (
      <div className="Header">
        <div className='Page-Title'>
            EduCat
        </div>
      </div>
    );
  }
  
}

export default Header;
