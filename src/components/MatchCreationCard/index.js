import React, { useState, useEffect } from 'react';

import PlayButton from '../PlayButton';
import NextStepButton from '../NextStepButton';
import StageTitle from '../StageTitle';
import GamesSelect from '../GamesSelect';
import PlayerSearchBar from '../PlayerSearchBar';

import api from '../../services/api';

import './styles.css';

const MatchCreationCard = () => {
  const [stage, switchStage] = useState(0);

  const [games, setGames] = useState([]);
  const [invitedPlayer, setInvitedPlayer] = useState('');
  const [selectedGame, setSelectedGame] = useState('');

  useEffect(() => {
    if(stage === 1) fetchGames();
  }, [stage]);

  const fetchGames = async () => {
    const response = await api.get('jogos');
    const fetchedGames = await response.data;
    setGames(fetchedGames);
  }

  switch(stage) {
    case 1:
      return (
        <div className="match-creation-card-container">
          <h3 className="stage-progression">{stage}/3</h3>
          <StageTitle stage={stage} title="O que você vai jogar?" />
          <GamesSelect 
            name="game" 
            games={games}
            value={selectedGame}
            onChange={e => setSelectedGame(e.target.value)}
          />
          <NextStepButton 
            text="próximo passo" 
            onClick={() => switchStage(2)} 
            disabled={!!!selectedGame}
          />
        </div>
      );
    case 2: 
      return (
        <div className="match-creation-card-container">
          <h3 className="stage-progression">{stage}/3</h3>
          <StageTitle stage={stage} title="Vai convidar alguém?" />
          <PlayerSearchBar name="invited-player" value={invitedPlayer} onChange={e => setInvitedPlayer(e.target.value)}/>
          <NextStepButton text="próximo passo" onClick={() => switchStage(3)} />
        </div>
      );
    case 3:
      return (
        <div className="match-creation-card-container">
          <h3 className="stage-progression">{stage}/3</h3>
          <StageTitle stage={stage} title="O que você vai jogar?" />
        </div>
      );    
    case 0: 
    default:
      return (
        <div className="match-creation-card-container">
          <p className="default-stage-title">cri cri cri...</p>
          <p className="default-stage-message">
            Ainda não escolheram nenhum jogo. <br/><br/>
            Gostaria de <strong>começar uma partida?</strong>
          </p>
          <PlayButton onClick={() => switchStage(1)} />
        </div>
      )
  }
};

export default MatchCreationCard;