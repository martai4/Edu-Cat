import Cat from './Cat';
import Messages from './Messages';
import NextIcon from './NextIcon';
import './Drawing.css';
import React from 'react';

export class Drawing extends React.Component{
  render(){
    return (
      <div className="Drawing">
          <Cat></Cat>
          <Messages text="Let's draw house!">
            <div>Sirm</div>
          </Messages>
          <NextIcon redirect='/results'></NextIcon>
      </div>
    );
  }
  
}

export default Drawing;
