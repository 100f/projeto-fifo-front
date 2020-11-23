import React from 'react';

import MatchCard from '../MatchCard';

import './styles.css';

const AvailableMatchesList = ({ list }) => {
  const { partidas: matches } = list;

  return (
    <ul id="available-matches-list-container">
      {
        matches.map(match => (
          <MatchCard 
            key={match.id_partida} 
            imgAlt={match.nome_jogo} 
            local={match.local}
          />
        ))
      }
    </ul>

  )
};

export default AvailableMatchesList;