import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <section className="footer">
      <div className="icons">
        <a href="https://www.facebook.com/people/Anjali-Chaudhary/100064030591929/" className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com/itsanjalich" className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/_iamtac_/" className="icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/itsanjalichaudhary" className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.youtube.com/channel/UC5tnzpQy1jGw7NbxX5K_d4A" className="icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>

      <div className="credit">
        created by <span>Anjali Chaudhary</span> | all rights reserved.
      </div>
    </section>
  );
};

export default FooterSection;
