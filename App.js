import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
import HomeSection from './component/HomeSection';
import AboutSection from './component/AboutSection';
import TeacherSection from './component/TeacherSection';
import CourseSection from './component/CourseSection';
import ContactSection from './component/ContactSection';
import ReviewSection from './component/ReviewSection';
import FooterSection from './component/FooterSection';
import AlgorithmSimulators from './component/AlgorithmSimulators';
import ClickHere from './component/ClickHere';
import LoginSection from './component/LoginSection';
import SignupSection from './component/SignupSection';
import PaymentSection from './component/PaymentSection';
import Cart from './component/Cart'; // Import the Cart component

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [cart, setCart] = useState([]); // Initialize cart state

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const addToCart = (courseName) => {
    setCart([...cart, courseName]); // Add course to cart
  };

  return (
    <div>
      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />
      {showLogin ? (
        <LoginSection handleSignupClick={handleSignupClick} />
      ) : showSignup ? (
        <SignupSection />
      ) : selectedCourse ? (
        <PaymentSection courseName={selectedCourse} />
      ) : cart.length > 0 ? (
        // Render Cart component if there are items in the cart
        <Cart cart={cart} />
      ) : (
        <>
          <HomeSection handleLoginClick={handleLoginClick} />
          <AboutSection />
          <TeacherSection />
          <CourseSection handlePaymentButtonClick={setSelectedCourse} addToCart={addToCart} /> {/* Pass addToCart function */}
          <AlgorithmSimulators />
          <ReviewSection />
          <ContactSection />
          <FooterSection />
        </>
      )}
      {!showLogin && !showSignup && !selectedCourse && cart.length === 0 && (
        <>
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default App;
