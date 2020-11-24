import React from 'react';

import './styles.css';

const TimeContainer = ({ time }) => {
  return (
    <div className="time-container">
      {time}
    </div>
  )
};

export default TimeContainer;