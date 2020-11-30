import React from 'react';

import MatchCard from '../MatchCard';
import MatchCreationCard from '../MatchCreationCard';
import MatchLocal from '../MatchLocal';

import './styles.css';

const AvailableMatchesList = ({ list: matches }) => {
  return (
    <ul id="available-matches-list-container">
      {
        matches.map((match, index) => (
          <MatchCard 
            key={String(index)} 
            imgAlt={match.nomeJogo} 
            local={match.nomeDispositivo}
            deviceId={match.idDispositivo}
            gameId={match.idJogo}
          />
        ))
      }
      <li className="match-creation-card-list-item">
        <MatchCreationCard otherGameMessage/>
      </li>
    </ul>

  )
};

export default AvailableMatchesList;