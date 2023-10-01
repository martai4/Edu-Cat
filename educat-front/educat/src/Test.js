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
          <Messages text="In which fields Your particular intrests lay in? Remember that 0 goes for the field You're the least interested and 10 for the most interestings fields!"></Messages>
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
