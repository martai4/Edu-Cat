import Cat from './Cat';
import Messages from './Messages';
import NextIcon from './NextIcon';
import './Drawing.css';
import React from 'react';
import DrawingWindow from './DrawingWindow';
import Cookies from 'js-cookie';

export class Drawing extends React.Component{
  // constructor(props){
  //   super(props);
  //   console.log(Cookies.get('Humanistic'));
  //   console.log(Cookies.get('Communication'));
  // }
  sendBack(){
    console.log(JSON.stringify({
      userPreferences: {
        HUMANIST: parseInt(Cookies.get('Humanistic')),
          THEOLOGICAL: parseInt(Cookies.get('Teology')),
          ECONOMICAL: parseInt(Cookies.get('Economy')),
          MEDICAL: parseInt(Cookies.get('Medicine_and_health_care')),
          NATURE: parseInt(Cookies.get('Science_of_nature')),
          ENVIRONMENTAL: parseInt(Cookies.get('Agriculture_and_veterinary')),
          SOCIAL: parseInt(Cookies.get('Communication')),
          TECHNICAL: parseInt(Cookies.get('Technic')),
          SCIENCE: parseInt(Cookies.get('Science'))
      }
    }));
    
    fetch('http://localhost:8080/discover', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userPreferences: {
          HUMANIST: parseInt(Cookies.get('Humanistic')),
            THEOLOGICAL: parseInt(Cookies.get('Teology')),
            ECONOMICAL: parseInt(Cookies.get('Economy')),
            MEDICAL: parseInt(Cookies.get('Medicine_and_health_care')),
            NATURE: parseInt(Cookies.get('Science_of_nature')),
            ENVIRONMENTAL: parseInt(Cookies.get('Agriculture_and_veterinary')),
            SOCIAL: parseInt(Cookies.get('Communication')),
            TECHNICAL: parseInt(Cookies.get('Technic')),
            SCIENCE: parseInt(Cookies.get('Science'))
        }
      })
    })
  }
  render(){
    return (
      <div className="Drawing">
          <Cat></Cat>
          <Messages text="Let's draw house!"></Messages>
          <div className='DrawingSet'><DrawingWindow></DrawingWindow></div>
          <NextIcon onClick={this.sendBack()} redirect='/results'></NextIcon>
      </div>
    );
  }
  
}

export default Drawing;
