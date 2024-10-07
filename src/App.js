// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HireMe from './components/HireMe';
//import MyWorks from './components/MyWorks'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hire-me" element={<HireMe />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
