import Cat from './Cat';
import Messages from './Messages';
import NextIcon from './NextIcon';
import './Drawing.css';
import React from 'react';
import DrawingWindow from './DrawingWindow';
import Cookies from 'js-cookie';

export class Drawing extends React.Component{
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    // this.sendBack = this.sendBack.bind(this);
  }

  sendBack(){
    let formData = new FormData();
    let imageFile = document.querySelector('#image-upload').files[0];
    if (typeof imageFile !== 'undefined') {
      formData.append('image', imageFile);
      formData.append('json', JSON.stringify({
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
        body: formData
    })
    .then(response => response.json())
      .then(data => {
          console.log(data);
        }
      );
  }
    else{
      var canvas = document.getElementById("houseDraw");
      canvas.toBlob((blob) => {
        let formData = new FormData();
        formData.append('image', blob, 'canvas_image.png');
        formData.append('json', JSON.stringify({
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
      }))

        fetch('http://localhost:8080/discover', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
      }, 'image/png');
    }
  }
  render(){
    return (
      <div className="Drawing">
        <Cat></Cat>
          <Messages text="Let's draw a house and its surroundings!"></Messages>
          <div style={{ display: 'flex', width:'100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{display: 'flex', height:'100%', alignItems: 'center'}}>
              <div className='DrawingSet' style={{width:640, height:384}}>
                <DrawingWindow style={{width:640, height:384}} canvasRef={this.canvasRef}></DrawingWindow>
                <input type="file" id="image-upload" accept="image/png" style={{ marginLeft: -3, paddingBottom: 2 }} />
              </div>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex' }} onClick={this.sendBack}>
            <NextIcon redirect='/results'></NextIcon>
          </div>
          
      </div>
    );
  }
  
}

export default Drawing;

