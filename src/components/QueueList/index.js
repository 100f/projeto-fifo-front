import React from 'react';

import useAuth from '../../hooks/useAuth';

import QueueItem from '../QueueItem';

import './styles.css';

const QueueList = ({ players }) => {
  const { loggedUser } = useAuth();

  return (
    <ul id="game-queue-list-container">
      { 
        players.map(player => (
          <QueueItem 
            key={player.id} 
            name={player.id !== loggedUser?.id ? player.nome : 'Você'}
            backgroundColor={player.id !== loggedUser?.id ? "#677885" : "#FE551A"}
          /> 
        ))
      }
    </ul>
  )
};

export default QueueList;