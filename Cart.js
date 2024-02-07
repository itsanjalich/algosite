import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Cart = ({ cart }) => {
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handlePayment = (courseName) => {
    setIsPaymentComplete(true);
    // Send email with access details here (requires server-side code)
  };

  return (
    <div className="cart-background">
      <div className="cart">
        <h2 className="cart-header">Your Cart</h2>
        {cart.map((course, index) => (
          <div key={index} className="course-info">
            <h3>{course.name}</h3>
            <p className="info">{course.uniqueness}</p>
            <p className="info">{course.whyChosen}</p>
            <p className="info">Ratings: {course.ratings}</p>
            {!isPaymentComplete ? (
              <button
                className="pay-button"
                onClick={() => handlePayment(course.name)}
              >
                Pay for Course
              </button>
            ) : (
              <div className="payment-complete">
                <FaCheckCircle />
                <p>Payment Complete! Check your email for access details.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
