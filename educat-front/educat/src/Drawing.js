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
  render(){
    return (
      <div className="Drawing">
          <Cat></Cat>
          <Messages text="Let's draw house!"></Messages>
          <div className='DrawingSet'><DrawingWindow></DrawingWindow></div>
          <NextIcon redirect='/results'></NextIcon>
      </div>
    );
  }
  
}

export default Drawing;
