// HireMe.js
import React from 'react';
//import './HireMe.css'; // Optional: Create and style this CSS file

const HireMe = () => {
  return (
    <div className="hire-me-container">
      <h2>Get in Touch</h2>
      <p>If you'd like to hire me, feel free to reach out!</p>
      <div className="contact-info">
        <p>Email: <a href="mailto:pnag@hawk.iit.edu">pnag@hawk.iit.edu</a></p>
        <p>Phone: <a href="tel:+1234567890">+1 (312) 843-3234</a></p>
      </div>
    </div>
  );
};

export default HireMe;
