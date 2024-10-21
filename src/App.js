import React, {useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';

import About from './components/About';

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Header onAboutClick={scrollToAbout} />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <LandingPage />
              <About ref={aboutRef} />
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
