import React from 'react';
import Home from './HomeIcon';
import Profile from './ProfileIcon';
import Ranking from './RankingIcon';

import './style.css';

const Menu = () => {
     return (
        <div className="menu">
          <div className="items-menu">
            <Home />
            <Profile />
            <Ranking />
          </div>
        </div>
    )
};

export default Menu;