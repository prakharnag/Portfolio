import React, { useState, useEffect } from 'react';
import './IntroductionPage.css';

const IntroductionPage = () => {
  const [typedText, setTypedText] = useState('');
  const [overrideText, setOverrideText] = useState(null);

  useEffect(() => {
    // Typing effect and sound for "I am Prakhar Nag"
    typeWithSound("I am Prakhar Nag", 100);

    // After a brief delay, override with "Sample Text"
    setTimeout(() => {
      typeWithSound("Sample Text", 100);
    }, 3000); // Adjust the delay time here (in milliseconds)
  }, []);

  const typeWithSound = (text, typingSpeed) => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
        // Play typing sound
        playAudio();
      } else {
        clearInterval(typingInterval);
        // Set override text after typing is complete
        setOverrideText(text);
      }
    }, typingSpeed); // Adjust typing speed here (milliseconds)
  };

  const playAudio = () => {
    const audio = new Audio('/typing.mp3'); // Adjust the path to your audio file
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <div className="introduction-page-container">
      <div className="introduction-page-content">
        <h2>{overrideText || typedText}</h2>
      </div>
    </div>
  );
};

export default IntroductionPage;
