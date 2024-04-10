// App.js
import React, { useState } from 'react';
import './App.css';
import WelcomePage from './WelcomePage';
import IntroductionPage from './IntroductionPage';

const App = () => {
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const handleDownArrowClick = () => {
    setShowIntroduction(true);
    if (!audioPlayed) {
      playAudio();
      setAudioPlayed(true);
    }
  };

  const playAudio = () => {
    const audio = new Audio('/assets/typing.mp3'); // Adjust the path to your audio file
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  };

  return (
    <div className="App">
      {showIntroduction ? (
        <IntroductionPage />
      ) : (
        <WelcomePage onClick={handleDownArrowClick} />
      )}
    </div>
  );
};

export default App;
