import React from 'react';

import AvailableMatchesList from '../../components/AvailableMatchesList';
import MatchCreationCard from '../../components/MatchCreationCard';

import './styles.css';

const availableMatches = {"partidas": []};

const Home = () => {
  return (
    <div id='page-home'>
      <h2>O que estão jogando agora</h2>
      {
        availableMatches.partidas?.length > 0
        ? <AvailableMatchesList list={availableMatches}/>
        : <MatchCreationCard />
      }    
    </div>
  )
};

export default Home;