import React from 'react';

import './styles.css';

const GamesSelect = ({ name, label, games, ...rest }) => (
  <div className="games-select-container">
    <select value="" id={name} {...rest}>
      <option className="games-select-option" value="" disabled hidden>Selecione o jogo</option>
      {
        games.map(game => (
          <option key={game.id} value={game.nome}>{game.nome}</option>
        ))
      }
    </select>
  </div>
);

export default GamesSelect;
