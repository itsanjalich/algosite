import React from 'react';
import { FaChartLine, FaChartBar, FaExchangeAlt, FaShieldAlt, FaClock, FaChartPie, FaMoneyBillAlt, FaBitcoin, FaCogs, FaUserAltSlash, FaChartArea, FaBalanceScale, FaPython, FaRobot } from 'react-icons/fa';

const CourseSection = ({ addToCart }) => {
  const courses = [
    {
      name: "algorithmic-trading",
      price: "$99",
      description: "Learn the fundamentals of algorithmic trading for modern web development."
    },
    {
      name: "technical-analysis",
      price: "$99",
      description: "Master the art of CSS3 styling for stunning web designs."
    },
    {
      name: "options-trading",
      price: "$99",
      description: "Explore the power of JavaScript for interactive web applications."
    },
    {
      name: "risk-management",
      price: "$99",
      description: "Understand risk management strategies for secure and profitable trading."
    },
    {
      name: "day-trading",
      price: "$99",
      description: "Optimize websites and boost online visibility with SEO marketing skills."
    },
    {
      name: "swing-trading",
      price: "$99",
      description: "Create visually appealing designs with our graphic design course."
    },
    {
      name: "forex-trading",
      price: "$99",
      description: "Navigate the foreign exchange market with our forex trading course."
    },
    {
      name: "crypto-trading",
      price: "$99",
      description: "Unlock the potential of cryptocurrency trading for financial success."
    },
    {
      name: "futures-trading",
      price: "$99",
      description: "Explore futures trading strategies for diversified investment portfolios."
    },
    {
      name: "behavioral-finance",
      price: "$99",
      description: "Understand the psychology behind financial decisions with behavioral finance."
    },
    {
      name: "portfolio-management",
      price: "$99",
      description: "Optimize your investment portfolio with effective portfolio management."
    },
    {
      name: "derivatives-hedging",
      price: "$99",
      description: "Learn derivatives and hedging techniques for risk mitigation."
    },
    {
      name: "python-algorithmic-trading",
      price: "$99",
      description: "Implement algorithmic trading strategies using Python for financial success."
    },
    {
      name: "machine-learning-trading",
      price: "$99",
      description: "Explore machine learning applications in trading for advanced strategies."
    },
  ];

  return (
    <section id="course" className="course">
      <h1 className="heading">Our Courses</h1>

      <div className="box-container">
        {courses.map((course, index) => (
          <div key={index} className="box">
            {course.name === "algorithmic-trading" && <FaChartLine className="icon course-icon" />}
            {course.name === "technical-analysis" && <FaChartBar className="icon course-icon" />}
            {course.name === "options-trading" && <FaExchangeAlt className="icon course-icon" />}
            {course.name === "risk-management" && <FaShieldAlt className="icon course-icon" />}
            {course.name === "day-trading" && <FaClock className="icon course-icon" />}
            {course.name === "swing-trading" && <FaChartPie className="icon course-icon" />}
            {course.name === "forex-trading" && <FaMoneyBillAlt className="icon course-icon" />}
            {course.name === "crypto-trading" && <FaBitcoin className="icon course-icon" />}
            {course.name === "futures-trading" && <FaCogs className="icon course-icon" />}
            {course.name === "behavioral-finance" && <FaUserAltSlash className="icon course-icon" />}
            {course.name === "portfolio-management" && <FaChartArea className="icon course-icon" />}
            {course.name === "derivatives-hedging" && <FaBalanceScale className="icon course-icon" />}
            {course.name === "python-algorithmic-trading" && <FaPython className="icon course-icon" />}
            {course.name === "machine-learning-trading" && <FaRobot className="icon course-icon" />}

            <div className="course-details">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <p>Price: {course.price}</p>
            </div>

            <div className="overlay" onClick={() => addToCart(course)}>
              Course Details
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
