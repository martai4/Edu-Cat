import './App.css';
import React from 'react';

export class App extends React.Component{
  render(){
    return (
      <div className="App">
          <div className='Cat'>
            <img src="/educat_logo_no_background.png" className='caty'></img>
          </div>
          <div className='Messages'>Text</div>
          <div className='NextIcon'>Strzałka</div>
      </div>
    );
  }
  
}

export default App;
