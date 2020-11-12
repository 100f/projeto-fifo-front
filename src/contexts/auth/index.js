import { createContext } from 'react';

const AuthContext = createContext({
  token: null,
  setToken: () => {},
  user: {},
});

export default AuthContext;

