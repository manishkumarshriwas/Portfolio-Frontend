import React from 'react';
import '..index.css'; // If not in index.css, but you can keep in index.css

const AnimatedHero = () => {
  return (
    <section className="hero-container">
      <div className="text-animation">
        <h1>Frontend Developer</h1>
        <p>Building interactive UI with animations</p>
      </div>
      <div className="bubble-container">
        <div className="orbit">
          <div className="bubble">HTML</div>
        </div>
        <div className="orbit">
          <div className="bubble">CSS</div>
        </div>
        <div className="orbit">
          <div className="bubble">JavaScript</div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;
