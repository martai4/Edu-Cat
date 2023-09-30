import './Cat.css';
import React from 'react';

export class Cat extends React.Component{
  render(){
    return (
        <div className='Cat'>
        <img src="/educat_logo_no_background.png" className='cat'></img>
      </div>
    );
  }
  
}

export default Cat;
