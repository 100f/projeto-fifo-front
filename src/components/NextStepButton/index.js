import React from 'react';

import './styles.css';

const NextStepButton = ({ onClick, text }) => (
  <div id="next-step-button-container" onClick={onClick}>
    <span className="">{text}</span>
  </div>
);

export default NextStepButton;