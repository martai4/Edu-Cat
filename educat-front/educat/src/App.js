import './App.css';
import React from 'react';
import { NextIcon } from './NextIcon';
import Cat from './Cat';
import { Messages } from './Messages';

export class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Cat></Cat>
          <Messages text='Let’s talk about Your future!'></Messages>
          <NextIcon redirect='/choices'></NextIcon>
      </div>
    );
  }
  
}

export default App;
