import { createContext } from 'react';

const MatchStateContext = createContext({
  matchState: 0,
  setMatchState: () => {}
});

export default MatchStateContext;