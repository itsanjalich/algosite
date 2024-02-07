import React from 'react';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome Free Solid icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon

const ReviewSection = () => {
  return (
    <section id="review" className="review">
      <h1 className="heading">students review</h1>
      <h3 className="title">what our students say about us</h3>

      <div className="box-container">
        <div className="box">
          <img src="images/pic-1.png" alt="" />
          <h3>LINA</h3>
          <p>
          TradeGenius has been a game-changer for me! Their courses are top-notch, providing practical knowledge and insights that have significantly improved my trading skills. Highly recommend!          </p>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
          </div>
        </div>

        <div className="box">
          <img src="images/pic-2.png" alt="" />
          <h3>LINA</h3>
          <p>
          Impressed with the quality of education at TradeGenius. The instructors are experts in their fields, and the community support adds immense value to the learning experience. Excited to continue my journey with TradeGenius!          </p>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
          </div>
        </div>

        <div className="box">
          <img src="images/pic-3.png" alt="" />
          <h3>LINA</h3>
          <p>
          TradeGenius offers an exceptional range of trading courses suitable for traders of all levels. The flexible learning options and supportive community make it a standout choice for anyone looking to master the art of trading. 5 stars!          </p>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStar} className="fas" />
            <FontAwesomeIcon icon={faStarHalfAlt} className="fas" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
