import React from 'react';

import './styles.css';

const NextStepButton = ({ onClick, text, disabled = false }) => {
  return disabled
    ? 
      <div id="next-step-button-container-inactive">
        {text}
      </div>
    :
      <div id="next-step-button-container" onClick={onClick}>
        {text}
      </div>
}

export default NextStepButton;