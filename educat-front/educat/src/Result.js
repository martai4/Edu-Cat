import Cat from './Cat';
import Messages from './Messages';
import NextIcon from './NextIcon';
import './Result.css';
import React from 'react';
import JsonData from './json/message.json';
import JsonDataDisplay from './JsonData';
// import $ from jQuery;

export class Result extends React.Component{
  render(){
    return (
      <div className="Result">
          <Cat></Cat>
          <Messages text="Look at our recommendation."></Messages>
          <JsonDataDisplay></JsonDataDisplay>
          <NextIcon></NextIcon>
      </div>
    );
  }
}
export default Result;