import './App.css';
import React from 'react';
import { NextIcon } from './NextIcon';
import Cat from './Cat';

export class App extends React.Component{
  render(){
    return (
      <div className="App">
          <Cat></Cat>
            <div className='Messages'>
              <div className='Bubble'>Let’s talk about Your future!</div>
            </div>
          <NextIcon redirect='/a'></NextIcon>
      </div>
    );
  }
  
}

export default App;
