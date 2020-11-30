import React, { useState } from 'react';

import MatchStateContext from './index';

const MatchStateProvider = ({ children }) => {
  const [matchState, setMatchState] = useState(0);
  
  return (
    <MatchStateContext.Provider value={{ matchState, setMatchState }} >
      {children}
    </MatchStateContext.Provider>
  )
};

export default MatchStateProvider;