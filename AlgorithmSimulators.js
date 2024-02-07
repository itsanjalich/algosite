import React, { useState } from 'react';
import { FaChartLine, FaChartBar, FaCogs, FaRobot, FaCode, FaDesktop, FaPython } from 'react-icons/fa';
import ClickHere from './ClickHere';

const AlgorithmSimulators = () => {
  const simulators = [
    { name: 'TradingView', icon: <FaChartLine />, description: 'Charting and technical analysis platform.', link: 'https://tradingview.com' },
    { name: 'QuantConnect', icon: <FaChartBar />, description: 'Algorithmic trading platform supporting multiple languages.', link: 'https://quantconnect.com' },
    { name: 'MetaTrader', icon: <FaCogs />, description: 'Popular trading platform with algorithmic trading support.', link: 'https://metatrader.com' },
    { name: 'AlgoTrader', icon: <FaRobot />, description: 'Comprehensive algorithmic trading software with simulation features.', link: 'https://algotrader.com' },
    { name: 'Backtrader', icon: <FaCode />, description: 'Python framework for developing and testing trading strategies.', link: 'https://backtrader.com' },
    { name: 'Interactive Brokers Trader Workstation', icon: <FaDesktop />, description: 'Powerful trading platform with built-in strategy testing capabilities.', link: 'https://interactivebrokers.com' },
    { name: 'Zipline', icon: <FaPython />, description: 'Open-source backtesting library in Python for algorithmic trading.', link: 'https://zipline.io' },
  ];

  const [hoveredBox, setHoveredBox] = useState(null);

  const handleBoxClick = (link) => {
    // Handle box click, you can navigate to another page or show more details
    window.open(link, '_blank');  // Open link in a new tab
  };

  return (
    <section className="algorithm-simulators">
      <h1 className="heading">Algorithm Simulators</h1>
      <h3 className="title">Test Your Trading Strategies</h3>

      <div className="box-container">
        {simulators.map((simulator, index) => (
          <div
            key={index}
            className={`box ${hoveredBox === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredBox(index)}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="icon">{simulator.icon}</div>
            <h3>{simulator.name}</h3>
            <p>{simulator.description}</p>
            {hoveredBox === index && (
              <ClickHere link={simulator.link} onClick={handleBoxClick} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlgorithmSimulators;
