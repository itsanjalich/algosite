import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const TeacherSection = () => {
  return (
    <section id="teacher" className="teacher">
      <h1 className="heading" style={{ color: 'White', fontSize: '5rem' }}>our teachers</h1>
<h3 className="title" style={{ color: 'White', fontSize: '3rem' }}>meet professional trainers</h3>


      <div className="card-container">
        <div className="card">
          <img src="images/teacher1.jpg" alt="" />
          <h3>LINA</h3>
          <p>I love teaching</p>
          <div className="icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>

        <div className="card">
          <img src="images/teacher2.jpg" alt="" />
          <h3>LINA</h3>
          <p>I love teaching</p>
          <div className="icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>

        <div className="card">
          <img src="images/teacher3.jpg" alt="" />
          <h3>LINA</h3>
          <p>I love teaching</p>
          <div className="icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>

        {/* Add more teacher cards as needed */}
      </div>
    </section>
  );
};

export default TeacherSection;
