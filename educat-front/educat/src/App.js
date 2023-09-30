import './App.css';
import React from 'react';

export class App extends React.Component{
  render(){
    return (
      <div className="App">
          <div className='Cat'>
            <img src="/educat_logo_no_background.png" className='cat'></img>
          </div>
            <div className='Messages'>Let’s talk about Your future!
          </div>
          <div className='NextIcon'>
            <div class="arrow right"></div>
          </div>
      </div>
    );
  }
  
}

export default App;
