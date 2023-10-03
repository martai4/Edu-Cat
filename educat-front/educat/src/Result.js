import Cat from './Cat';
import Messages from './Messages';
import NextIcon from './NextIcon';
import './Result.css';
import React from 'react';
import JsonData from './json/message.json';
import Cookies from 'js-cookie';
import JsonDataDisplay from './JsonData';
// import $ from jQuery;

export class Result extends React.Component{
  render(){
     // Parse the string back into an object
    // let jsonData = JSON.stringify(parsedData, null, 2); // Convert object to JSON string

    return (
      <div className="Result">
        {/* {data.map(item => <p>{item.collage}</p>)} */}
        {/* <div>{data.map(item => <p>{item.collage}</p>)}</div> */}
        {/* {parsedData.map(key => (
          <div>
            {key.collage}
          </div>
        ))} */}
        <Cat></Cat>
        <Messages text="Look at our recommendation."></Messages>
        <JsonDataDisplay></JsonDataDisplay>
        <NextIcon></NextIcon>
      </div>
    );
  }
}

export default Result;