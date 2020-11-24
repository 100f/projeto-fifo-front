import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import NextStepButton from '../../components/NextStepButton';
import Menu from '../../components/Menu/Menu';
import RankingRight from '../../components/Ranking/RankingRight';
import QueueList from '../../components/QueueList';
import TimeContainer from '../../components/TimeContainer';
import OngoingMatchCard from '../../components/OngoingMatchCard';

import mockMembers from '../../assets/temp/queueMembers.json';
import api from '../../services/api';

import './styles.css';

const Queue = () => {
  const { id: gameId } = useParams();
  
  const [gameName, setGameName] = useState('Fifa');
  const [gameImagePath, setGameImagePath] = useState(null);
  const [estimatedGameTime, setEstimatedGameTime] = useState('20:00');
  
  const [queueMembers, setQueueMembers] = useState([]);
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    fetchPageData();
  }, []);

  useEffect(() => {
    fetchCurrentQueueMembers();
  }, []);

  useEffect(() => {
    getNextPlayer();
  }, [queueMembers]);

  const fetchCurrentQueueMembers = useCallback(async () => {
    setQueueMembers(mockMembers);
  }, [setQueueMembers]);

  const fetchPageData = useCallback(() => {

  }, [setGameName, setGameImagePath]);

  const getNextPlayer = async () => {

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
                </>
              )
            }
            
          </div>
          <div className="queue-game-image">
            <img src={gameImagePath} alt={gameName} />
          </div> 
        </div>
        
        <h2>Partida Atual</h2>
        <OngoingMatchCard />
      </div>
    </div>
  )
};

export default Queue;