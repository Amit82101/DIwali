// DiwaliWishes.js
import React from 'react';
import './DiwaliWishes.css'; // Importing CSS for styling

const DiwaliWishes = () => {
  return (
    <div className="diwali-container">
      <h1 className="diwali-message"> Happy Diwali! </h1>
      <p className="diwali-subtext">
        Wishing you and your family peace, prosperity, and sparkling moments on this festival of lights!
      </p>
      <div className="fireworks">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
      </div>
    </div>
  );
};

export default DiwaliWishes;
