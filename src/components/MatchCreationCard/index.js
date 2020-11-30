import React, { useState, useEffect } from 'react';

import { MdKeyboardArrowDown as ArrowDownIcon, MdSearch as SearchIcon } from 'react-icons/md';

import useAuth from '../../hooks/useAuth';

import PlayButton from '../PlayButton';
import NextStepButton from '../NextStepButton';
import StageTitle from '../StageTitle';
import StageBackButton from '../StageBackButton';
import Select from '../Select';

import convertDatasetForSelect from '../../utils/convertDatasetForSelect';

import api from '../../services/api';

import './styles.css';

const MatchCreationCard = ({ otherGameMessage = false }) => {
  const [stage, switchStage] = useState(0);

  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [invitedPlayers, setInvitedPlayers] = useState([]);

  const [local, setLocal] = useState('Hall de Entrada');

  const { loggedUser: { id } } = useAuth();

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

  const handleMatchCreation = () => {
    // :-(
  };

  const handleStageSkipping = e => {
    e.preventDefault();
    setInvitedPlayers([]);
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
            value={invitedPlayers}
            placeholder="procurar player"
            onChange={selectedPlayers => {setInvitedPlayers(selectedPlayers)}}
            isMulti
            searchable
          />
          <NextStepButton 
            text="enviar convite(s)" 
            onClick={handlePairDefinition} 
            disabled={!invitedPlayers?.length > 0} 
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
              invitedPlayers.length > 0 
              ? <span>
                  Você vai jogar <strong className="third-stage-emphasis">{selectedGame.name}</strong> no(a) <strong className="third-stage-emphasis">{local}</strong> com { invitedPlayers.map((player, index) => index !== invitedPlayers.length - 1 && <strong className="third-stage-emphasis">{player.label}{index !== invitedPlayers.length - 2 && ','} </strong>)}  {invitedPlayers.length > 1 && 'e'} <strong className="third-stage-emphasis">{invitedPlayers[invitedPlayers.length - 1].label}.</strong>
                </span>
              : <span>Você vai jogar <strong className="third-stage-emphasis">{selectedGame.name}</strong> no(a) <strong className="third-stage-emphasis">{local}</strong>, sozinho(a).</span>
            }
          </p>
          <NextStepButton text="partiu jogar" onClick={handleMatchCreation} />
          <StageBackButton color="white" onClick={handleStageBack}/>
        </div>
      );    
    case 0: 
    default:
      return (
        <div className="match-creation-card-container match-creation-card-container-hoverable">
          <p className="default-stage-title">
            {
              otherGameMessage 
              ?
                <span>outro jogo?</span>
              :
                <span>cri cri cri...</span>
            }
            
          </p>
          <p className="default-stage-message">
            {
              otherGameMessage 
              ?
                <span>
                  Não encontrou o que estava procurando? <br/><br/>
                  Sem b.o. Só escolher outro jogo e <strong>entrar na fila.</strong>
                </span>
              :
                <span>
                  Ainda não escolheram nenhum jogo. <br/><br/>
                  Gostaria de <strong>começar uma partida?</strong>
                </span>
            }

          </p>
          <PlayButton onClick={() => switchStage(1)} />
        </div>
      )
  }
};

export default MatchCreationCard;