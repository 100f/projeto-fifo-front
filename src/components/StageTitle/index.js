import React from 'react';

import './styles.css';

const StageTitle = ({ stage, title }) => (
  <div id="stage-title-container">
    <div className="stage-title-circle">
      <span className="stage-title-number">
        {stage}
      </span>
    </div>
    <h2 className="stage-title-text">
      {title}
    </h2>
  </div>
);

export default StageTitle;