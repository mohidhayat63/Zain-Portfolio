import React from 'react';
import './Introduction.css';

function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-text">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Mohid Hayat</h1>
          <p className="title">Full Stack Developer & AI Engineer</p>
          <p className="description">
            I'm passionate about building beautiful and functional web applications. 
            With expertise in modern web technologies, I create solutions that make a difference.
          </p>
          <div className="intro-buttons">
            <button className="btn-primary">View My Work</button>
            <button className="btn-secondary">Download CV</button>
          </div>
        </div>
        <div className="intro-image">
          <div className="avatar-placeholder">
            <img src="./Mohid.jpeg" alt="Mohid Hayat" className="avatar-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
