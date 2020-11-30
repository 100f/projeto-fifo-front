import React, { useEffect, useState, useCallback } from 'react';

import Menu from '../../components/Menu/Menu';
import RankingRight from '../../components/Ranking/RankingRight';
import SmallQueueList from '../../components/SmallQueueList';
import YourMatch from '../../components/YourMatch';
import LockedAchievement from '../../components/LockedAchievement';
import Whitespace from '../../components/Misc/WhitespaceFooter';

import mockMembers from '../../assets/temp/queueMembers.json';

import api from '../../services/api';

import './styles.css';

const Match = () => {
  const [dispName, setDispName] = useState('PS4 - Hall de Entrada');
  const [gameName, setGameName] = useState('Fifa');
  const [queueMembers, setQueueMembers] = useState([]);

  useEffect(() => {
    fetchCurrentQueueMembers();
  }, []);

  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchCurrentQueueMembers = useCallback(async () => {
    setQueueMembers(mockMembers);
  }, [setQueueMembers]);

  const fetchPageData = useCallback(async () => {
    const pageResponse = await api.get('');
  }, []);



  return (
    <div id="match-page-container">
      <Menu />
      <RankingRight />
      <div className="match-page-content">
        <h1>{dispName}</h1>

        <YourMatch />

        <div className="next-queue-members-card">
              <div>
                <p className="next-queue-members-game-name">Próximos da Fila</p>
                <SmallQueueList players={queueMembers}/>
              </div>
              <p className="match-achievements-label">Suas Conquistas no {gameName}</p>
              <div className="game-achievements-container">
                <div className="ach-a">
                  <LockedAchievement />
                </div>
                <div className="ach-b">
                  <LockedAchievement />
                </div>
                <div className="ach-c">
                  <LockedAchievement />
                </div>
                <div className="ach-d">
                  <LockedAchievement />
                </div>
                <div className="ach-e">
                  <LockedAchievement />
                </div>
                <div className="ach-f">
                  <LockedAchievement />
                </div>
                <div className="ach-g">
                  <LockedAchievement />
                </div>

              </div>
            </div>
        <Whitespace />
      </div>
    </div>
  )
};

export default Match;