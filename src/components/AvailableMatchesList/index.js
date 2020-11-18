import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import MatchLocal from '../MatchLocal';

import './styles.css';

const AvailableMatchesList = ({ list }) => {
  const { partidas: matches } = list;
  return (
    <ScrollMenu 
      alignCenter
      itemClass="available-match"
      arrowLeft={(<div className="list-shifter-left" />)}
      arrowRight={(<div className="list-shifter-right" />)}
      data={
        matches.map(match => (
          <div key={match.id_partida}>
            <img 
              className="match-image" 
              src='https://i.imgur.com/utOUfYv.png' 
              alt={match.nome_jogo}
            />
            <div className="match-local">
              <MatchLocal local={match.local} />
            </div>
          </div>
        ))
      }
    >
    </ScrollMenu>
  )
};

export default AvailableMatchesList;