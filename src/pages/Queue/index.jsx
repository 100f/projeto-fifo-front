import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { MdKeyboardArrowDown as DownArrowIcon } from 'react-icons/md';

import useAuth from '../../hooks/useAuth';

import NextStepButton from '../../components/NextStepButton';
import Menu from '../../components/Menu/Menu';
import RankingRight from '../../components/Ranking/RankingRight';
import QueueList from '../../components/QueueList';
import TimeContainer from '../../components/TimeContainer';
import OngoingMatchCard from '../../components/OngoingMatchCard';
import Select from '../../components/Select';
import Whitespace from '../../components/Misc/WhitespaceFooter';

import convertDatasetForSelect from '../../utils/convertDatasetForSelect';

import api from '../../services/api';

import './styles.css';

const Queue = () => {
  const { id: deviceId } = useParams();
  const { loggedUser } = useAuth();
  
  const [gameName, setGameName] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [gameImagePath, setGameImagePath] = useState(null);
  const [estimatedGameTime, setEstimatedGameTime] = useState('20:00');
  
  const [queueMembers, setQueueMembers] = useState([]);
  const [isNext, setIsNext] = useState(false);

  //Estados relativos à aparição do card de mudança de jogo, quando o usuário quiser mudar de fila
  const [changeGame, setChangeGame] = useState(false);
  const [newGame, setNewGame] = useState({ id: 'selecione o jogo', name: '' });
  const [availableGames, setAvailableGames] = useState([]);

  useEffect(() => {
    fetchPageData();
  }, []);

  useEffect(() => {
    fetchCurrentQueueMembers();
  }, []);

  useEffect(() => {
    //getNextPlayer();
  }, [queueMembers]);

  const fetchCurrentQueueMembers = useCallback(async () => {
    try {
      const queueResponse = await api.get(`filas/${deviceId}`);
      const queueData = await queueResponse.data;
      setQueueMembers(queueData);
    }
    catch(err) {
      throw err;
    }
  }, [setQueueMembers]);

  const fetchPageData = useCallback(async () => {
    try {
      const gamesResponse = await api.get('home/jogos');
      const fetchedGames = await gamesResponse.data;
      const convertedGames = convertDatasetForSelect(fetchedGames, 'nome', 'id');
      setAvailableGames(convertedGames);

      const pageResponse = await api.get(`filas/${deviceId}/dadosPagina`);
      const pageData = await pageResponse.data;
      setDeviceName(pageData.nomeDispositivo);
      setGameName(pageData.nomeJogo);

      const gameImageResponse = await api.get(`jogos/${deviceId}`);
      const gameData = await gameImageResponse.data;
      setGameImagePath(gameData.urlCapa);
    }
    catch(err) {
      throw err;
    }
  }, [setGameName, setGameImagePath, setAvailableGames]);

  const getNextPlayer = async () => {
    const nextPlayer = queueMembers[0];
    setIsNext(nextPlayer.id === loggedUser.id);
  };

  return (
    <div id="queue-page-container">
      <Menu />
      <RankingRight />
      <div className="queue-page-content">
        <h1>{gameName}</h1>
        <div className="queue-game-container">
          <QueueList players={queueMembers}/>
          <div className="queue-game-mode-container">
            {
              isNext
              ? (
                <>
                  <h3>Você é o próximo</h3>
                  <p>Como gostaria de jogar?</p>
                  <div className="queue-game-mode-options">
                    <NextStepButton text="sozinho" disabled/>
                    <NextStepButton text="em dupla"/>
                    <NextStepButton text="em time"/>
                  </div>
                </>  
              )
              : (
                <>
                  <h3 className="estimated-game-time-label">Tempo de Espera Estimado</h3>
                  <TimeContainer time={estimatedGameTime}/> 
                  <div>
                    <p className="estimated-game-time-title">Você Sabia</p>
                    <p>Que é possível mudar o jogo que você escolheu enquanto está na fila?<br/>É só clicar na imagem ao lado e escolher um novo.</p>
                  </div>
                </>
              )
            }
          </div>
          {
            changeGame && 
            <div className="queue-game-selection-container">
              <p>Quer jogar outra coisa?</p>
              <p>
                Você só vai trocar de fila se já estiverem jogando o game em outra sala, ou se você não for jogar no {deviceName}.
              </p>
              <Select 
                options={availableGames} 
                dropdownIcon={DownArrowIcon}
                value={{ label: newGame?.name || 'selecione o jogo', value: newGame?.id || '' }}
                onChange={e => setNewGame({ name: e.label, id: e.value })}
              />
              <NextStepButton />
            </div>
          }
          {
            !changeGame && 
            <div className="queue-game-image" onClick={() => setChangeGame(true)}>
              {gameImagePath && <img src={gameImagePath} alt={gameName} />}
            </div> 
          }
        </div>
        
        <h2>Partida Atual</h2>
        <OngoingMatchCard game={gameName}/>
        <Whitespace/>
      </div>    
    </div>
  )
};

export default Queue;