import React from 'react';

import './styles.css';

const MatchLocal = ({ local }) => {
  return (
    <div id="match-local-container">
      <div className="circle"/>
      <span className="local-text">{local}</span>
    </div>
  )
};

export default MatchLocal;