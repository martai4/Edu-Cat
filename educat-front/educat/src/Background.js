import React, { useEffect, useRef } from 'react';
import './Background.css';

function Background() {
  const canvasRef = useRef(null);
  const numParticles = 250;
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    for (let i = 0; i < numParticles; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 3 + 6; 

      particles.push({
        x,
        y,
        radius,
        color: `rgba(${190 + Math.random()*65}, ${190 + Math.random()*65}, ${190 + Math.random()*65}, ${Math.random()*0.8 - 0.3})`,
        speedX: Math.random()*0.1 - 0.05,
        speedY: Math.random()*0.1 - 0.05,
      });
    }

    const animateParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, []);

  return (
    <canvas className="background" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} ref={canvasRef}></canvas>
  );
}

export default Background;
