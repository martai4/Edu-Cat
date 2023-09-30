import Cat from './Cat';
import Messages from './Messages';
import NextIcon from './NextIcon';
import './Result.css';
import React from 'react';

export class Result extends React.Component{
  render(){
    return (
      <div className="Result">
          <Cat></Cat>
          <Messages text="Look at our recommendation."></Messages>
          <NextIcon></NextIcon>
      </div>
    );
  }
  
}

export default Result;
