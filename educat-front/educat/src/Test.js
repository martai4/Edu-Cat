import Cat from './Cat';
import Messages from './Messages';
import NextIcon from './NextIcon';
import './Test.css';
import React from 'react';

export class Test extends React.Component{
  render(){
    return (
      <div className="Test">
          <Cat></Cat>
          <Messages text='What is interesting for you and how much?'></Messages>
          <NextIcon redirect='/drawing'></NextIcon>
      </div>
    );
  }
  
}

export default Test;
