import React, { useState, useEffect } from 'react';

import { MdKeyboardArrowDown as ArrowDownIcon, MdSearch as SearchIcon } from 'react-icons/md';

import PlayButton from '../PlayButton';
import NextStepButton from '../NextStepButton';
import StageTitle from '../StageTitle';
import StageBackButton from '../StageBackButton';

import Select from '../Select';

import convertDatasetForSelect from '../../utils/convertDatasetForSelect';

import api from '../../services/api';

import './styles.css';

const MatchCreationCard = () => {
  const [stage, switchStage] = useState(0);

  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [invitedPlayer, setInvitedPlayer] = useState(null);

  const [local, setLocal] = useState('Hall de Entrada');

  const [opponents, setOpponents] = useState([
    { id: 1, name: 'Oponente 1' }, 
    { id: 16, name: 'Oponente 2'} //temp, a ser definido depois
  ]);

  useEffect(() => {
    if(stage === 1) fetchGames();
    if(stage === 2) fetchAvailablePlayers();
  }, [stage]);

  const fetchGames = async () => {
    try {
      const response = await api.get('jogos');
      const data = await response.data;
      const convertedGames = convertDatasetForSelect(data, 'nome', 'id');
  
      setGames(convertedGames);
    }
    catch(err) {
      throw err;
    }
  };

  const fetchAvailablePlayers = async () => {
    try {
      const response = await api.get('usuarios/disponiveis');
      const data = await response.data;
      const convertedPlayers = convertDatasetForSelect(data, 'nome', 'id');
      setAvailablePlayers(convertedPlayers);
    }
    catch(err) {
      throw err;
    }   
  };

  const handleStageSkipping = e => {
    e.preventDefault();
    setInvitedPlayer(null);
    switchStage(3);
  };

  const handlePairDefinition = playerId => {
    if (getInvitePermission(playerId)){
      return switchStage(3);
    }
    else{
      return alert('O convite falhou!'); //a ser definido depois
    }
  }

  const getInvitePermission = playerId => {
    //a ser definido depois, retorna true por enquanto
    return true;
  };

  const handleStageBack = e => {
    e.preventDefault();

    switch(stage){
      case 2:
        return switchStage(1);
      case 3:
        return switchStage(2);
      default: 
        return switchStage(0);
    }
  }

  switch(stage) {
    case 1:
      return (
        <div className="match-creation-card-container">
          <h3 className="stage-progression">{stage}/3</h3>
          <StageTitle stage={stage} title="O que você vai jogar?" />
          <Select 
            options={games}
            dropdownIcon={ArrowDownIcon}
            value={{ label: selectedGame?.name || 'selecione o jogo', value: selectedGame?.id || '' }}
            onChange={e => setSelectedGame({ id: e.value, name: e.label })}
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
          <Select 
            options={availablePlayers}
            dropdownIcon={ArrowDownIcon}
            leftIcon={SearchIcon}
            value={{ label: invitedPlayer?.name || '', value: invitedPlayer?.id || '' }}
            onChange={e => setInvitedPlayer({ id: e.value, name: e.label })}
            searchable
          />
          <NextStepButton 
            text="próximo passo" 
            onClick={handlePairDefinition} 
            disabled={!!!invitedPlayer} 
          />
          <div id="skip-stage-button" onClick={handleStageSkipping}>pular etapa</div>
          <StageBackButton color="white" onClick={handleStageBack}/>
        </div>
      );
    case 3:
      return (
        <div className="match-creation-card-container">
          <h3 className="stage-progression">{stage}/3</h3>
          <StageTitle stage={stage} title="Revisando!" />
          <p className="third-stage-message">
            {
              invitedPlayer 
              ? <span>Você vai jogar <strong className="third-stage-emphasis">{selectedGame.name}</strong> no(a) <strong className="third-stage-emphasis">{local}</strong> com <strong className="third-stage-emphasis">{invitedPlayer.name}</strong>, <strong className="third-stage-emphasis">{opponents[0].name}</strong> e <strong>{opponents[1].name}</strong></span>
              : <span>Você vai jogar <strong className="third-stage-emphasis">{selectedGame.name}</strong> no(a) <strong className="third-stage-emphasis">{local}</strong>, sozinho(a)</span>
            }
          </p>
          <NextStepButton text="partiu jogar" onClick={() => {}} />
          <StageBackButton color="white" onClick={handleStageBack}/>
        </div>
      );    
    case 0: 
    default:
      return (
        <div className="match-creation-card-container match-creation-card-container-hoverable">
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