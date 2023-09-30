import React from 'react';

class DrawingWindow extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.drawing = false;
  }

  startDrawing = (e) => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    this.drawing = true;
  };

  draw = (e) => {
    if (!this.drawing) return;
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000';
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  finishDrawing = () => {
    this.drawing = false;
  };

  componentDidMount() {
    const canvas = this.canvasRef.current;
    canvas.addEventListener('mousedown', this.startDrawing);
    canvas.addEventListener('mousemove', this.draw);
    canvas.addEventListener('mouseup', this.finishDrawing);
  }

  componentWillUnmount() {
    const canvas = this.canvasRef.current;
    canvas.removeEventListener('mousedown', this.startDrawing);
    canvas.removeEventListener('mousemove', this.draw);
    canvas.removeEventListener('mouseup', this.finishDrawing);
  }

  render() {
    return <canvas ref={this.canvasRef} style={{ width: '100%', height: '100%' }} />;
  }
}

export default DrawingWindow;
