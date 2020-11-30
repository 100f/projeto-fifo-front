import React from 'react';

import './styles.css';

const TimeContainer = ({ time, backgroundColor, color }) => {
  return (
    <div className="time-container" style={{ backgroundColor, color }}>
      {time}
    </div>
  )
};

export default TimeContainer;