import React, { useEffect, useState, useCallback } from 'react';

import Menu from '../../components/Menu/Menu';
import RankingRight from '../../components/Ranking/RankingRight';
import QueueList from '../../components/QueueList';
import YourMatch from '../../components/YourMatch';

import mockMembers from '../../assets/temp/queueMembers.json';

import './styles.css';

const Match = () => {
  const [dispName, setDispName] = useState('PS4');
  const [spaceName, setSpaceName] = useState ('Hall de Entrada')
  const [queueMembers, setQueueMembers] = useState([]);

  useEffect(() => {
    fetchCurrentQueueMembers();
  }, []);

  const fetchCurrentQueueMembers = useCallback(async () => {
    setQueueMembers(mockMembers);
  }, [setQueueMembers]);


  return (
    <div id="match-page-container">
      <Menu />
      <RankingRight />
      <div className="match-page-content">
        <h1>{dispName} - {spaceName}</h1>

            <YourMatch />

            <div className="next">
                <p id="title">Próximos da Fila</p>
                <QueueList players={queueMembers}/>
            </div>
            
      </div>
    </div>
  )
};

export default Match;