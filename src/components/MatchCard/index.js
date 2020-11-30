import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import MatchLocal from '../MatchLocal';
import NextStepButton from '../NextStepButton';

import './styles.css';

import api from '../../services/api';

const MatchCard = ({ key, imgAlt, local, deviceId, gameId }) => {
  const [numberOfAheadParticipants, setNumberOfAheadParticipants] = useState(0);
  const [didHover, setDidHover] = useState(false);

  const history = useHistory();
  const { loggedUser: { id } } = useAuth();

  useEffect(() => {
    getParticipantsAhead();
  }, []);

  const getParticipantsAhead = async () => {
    const response = await api.get(`home/usuariosNaFila/${deviceId}`);
    const data = await response.data;

    setNumberOfAheadParticipants(data);
  };

  const gotoQueue = async (deviceId) => {
    await api.post('filas/convidar', {
      convidante: id,
      dispositivo: deviceId,
      jogo: gameId
    });

    history.push(`/queue/${deviceId}`);
  };

  return (
    <li 
      className="available-match" 
      key={key} 
      onMouseEnter={e => setDidHover(true)} 
      onMouseLeave={e => setDidHover(false)}
    >
      <div className="available-match-card-container">
        <div 
          className="available-match-card-hover-options" 
          style={{display: didHover ? 'flex' : 'none'}}
        >
          <h3>Há {numberOfAheadParticipants} pessoa(s) na sua frente</h3>
          <NextStepButton text="partiu fila" onClick={() => gotoQueue(deviceId)}/>
          <span>convidar alguém</span>
        </div>
        <img 
          className="match-image" 
          src='blob:https://imgur.com/689d0fbf-a9f2-4241-9a53-bc8d3b3550f3' 
          alt={imgAlt}
        />
      </div>
      <div className="match-local">
        <MatchLocal local={local} />
      </div>
    </li>
  )
};

export default MatchCard;