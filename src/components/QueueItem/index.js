import React from 'react';

import './styles.css';

const QueueItem = ({ 
  name, 
  contentColor = 'white', 
  backgroundColor = '#0A263A', 
  key 
}) => (
  <li key={key} className="queue-item-container" style={{ backgroundColor, color: contentColor }}>
    <div style={{ backgroundColor: contentColor }}/>
    <p>{name}</p>
  </li>
);

export default QueueItem;