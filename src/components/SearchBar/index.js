import React from 'react';

import { MdSearch as SearchIcon } from 'react-icons/md';

import './styles.css';

const SearchBar = () => (
  <div id="search-bar-container">
    <SearchIcon className="search-bar-icon" size={24}/>
    <input type="text" />
  </div>
);

export default SearchBar;