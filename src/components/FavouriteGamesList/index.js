import React from 'react';

import FavouriteGameCard from '../FavouriteGameCard';

import './styles.css'

const FavouriteGamesList = ({ list: games }) => {
  return (
    <ul id="favourite-games-list-container">
      {
        games.length > 0
        ?
          games.map(game => (
            <FavouriteGameCard key={game.id} gameImagePath={game.img_url}/>
          ))
        :
        <div className="no-fav">
          <p>Sem jogos...</p>
        </div>
      }
    </ul>
  )
};

export default FavouriteGamesList;