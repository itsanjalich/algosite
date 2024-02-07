import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <header>
      <a href="/" className="logo">
        <FontAwesomeIcon icon={faGraduationCap} />TRADEGENIUSAI
      </a>
      <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" className="active">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#teacher">teacher</a></li>
          <li><a href="#course">course</a></li>
          <li><a href="#AlgorithmSimulators">AlgorithmSimulators</a></li>
          <li><a href="#review">review</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <div className="fas fa-bars" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

export default Header;
