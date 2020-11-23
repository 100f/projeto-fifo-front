import React, { useState, useEffect, useCallback } from 'react';

import AvailableMatchesList from '../../components/AvailableMatchesList';
import MatchCreationCard from '../../components/MatchCreationCard';
import FavouriteGamesList from '../../components/FavouriteGamesList';
import RankingRight from '../../components/Ranking/RankingRight';
import Menu from '../../components/Menu/Menu';

import mockGames from '../../assets/temp/favouriteGames.json';

import api from '../../services/api';

import './styles.css';

const Home = () => {
  const [availableMatches, setAvailableMatches] = useState([]);
  const [favouriteGames, setFavouriteGames] = useState([]);

  useEffect(() => {
    fetchAvailableMatches();
  }, []);

  useEffect(() => {
    //fetchFavouriteGames(); temp
  }, []);

  const fetchAvailableMatches = useCallback(async () => {
    try {
      const response = await api.get('home/partidas');
      setAvailableMatches(response.data);
    }
    catch(err) {
      throw err;
    }
  }, [setAvailableMatches]);

  const fetchFavouriteGames = useCallback(() => {
    try {
      setFavouriteGames(mockGames);
    }
    catch(err) {
      throw err;
    }
  }, [setFavouriteGames])

  return (
    <div id='page-home'>
      <RankingRight />
      <Menu/>
      <div className="page-home-content">
        <h2>O que estão jogando agora</h2>
        {
          availableMatches.length > 0
          ? <AvailableMatchesList list={availableMatches}/>
          : <MatchCreationCard />
        }    

        <h2 className="page-home-content-favs">Seus Favoritos</h2>
        <FavouriteGamesList list={favouriteGames}/>
      </div>
    </div> 
  )
};

export default Home;