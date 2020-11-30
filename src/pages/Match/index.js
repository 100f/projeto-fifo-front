import React, { useEffect, useState, useCallback } from 'react';

import useMatchState from '../../hooks/useMatchState';

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

  const { matchState } = useMatchState();

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

        <div 
          className="next-queue-members-card" 
          style={{ 
            backgroundColor: matchState !== 0 
            ? 'white'
            : '#0A263A'
          }}
        >
          <div>
            <p 
              className="next-queue-members-game-name"
              style={{ 
                color: matchState !== 0 
                ? '#0A263A'
                : 'white'
              }}
            >
              Próximos da Fila
            </p>
            <SmallQueueList players={queueMembers}/>
          </div>
          <p 
            className="match-achievements-label" 
            style={{ 
              color: matchState !== 0 
              ? '#0A263A'
              : 'white'
            }}
          >
            Suas Conquistas no {gameName}
          </p>
          <div className="game-achievements-container">
            <div className="ach-a">
              <LockedAchievement 
                backgroundColor={matchState !== 0 ? '#F5F7FB' : '#0A263A'} 
                color={matchState !== 0 ? '#0A263A' : 'white'}
              />
            </div>
            <div className="ach-b">
              <LockedAchievement 
                backgroundColor={matchState !== 0 ? '#F5F7FB' : '#0A263A'} 
                color={matchState !== 0 ? '#0A263A' : 'white'}
              />
            </div>
            <div className="ach-c">
              <LockedAchievement 
                backgroundColor={matchState !== 0 ? '#F5F7FB' : '#0A263A'} 
                color={matchState !== 0 ? '#0A263A' : 'white'}
              />
            </div>
            <div className="ach-d">
              <LockedAchievement 
                backgroundColor={matchState !== 0 ? '#F5F7FB' : '#0A263A'} 
                color={matchState !== 0 ? '#0A263A' : 'white'}
              />
            </div>
            <div className="ach-e">
              <LockedAchievement 
                backgroundColor={matchState !== 0 ? '#F5F7FB' : '#0A263A'} 
                color={matchState !== 0 ? '#0A263A' : 'white'}
              />
            </div>
            <div className="ach-f">
              <LockedAchievement 
                backgroundColor={matchState !== 0 ? '#F5F7FB' : '#0A263A'} 
                color={matchState !== 0 ? '#0A263A' : 'white'}
              />
            </div>
            <div className="ach-g">
              <LockedAchievement 
                backgroundColor={matchState !== 0 ? '#F5F7FB' : '#0A263A'} 
                color={matchState !== 0 ? '#0A263A' : 'white'}
              />
            </div>

          </div>
        </div>
        <Whitespace />
      </div>
    </div>
  )
};

export default Match;