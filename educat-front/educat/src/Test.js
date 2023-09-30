import Cat from './Cat';
import Messages from './Messages';
import NextIcon from './NextIcon';
import Slider from './Slider';
import './Test.css';
import React from 'react';

export class Test extends React.Component{
  
  render(){
    return (
      <div className="Test">
          <Cat></Cat>
          <Messages text='What is interesting for you and how much?'></Messages>
          <div className='Sliders'>
            <Slider text="Humanistic"></Slider>
            <Slider text="Teology"></Slider>
            <Slider text="Economy"></Slider>
            <Slider text="Medicine and health care"></Slider>
            <Slider text="Science of nature"></Slider>
            <Slider text="Agriculture and veterinary"></Slider>
            <Slider text="Communication"></Slider>
            <Slider text="Technic"></Slider>
            <Slider text="Science"></Slider>
          </div>
          <NextIcon redirect='/drawing'></NextIcon>
      </div>
    );
  }
  
}

export default Test;
