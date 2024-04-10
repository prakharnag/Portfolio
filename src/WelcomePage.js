// WelcomePage.js
import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ onClick }) => {
  return (
    <div className="welcome-page-container">
      <div className="welcome-page-content">
        <h1>Welcome to My Website</h1>
        <button onClick={onClick} className="down-arrow">&#8595;</button>
      </div>
    </div>
  );
};

export default WelcomePage;
