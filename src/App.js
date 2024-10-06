// App.js
import React from 'react';
import './App.css';
//import WelcomePage from './WelcomePage';
//mport IntroductionPage from './IntroductionPage';
import LandingPage from './components/LandingPage';
import Header from './components/Header';

const App = () => {
  /*const [showIntroduction, setShowIntroduction] = useState(false);
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
*/
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
};

export default App;


/*{showIntroduction ? (
  <IntroductionPage />
) : (
  <WelcomePage onClick={handleDownArrowClick} />
)}*/