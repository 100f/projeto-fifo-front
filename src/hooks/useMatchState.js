import { useContext } from 'react';

import MatchStateContext from '../contexts/matchState';

const useMatchState = () => {
  const context = useContext(MatchStateContext);

  return context;
};

export default useMatchState;