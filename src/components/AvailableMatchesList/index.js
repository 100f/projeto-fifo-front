import React from 'react';

import MatchLocal from '../MatchLocal';

import './styles.css';

const AvailableMatchesList = ({ list }) => {
  const { partidas: matches } = list;
  return (
    <ul id="available-matches-list-container">
      {
        matches.map(match => (
          <li className="available-match" key={match.id_partida}>
            <img 
              className="match-image" 
              src='https://i.imgur.com/utOUfYv.png' 
              alt={match.nome_jogo}
            />
            <div className="match-local">
              <MatchLocal local={match.local} />
            </div>
          </li>
        ))
      }
    </ul>

  )
};

export default AvailableMatchesList;