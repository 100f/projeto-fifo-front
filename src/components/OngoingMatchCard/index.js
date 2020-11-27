import React from 'react';

import QueueItem from '../QueueItem';
import TimeContainer from '../../components/TimeContainer';

import './styles.css';

const OngoingMatchCard = ({ teams = null, game = 'Fifa' }) => {
  return (
    <div id="ongoing-match-card-container">
      <div className="ongoing-match-card-first-row">
        <h3>{game}</h3>
        <div className="ongoing-match-card-time-section">
          <h3>Tempo Passado</h3>
          <TimeContainer time="01:00"/>
        </div>
      </div>
      <div className="ongoing-match-card-second-row">
        <div className="ongoing-match-card-participants-container">
          <QueueItem 
            name="Outra Pessoa 1" 
            backgroundColor="white" 
            contentColor="#0A263A" 
          />
          <QueueItem 
            name="Outra Pessoa 2" 
            backgroundColor="white" 
            contentColor="#0A263A" 
          />
        </div>
        <span>X</span>
        <div className="ongoing-match-card-participants-container">
          <QueueItem 
            name="Outra Pessoa 3" 
            backgroundColor="white" 
            contentColor="#0A263A" 
          />
          <QueueItem 
            name="Outra Pessoa 4" 
            backgroundColor="white" 
            contentColor="#0A263A" 
          />
        </div>
      </div>
    </div>  
  )
};

export default OngoingMatchCard;