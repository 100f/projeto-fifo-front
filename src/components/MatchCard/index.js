import React from 'react';

import MatchLocal from '../MatchLocal';

import './styles.css';

const MatchCard = ({ key, imgAlt, local }) => {
  return (
    <li className="available-match" key={key}>
      <img 
        className="match-image" 
        src='https://i.imgur.com/utOUfYv.png' 
        alt={imgAlt}
      />
      <div className="match-local">
        <MatchLocal local={local} />
      </div>
    </li>
  )
};

export default MatchCard;