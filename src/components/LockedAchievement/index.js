import React from 'react';

import { IoMdLock as LockIcon } from 'react-icons/io';

import './styles.css';

const LockedAchievement = () => (
  <div className="locked-achievement-container">
    <LockIcon className="locked-achievement-icon" size={28} />
  </div>
);

export default LockedAchievement;