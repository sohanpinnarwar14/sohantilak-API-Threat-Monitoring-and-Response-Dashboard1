// import React, { useEffect, useRef } from 'react';

// const BackgroundAnimation = () => {
//   const backgroundRef = useRef(null);

//   useEffect(() => {
//     const createParticle = () => {
//       const particle = document.createElement('div');
//       particle.classList.add('particle');
//       particle.style.width = `${Math.random() * 5}px`;
//       particle.style.height = particle.style.width;
//       particle.style.left = `${Math.random() * 100}vw`;
//       particle.style.top = `${Math.random() * 100}vh`;
//       particle.style.animation = `float ${Math.random() * 10 + 5}s infinite`;
//       return particle;
//     };

//     const createNetwork = () => {
//       for (let i = 0; i < 50; i++) {
//         backgroundRef.current.appendChild(createParticle());
//       }
//     };

//     createNetwork();

//     return () => {
//       if (backgroundRef.current) {
//         backgroundRef.current.innerHTML = '';
//       }
//     };
//   }, []);

//   return <div ref={backgroundRef} className="background-animation" />;
// };

// export default BackgroundAnimation;

// import React, { useEffect, useRef } from 'react';
// import './BackgroundAnimation.css';

// const BackgroundAnimation = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let particlesArray;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     class Particle {
//       constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.size = Math.random() * 5 + 1;
//         this.speedX = Math.random() * 3 - 1.5;
//         this.speedY = Math.random() * 3 - 1.5;
//       }
//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         if (this.size > 0.2) this.size -= 0.1;
//       }
//       draw() {
//         ctx.fillStyle = 'rgba(173, 216, 230, 0.8)';
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     function init() {
//       particlesArray = [];
//       for (let i = 0; i < 100; i++) {
//         let x = Math.random() * canvas.width;
//         let y = Math.random() * canvas.height;
//         particlesArray.push(new Particle(x, y));
//       }
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < particlesArray.length; i++) {
//         particlesArray[i].update();
//         particlesArray[i].draw();
//       }
//       requestAnimationFrame(animate);
//     }

//     init();
//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       init();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="background-animation"></canvas>;
// };

// export default BackgroundAnimation;