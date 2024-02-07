import React from 'react';

const ClickHere = ({ link, onClick }) => {
  return (
    <div className="overlay" onClick={() => onClick(link)}>
      Click Here
    </div>
  );
};

export default ClickHere;
