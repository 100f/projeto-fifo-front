import React from 'react';

import QueueItem from '../QueueItem';

import './styles.css';

const QueueList = ({ players }) => {
  return (
    <ul id="game-queue-list-container">
      { 
        players.map(player => (
          <QueueItem 
            key={player.id} 
            name={player.nome}
            backgroundColor="#677885"
          /> 
        ))
      }
    </ul>
  )
};

export default QueueList;