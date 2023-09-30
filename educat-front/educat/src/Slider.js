import React from 'react';
import './Slider.css';
import Cookies from 'js-cookie';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 5 };
    this.handleChange = this.handleChange.bind(this);
    Cookies.set(this.props.text.replace(/ /g, '_'),5);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    Cookies.set(this.props.text,event.target.value);
  }

  render() {
    return (
      <div>
        <div className='Text'>{this.props.text.replace(/ /g, '_')}</div>
        <input className='Sl'
          type="range"
          min="0"
          max="10"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.value}/10
      </div>
    );
  }
}

export default Slider;
