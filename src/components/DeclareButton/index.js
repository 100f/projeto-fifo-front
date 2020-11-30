import React from 'react';

import './styles.css';

const DeclareButton = ({ onClick, text, backgroundColor, color, boxShadow }) => {
  return (
      <div id="declare-button-container" onClick={onClick} style={{ backgroundColor, color, boxShadow }}>
        {text}
      </div>
  )
}

export default DeclareButton;