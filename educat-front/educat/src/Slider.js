import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 5 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        {this.props.text}
        <input
          type="range"
          min="0"
          max="10"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.value}
      </div>
    );
  }
}

export default Slider;
