import React from 'react';

import './styles.css';

const FavouriteGameCard = ({ gameImagePath, key }) => {
  return (
    <li key={key} className="favourite-game-image-container">
      <img src={gameImagePath} alt="Jogo Favorito"/>
    </li>
  )
};

export default FavouriteGameCard;