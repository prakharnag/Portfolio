// LandingPage.js
import React from 'react';
import './LandingPage.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const LandingPage = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "AI Enthusiast"],
    loop: true, // Set to false if you don't want to loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500, // Delay before deleting
  });

  return (
    <div className="landing-page">
      <div className="left-section">
        <h2>Hello!, I'm Prakhar Nag</h2>
        <h6 className="typewriter-text">
          {text}
          <Cursor />
        </h6>
        <div className="social-buttons">
          {/* LinkedIn button */}
          <a href="https://www.linkedin.com/in/prakhar-nag/" target="_blank" rel="noopener noreferrer">
            < FaLinkedin alt="LinkedIn" className="social-icon" />
          </a>
          {/* GitHub button */}
          <a href="https://github.com/prakharnag" target="_blank" rel="noopener noreferrer">
            <FaGithub alt="GitHub" className="social-icon" />
          </a>
          
          {/* Gmail button */}
          <a href="mailto:pnag@hawk.iit.edu">
            <BiLogoGmail alt="Gmail" className="social-icon" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
