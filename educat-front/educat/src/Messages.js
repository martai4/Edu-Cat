import './Messages.css';
import React from 'react';


export class Messages extends React.Component{
  render(){
    return (  
        <div className='Messages'>
            <div className='Bubble'>{this.props.text}</div>
        </div>
    );
  }
  
}

export default Messages;
