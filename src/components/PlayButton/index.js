import React from 'react';

import { ReactComponent as PlayIcon } from '../../assets/icons/play-arrow.svg';

import './styles.css';

const PlayButton = ({ onClick }) => (
  <div id="play-button-container" onClick={onClick}>
    <PlayIcon className="play-button-icon" />
  </div>
);

export default PlayButton;