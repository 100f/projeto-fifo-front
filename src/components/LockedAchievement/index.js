import React from 'react';

import { IoMdLock as LockIcon } from 'react-icons/io';

import './styles.css';

const LockedAchievement = ({ backgroundColor = '#0A263A', color = 'white' }) => (
  <div className="locked-achievement-container" style={{ backgroundColor }}>
    <LockIcon className="locked-achievement-icon" size={28} color={color}/>
  </div>
);

export default LockedAchievement;