import React from 'react';

import { CgChevronLeft as BackButtonIcon } from 'react-icons/cg';

import './styles.css';

const StageBackButton = ({ onClick, color }) => 
  <BackButtonIcon
    className="stage-back-button" 
    size={25} 
    color={color} 
    onClick={onClick}
  />;

  export default StageBackButton;