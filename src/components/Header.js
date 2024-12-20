import React from 'react';
import './Header.css'; // You can create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">PRAKHAR</h1>
        <nav className="nav">
          <ul>
          <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
