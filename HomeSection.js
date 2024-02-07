// Modify your HomeSection component
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFire, faAward } from '@fortawesome/free-solid-svg-icons';

const HomeSection = ({ handleLoginClick }) => {
  return (
    <section className="home" id="home">
      <div className="content">
              {/* Scrolling quotes */}
      <div className="quote-container">
        <div className="quotes">
          <div className="quote"><h1>Learn in-demand skills</h1></div>
          <div className="quote"><h1>Reach your career goals</h1></div>
          <div className="quote"><h1>Be your own boss</h1></div>
          <div className="quote"><h1>Learn together, grow together</h1></div>
          <div className="quote"><h1>Learn from real-world experts</h1></div>
        </div>
      </div>

        <h1>TRADEGENIUS</h1>
        <p>Open Your Door To More With World-Class Trading Solutions!</p>
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>

      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={faGraduationCap} className="icon home-icon" />
          <h3>trending courses</h3>
          <p>Find a top Course that fits your life.</p>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faFire} className="icon home-icon" />
          <h3>free trial</h3>
          <p>Advance your career with new skills</p>
        </div>

        <div className="box">
          <FontAwesomeIcon icon={faAward} className="icon home-icon" />
          <h3>certifications</h3>
          <p>World class learning for you</p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
