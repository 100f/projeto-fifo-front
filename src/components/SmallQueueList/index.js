import React from 'react';

import useAuth from '../../hooks/useAuth';

import QueueItem from '../QueueItem';

import './styles.css';

const SmallQueueList = ({ players }) => {
  const { loggedUser } = useAuth();

  return (
    <ul id="small-queue-list-container">
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

export default SmallQueueList;