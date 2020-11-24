import React, { useState, useEffect, useCallback } from 'react';

import { MdNotifications as NotificationsIcon } from 'react-icons/md';
import { VscTriangleDown as DownArrowIcon } from 'react-icons/vsc';

import AvailableMatchesList from '../../components/AvailableMatchesList';
import MatchCreationCard from '../../components/MatchCreationCard';
import FavouriteGamesList from '../../components/FavouriteGamesList';
import RankingRight from '../../components/Ranking/RankingRight';
import Menu from '../../components/Menu/Menu';
import SearchBar from '../../components/SearchBar';

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
    <div id="page-home">
      <div className="page-home-content">
        <header>
          <h2 className="page-home-content-title">O que estão jogando agora</h2>
          <SearchBar />
          <div className="round-button-wrapper">
            <NotificationsIcon size={24} className="round-button-icon"/>
          </div>
          <div className="round-button-wrapper">
            <DownArrowIcon size={32} className="round-button-icon"/>
          </div>
        </header>
        {
          availableMatches.length > 0
          ? <AvailableMatchesList list={availableMatches}/>
          : <MatchCreationCard />
        }    

        <h2 className="page-home-content-favs">Seus Favoritos</h2>
        <FavouriteGamesList list={favouriteGames}/>
        <RankingRight />
        <Menu/>
      </div>
    </div> 
  )
};

export default Home;